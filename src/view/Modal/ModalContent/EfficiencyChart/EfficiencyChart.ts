import { Component } from "@Components";

type PropsEfficiencyChart = {};

export default class EfficiencyChart extends Component<PropsEfficiencyChart> {
  template(): string {
    return `
    <div>
      <div class="chart-top" data-highcharts-chart="10" >
        <div class="chart-top-content"></div>
      </div>
      <div class="chart-bottom"></div>
    </div>
    `;
  }
}
