import { Component } from "@Components";
import { $ } from "@utils";
import { ActiveElement, Chart, ChartEvent, TooltipItem } from "chart.js";

type PropsEfficiencyChart = {
  data: Array<string | number>;
  myData: string;
  avatarUrl: string;
  links: string[];
  effShow: "RUNTIME" | "MEMORY";
};

interface frequencyObjType {
  [key: string]: number;
}

export default class EfficiencyChart extends Component<PropsEfficiencyChart> {
  createChildComponents(): void {
    const { data, myData, avatarUrl, links, effShow } = this.state;
    const ctx = this.node.querySelector("#myChart") as HTMLCanvasElement;
    const totalCount = data.length;

    let frequency = data.reduce((acc, num) => {
      if (num in acc) {
        acc[num] = acc[num] + 1;
        return acc;
      }
      acc[num] = 1 / totalCount;
      return acc;
    }, {} as frequencyObjType);

    const frequencyPercentage = Object.entries(frequency).reduce(
      (acc, [key, value]) => {
        acc[key] = (value / totalCount) * 100;
        return acc;
      },
      {} as frequencyObjType
    );

    const values = Object.keys(frequency).map(Number);

    const minValue = Math.min(...values);
    const maxValue = Math.max(...values);

    // 동적으로 구간 수 결정 (예: 데이터의 고유 값 개수에 따라)
    const uniqueValues = new Set(values);
    const numBins = Math.min(uniqueValues.size, 30);

    const binWidth = (maxValue - minValue) / numBins;
    const bins: number[] = new Array(numBins).fill(0);
    const labels: string[] = [];
    const labelLinks: string[][] = new Array(numBins).fill([]).map(() => []);
    const binValues: number[][] = new Array(numBins).fill([]).map(() => []);

    // 라벨 생성
    for (let i = 0; i < numBins; i++) {
      const binStart = minValue + i * binWidth;
      const binEnd = binStart + binWidth;
      values.forEach((value, index) => {
        if (value >= binStart && value < binEnd) {
          bins[i]++;
          binValues[i].push(value);
          if (links[index]) {
            labelLinks[i].push(links[index]);
          }
        }
      });
      if (binValues[i].length > 0) {
        const sortedBinValues = binValues[i].sort((a, b) => a - b);
        const medianValue =
          sortedBinValues[Math.floor(sortedBinValues.length / 2)];
        if (effShow === "RUNTIME") {
          labels.push(medianValue.toFixed(1) + "ms");
        } else {
          labels.push(medianValue.toFixed(1) + "mb");
        }
      } else {
        if (effShow === "RUNTIME") {
          labels.push(((binStart + binEnd) / 2).toFixed(1) + "ms");
        } else {
          labels.push(((binStart + binEnd) / 2).toFixed(1) + "mb");
        }
      }
    }

    // 백분율로 변환
    const binsPercentage = bins.map((count) => (count / totalCount) * 100);

    const chartData = {
      labels,
      datasets: [
        {
          data: binsPercentage,
          backgroundColor: "rgba(54, 162, 235, 0.8)",
          borderColor: "rgba(66, 133, 244, 1)",
          borderWidth: 1,
          borderRadius: 8,
        },
      ],
    };

    const myBinIndex = Math.floor((Number(myData) - minValue) / binWidth);

    const img = new Image();
    img.src = avatarUrl;
    const plugin = {
      id: "highlightMyDataPoint",
      afterDatasetsDraw(chart: Chart, args: any, options: any) {
        const ctx = chart.ctx;
        const dataset = chart.getDatasetMeta(0);

        // myBinIndex가 유효한지 확인
        if (myBinIndex >= 0 && myBinIndex < dataset.data.length) {
          const model = dataset.data[myBinIndex].tooltipPosition(true);

          if (img.complete) {
            const radius = 15; // 원의 반지름
            const x = model.x;
            const y = model.y - 25;
            // 원형 클리핑 및 이미지 그리기
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);
            ctx.restore();

            // 원형 테두리 그리기
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = "rgba(66, 133, 244, 1)";
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        }
      },
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: Math.ceil(Math.max(...binsPercentage) / 5) * 10, // 더 작은 단위로 조정
          ticks: {
            callback: function (value: number | string) {
              return value.toString() + "%"; // Y축 레이블 설정
            },
            stepSize: 10,
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            callback: function (value: string | number, index: number) {
              return labels[index] as string;
            },
            maxRotation: 0,
            minRotation: 0,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              return context.parsed.y.toFixed(2) + "%";
            },
          },
        },
      },
      elements: {
        bar: {
          backgroundColor: "rgba(75, 192, 192, 0.6)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      },
      onClick: (event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
        if (elements.length > 0) {
          const elementIndex = elements[0].index;
          const urlArray = labelLinks[elementIndex];
          if (urlArray.length > 0) {
            window.open(urlArray[0], "_blank");
          }
        }
      },
      hover: {
        mode: "nearest" as "nearest",
        intersect: true,
        onHover: (
          event: ChartEvent,
          elements: ActiveElement[],
          chart: Chart
        ) => {
          const canvas = chart.canvas;
          if (elements.length) {
            canvas.style.cursor = "pointer";
          } else {
            canvas.style.cursor = "default";
          }
        },
      },
      barPercentage: 1,
      categoryPercentage: 0.9,
    };

    const myChart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: options,
      plugins: [plugin],
    });

    // Chart.js의 글로벌 이벤트 리스너로 캔버스 커서 변경 처리
    ctx.addEventListener("mousemove", function (event) {
      const points = myChart.getElementsAtEventForMode(
        event,
        "nearest",
        { intersect: true },
        false
      );
      if (points.length) {
        ctx.style.cursor = "pointer";
      } else {
        ctx.style.cursor = "default";
      }
    });
  }

  template(): string {
    return `
      <div>
      <canvas id="myChart" class="eff-body">
        <div class="chart-top" data-highcharts-chart="10" >
            <div class="chart-top-content">

            </div>
          </div>
        <div class="chart-bottom"></div>
      </canvas>
      </div>
    `;
  }
}
