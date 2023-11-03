import { ChromeStorage, ProgrammersProblem } from "@Data/ChromeStorage";
import {
  $,
  $$,
  LANGUAGES,
  SOLVEDAC_LEVEL,
  chromeStorageId,
  convertSingleCharToDoubleChar,
  getChromeLocalStorage,
  getReadmeText,
  getTimeDiff,
} from "@utils";
import { commitCodeToRepo } from "API/postReqAPI";

type ParamCreateProblemContent = {
  description: string;
  acceptedUserCount?: number;
  averageTries?: number;
  official?: boolean;
  title: string;
  problemId: string;
  solvingTime: string;
  spentTime: string;
  spentMemory: string;
  category: string;
  language: string;
  level?: string;
};

type ParamGetMessage = {
  title: string;
  spentMemory: string;
  spentTime: string;
  solvingTime: string;
  level?: string;
};

export default class Programmers {
  static getProblemInfoFromList(this: any) {
    const problems = $$("tr", this.node as HTMLElement);
    return problems.slice(1).map((problem) => {
      const isSolved = $("td.status.solved", problem) ? "solved" : "unsolved";
      const title = $("td.title", problem).innerText;
      const level = $("td.level", problem).innerText;
      const finishedCount = $("td.finished-count", problem).innerText;
      const acceptanceRate = $("td.acceptance-rate", problem).innerText;
      return {
        element: problem,
        isSolved,
        title,
        level,
        finishedCount,
        acceptanceRate,
      };
    });
  }

  static checkSuccess() {
    const modalTitle = $(".modal-title");
    if (modalTitle.innerText.includes("정답입니다")) {
      return true;
    }
    return false;
  }

  static async afterSuccess(isUpload: boolean, setStatus: Function) {
    const { ProgrammersStartTime } = (await getChromeLocalStorage(
      chromeStorageId.ProgrammersStartTime
    )) as Partial<ChromeStorage>;
    const ProblemInfo = (await getChromeLocalStorage(
      chromeStorageId.ProgrammersProblemInfo
    )) as ProgrammersProblem;

    const title = $("li.algorithm-title").innerText.replace(/\\n/g, "").trim();
    const solvingTime = Object.values(
      getTimeDiff(ProgrammersStartTime as number, new Date().getTime())
    ).join(" : ");
    const problemId = $("div.main > div.lesson-content").getAttribute(
      "data-lesson-id"
    ) as string;
    const level = levels[problemId];
    const category = [...$("ol.breadcrumb")!.childNodes]
      .map((node) => node as HTMLElement)
      .filter((node) => node.className !== "active")
      .map((node) => node.innerText)
      .join(", ");

    const description = $(
      "div.guide-section-description > div.markdown"
    )!.innerHTML;
    const language = $("div.editor > ul > li.nav-item > a")!.innerText.split(
      "."
    )[1];
    const code = this.parseCode();

    const [spentTime, spentMemory] = this.getTimeAndMemory();
    const problemContent = await this.createProblemContent({
      title,
      spentMemory,
      problemId,
      spentTime,
      solvingTime,
      language,
      level,
      description,
      category,
    });

    if (isUpload) {
      const resStatus = await commitCodeToRepo({ ...problemContent, code });
      if (resStatus === 200) {
        setStatus({ isCommited: true });
        return;
      }
      setStatus({ isCommited: false });
    }
  }

  static parseCode() {
    return $("textarea#code").innerText;
  }

  static getTimeAndMemory = () => {
    return $$(".result.passed")
      .map((tr) => tr.innerText)
      .map((node) => node.substring(node.indexOf("(") + 1, node.indexOf(")")))
      .map((node) =>
        node.split(", ").map((word) => {
          if (word.includes("m")) {
            return word.substring(0, word.indexOf("m"));
          }
          return word.substring(0, word.indexOf("M"));
        })
      )
      .reduce(
        (
          [resultTime, resultMemory],
          [currentTime, currentMemory],
          idx,
          arr
        ) => {
          if (idx !== arr.length - 1) {
            resultTime += Number(currentTime);
            resultMemory += Number(currentMemory);
            return [resultTime, resultMemory];
          }

          return [resultTime / arr.length, resultMemory / arr.length];
        },
        [0, 0]
      )
      .map((num) => num.toFixed(2));
  };

  static async createProblemContent({
    solvingTime,
    description,
    category,
    level,
    title,
    problemId,
    spentMemory,
    spentTime,
    language,
  }: ParamCreateProblemContent) {
    const directory = this.getDirectory(level, problemId, title);
    const message = this.getMessage({
      title,
      level,
      spentMemory,
      spentTime,
      solvingTime,
    });
    const fileName = this.getFileName(title, language);
    const readMe = getReadmeText({
      level,
      title,
      solvingTime,
      problemId,
      spentMemory,
      spentTime,
      category,
      description,
    });
    return { directory, message, fileName, category, readMe };
  }

  static getDirectory(
    level: string | undefined,
    problemId: string,
    title: string
  ) {
    if (level) {
      return `프로그래머스/${level}/${problemId}.${title}`.replace(" ", "");
    }
    return `프로그래머스/${problemId}.${title}`.replace(" ", "");
  }

  static getMessage = ({
    level,
    title,
    spentMemory,
    spentTime,
    solvingTime,
  }: ParamGetMessage) =>
    `[${level}] Title: ${title} - Time: ${spentTime} ms, Memory: ${spentMemory} KB, Time to solve: ${solvingTime}`;

  static getFileName = (title: string, language: string) =>
    `${convertSingleCharToDoubleChar(title)}.${LANGUAGES[language]}`;
}

const levels: { [key: string]: string } = {
  1829: "lv2",
  1830: "lv3",
  1831: "lv4",
  1832: "lv3",
  1833: "lv3",
  1834: "lv5",
  1835: "lv2",
  1836: "lv3",
  1837: "lv3",
  1838: "lv3",
  1839: "lv4",
  1840: "lv5",
  1841: "lv5",
  1842: "lv5",
  1843: "lv4",
  1844: "lv2",
  1845: "lv1",
  12899: "lv2",
  12900: "lv2",
  12901: "lv1",
  12902: "lv2",
  12903: "lv1",
  12904: "lv3",
  12905: "lv2",
  12906: "lv1",
  12907: "lv3",
  12909: "lv2",
  12910: "lv1",
  12911: "lv2",
  12912: "lv1",
  12913: "lv2",
  12914: "lv2",
  12915: "lv1",
  12916: "lv1",
  12917: "lv1",
  12918: "lv1",
  12919: "lv1",
  12920: "lv3",
  12921: "lv1",
  12922: "lv1",
  12923: "lv2",
  12924: "lv2",
  12925: "lv1",
  12926: "lv1",
  12927: "lv3",
  12928: "lv1",
  12929: "lv4",
  12930: "lv1",
  12931: "lv1",
  12932: "lv1",
  12933: "lv1",
  12934: "lv1",
  12935: "lv1",
  12936: "lv2",
  12937: "lv1",
  12938: "lv3",
  12939: "lv2",
  12940: "lv1",
  12941: "lv2",
  12942: "lv3",
  12943: "lv1",
  12944: "lv1",
  12945: "lv2",
  12946: "lv2",
  12947: "lv1",
  12948: "lv1",
  12949: "lv2",
  12950: "lv1",
  12951: "lv2",
  12952: "lv2",
  12953: "lv2",
  12954: "lv1",
  12969: "lv1",
  12971: "lv3",
  12973: "lv2",
  12974: "lv5",
  12977: "lv1",
  12978: "lv2",
  12979: "lv3",
  12980: "lv2",
  12981: "lv2",
  12982: "lv1",
  12983: "lv4",
  12984: "lv4",
  12985: "lv2",
  12987: "lv3",
  17676: "lv3",
  17677: "lv2",
  17678: "lv3",
  17679: "lv2",
  17680: "lv2",
  17681: "lv1",
  17682: "lv1",
  17683: "lv2",
  17684: "lv2",
  17685: "lv4",
  17686: "lv2",
  17687: "lv2",
  42576: "lv1",
  42577: "lv2",
  42578: "lv2",
  42579: "lv3",
  42583: "lv2",
  42584: "lv2",
  42586: "lv2",
  42587: "lv2",
  42626: "lv2",
  42627: "lv3",
  42628: "lv3",
  42746: "lv2",
  42747: "lv2",
  42748: "lv1",
  42839: "lv2",
  42840: "lv1",
  42842: "lv2",
  42860: "lv2",
  42861: "lv3",
  42862: "lv1",
  42883: "lv2",
  42884: "lv3",
  42885: "lv2",
  42888: "lv2",
  42889: "lv1",
  42890: "lv2",
  42891: "lv4",
  42892: "lv3",
  42893: "lv3",
  42894: "lv4",
  42895: "lv3",
  42897: "lv4",
  42898: "lv3",
  43105: "lv3",
  43162: "lv3",
  43163: "lv3",
  43164: "lv3",
  43165: "lv2",
  43236: "lv4",
  43238: "lv3",
  49189: "lv3",
  49190: "lv5",
  49191: "lv3",
  49993: "lv2",
  49994: "lv2",
  49995: "lv4",
  59034: "lv1",
  59035: "lv1",
  59036: "lv1",
  59037: "lv1",
  59038: "lv2",
  59039: "lv1",
  59040: "lv2",
  59041: "lv2",
  59042: "lv3",
  59043: "lv3",
  59044: "lv3",
  59045: "lv4",
  59046: "lv2",
  59047: "lv2",
  59403: "lv1",
  59404: "lv1",
  59405: "lv1",
  59406: "lv2",
  59407: "lv1",
  59408: "lv2",
  59409: "lv2",
  59410: "lv2",
  59411: "lv3",
  59412: "lv2",
  59413: "lv4",
  59414: "lv2",
  59415: "lv1",
  60057: "lv2",
  60058: "lv2",
  60059: "lv3",
  60060: "lv4",
  60061: "lv3",
  60062: "lv3",
  60063: "lv3",
  62048: "lv2",
  62050: "lv4",
  62284: "lv4",
  64061: "lv1",
  64062: "lv3",
  64063: "lv4",
  64064: "lv3",
  64065: "lv2",
  67256: "lv1",
  67257: "lv2",
  67258: "lv3",
  67259: "lv3",
  67260: "lv4",
  68644: "lv1",
  68645: "lv2",
  68646: "lv3",
  68647: "lv4",
  68935: "lv1",
  68936: "lv2",
  68937: "lv4",
  68938: "lv5",
  70128: "lv1",
  70129: "lv2",
  70130: "lv3",
  70132: "lv5",
  72410: "lv1",
  72411: "lv2",
  72412: "lv2",
  72413: "lv3",
  72414: "lv3",
  72415: "lv3",
  72416: "lv4",
  76501: "lv1",
  76502: "lv2",
  76503: "lv3",
  76504: "lv5",
  77484: "lv1",
  77485: "lv2",
  77486: "lv3",
  77487: "lv3",
  77884: "lv1",
  77885: "lv2",
  77886: "lv3",
  77887: "lv5",
  81301: "lv1",
  81302: "lv2",
  81303: "lv3",
  81304: "lv4",
  81305: "lv5",
  82612: "lv1",
  84021: "lv3",
  84512: "lv2",
  86051: "lv1",
  86052: "lv2",
  86053: "lv3",
  86054: "lv4",
  86491: "lv1",
  86971: "lv2",
  87377: "lv2",
  87389: "lv1",
  87390: "lv2",
  87391: "lv3",
  87394: "lv5",
  87694: "lv3",
  87946: "lv2",
  92334: "lv1",
  92335: "lv2",
  92341: "lv2",
  92342: "lv2",
  92343: "lv3",
  92344: "lv3",
  92345: "lv3",
  118666: "lv1",
  118667: "lv2",
  118668: "lv3",
  118669: "lv3",
  118670: "lv4",
  120583: "lv0",
  120585: "lv0",
  120802: "lv0",
  120803: "lv0",
  120804: "lv0",
  120805: "lv0",
  120806: "lv0",
  120807: "lv0",
  120808: "lv0",
  120809: "lv0",
  120810: "lv0",
  120811: "lv0",
  120812: "lv0",
  120813: "lv0",
  120814: "lv0",
  120815: "lv0",
  120816: "lv0",
  120817: "lv0",
  120818: "lv0",
  120819: "lv0",
  120820: "lv0",
  120821: "lv0",
  120822: "lv0",
  120823: "lv0",
  120824: "lv0",
  120825: "lv0",
  120826: "lv0",
  120829: "lv0",
  120830: "lv0",
  120831: "lv0",
  120833: "lv0",
  120834: "lv0",
  120835: "lv0",
  120836: "lv0",
  120837: "lv0",
  120838: "lv0",
  120839: "lv0",
  120840: "lv0",
  120841: "lv0",
  120842: "lv0",
  120843: "lv0",
  120844: "lv0",
  120845: "lv0",
  120846: "lv0",
  120847: "lv0",
  120848: "lv0",
  120849: "lv0",
  120850: "lv0",
  120851: "lv0",
  120852: "lv0",
  120853: "lv0",
  120854: "lv0",
  120860: "lv0",
  120861: "lv0",
  120862: "lv0",
  120863: "lv0",
  120864: "lv0",
  120866: "lv0",
  120868: "lv0",
  120869: "lv0",
  120871: "lv0",
  120875: "lv0",
  120876: "lv0",
  120878: "lv0",
  120880: "lv0",
  120882: "lv0",
  120883: "lv0",
  120884: "lv0",
  120885: "lv0",
  120886: "lv0",
  120887: "lv0",
  120888: "lv0",
  120889: "lv0",
  120890: "lv0",
  120891: "lv0",
  120892: "lv0",
  120893: "lv0",
  120894: "lv0",
  120895: "lv0",
  120896: "lv0",
  120897: "lv0",
  120898: "lv0",
  120899: "lv0",
  120902: "lv0",
  120903: "lv0",
  120904: "lv0",
  120905: "lv0",
  120906: "lv0",
  120907: "lv0",
  120908: "lv0",
  120909: "lv0",
  120910: "lv0",
  120911: "lv0",
  120912: "lv0",
  120913: "lv0",
  120921: "lv0",
  120922: "lv0",
  120923: "lv0",
  120924: "lv0",
  120956: "lv0",
  131112: "lv1",
  131113: "lv3",
  131114: "lv1",
  131115: "lv2",
  131116: "lv4",
  131117: "lv4",
  131118: "lv4",
  131120: "lv2",
  131123: "lv3",
  131124: "lv4",
  131127: "lv2",
  131128: "lv1",
  131129: "lv3",
  131130: "lv2",
  131528: "lv1",
  131529: "lv2",
  131530: "lv2",
  131532: "lv4",
  131533: "lv2",
  131534: "lv5",
  131535: "lv1",
  131536: "lv2",
  131537: "lv4",
  131697: "lv1",
  131701: "lv2",
  131702: "lv3",
  131703: "lv3",
  131704: "lv2",
  131705: "lv1",
};
