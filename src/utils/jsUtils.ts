import Component from "../view/Home/Component";

type $ = (targetName: string, parentEl?: HTMLElement | Document) => HTMLElement;
export const $: $ = (targetName, parentEl) => {
  const element = parentEl
    ? parentEl.querySelector(targetName)
    : document.querySelector(targetName);
  if (!element) throw new Error(`${targetName} element를 찾을 수 없습니다`);
  return element as HTMLElement;
};

export const selectEl = (selector: string, context: any): Element =>
  context.querySelector(selector);

export const selectAllEl = (selector: string, context: any): Element[] =>
  context.querySelectorAll(selector);

type $$ = (targetName: string, parentEl?: HTMLElement) => HTMLElement[];
export const $$: $$ = (targetName, parentEl) => {
  const elements = parentEl
    ? parentEl.querySelectorAll(targetName)
    : document.querySelectorAll(targetName);
  if (!elements) throw new Error(`${targetName} elements를 찾을 수 없습니다`);
  return Array.prototype.slice.call(elements);
};

type getElById = (targetId: string) => HTMLElement;
export const getElById: getElById = (targetId) => {
  const element = document.getElementById(targetId);
  if (!element)
    throw new Error(`${targetId}id를 가진 엘리먼트를 찾을 수 없습니다`);
  return element;
};

type EventHandler = (
  el: HTMLElement | Window | Document,
  type: string,
  fn: EventListenerOrEventListenerObject,
  options?: object
) => void;
export const enrollEvent: EventHandler = (el, type, fn, options) => {
  el.addEventListener(type, fn, options);
};

export const removeEvent: EventHandler = (el, type, fn) => {
  el.removeEventListener(type, fn);
};

export const isObjEmpty = (obj: Object) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

export const b64EncodeUnicode = (str: string) => {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9=A-F]{2})/g, function (match, p) {
      return String.fromCharCode(Number(`0x${p}`));
    })
  );
};

export const convertSingleCharToDoubleChar = (text: string) => {
  // singleChar to doubleChar mapping
  const map: Record<string, string> = {
    "!": "！",
    "%": "％",
    "&": "＆",
    "(": "（",
    ")": "）",
    "*": "＊",
    "+": "＋",
    ",": "，",
    "-": "－",
    ".": "．",
    "/": "／",
    ":": "：",
    ";": "；",
    "<": "＜",
    "=": "＝",
    ">": "＞",
    "?": "？",
    "@": "＠",
    "[": "［",
    "\\": "＼",
    "]": "］",
    "^": "＾",
    _: "＿",
    "`": "｀",
    "{": "｛",
    "|": "｜",
    "}": "｝",
    "~": "～",
    " ": " ", // 공백만 전각문자가 아닌 FOUR-PER-EM SPACE로 변환
  };
  return text.replace(
    /[!%&()*+,\-./:;<=>?@\[\\\]^_`{|}~ ]/g,
    (k: string) => map[k]
  );
};

export type Time = {
  h: string;
  m: string;
  s: string;
};
export const createeTimer = (callbackFn: Function) => {
  let [secs, mins, hours] = [0, 0, 0];
  const timer = setInterval(() => {
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
    }
    if (mins == 60) {
      mins = 0;
      hours++;
    }
    if (hours == 10) {
      clearInterval(timer);
    }
    const h = hours < 10 ? "0" + hours.toString() : hours.toString();
    const m = mins < 10 ? "0" + mins.toString() : mins.toString();
    const s = secs < 10 ? "0" + secs.toString() : secs.toString();
    callbackFn({ h, m, s });
  }, 1000);
  return timer;
};

export const createTimer = (startTime: number, callbackFn: Function) => {
  const timer = setInterval(() => {
    const nowTime = new Date().getTime();
    const { h, m, s }: GetTimeDiff = getTimeDiff(startTime, nowTime);
    callbackFn({ h, m, s });
  });
  return timer;
};

export type InsertHTMLParam = {
  element: HTMLElement;
  position: "beforebegin" | "afterbegin" | "beforeend" | "afterend";
  html: string;
};
type insertHTML = (args: InsertHTMLParam) => void;
export const insertHTML: insertHTML = ({ element, position, html }) => {
  element.insertAdjacentHTML(position, html);
};

export type GetTimeDiff = {
  h: string;
  m: string;
  s: string;
};

export const getTimeDiff = (
  startTime: number,
  nowTime: number
): GetTimeDiff => {
  let [hour, min, sec] = [0, 0, 0];
  let timeDiffSec = Math.floor((nowTime - startTime) / 1000);
  if (timeDiffSec > 3600) {
    hour = Math.floor(timeDiffSec / 3600);
    timeDiffSec = timeDiffSec % 3600;
  }
  if (timeDiffSec > 60) {
    min = Math.floor(timeDiffSec / 60);
    timeDiffSec = timeDiffSec % 60;
  }
  sec = timeDiffSec;
  const h = hour < 10 ? "0" + hour.toString() : hour.toString();
  const m = min < 10 ? "0" + min.toString() : min.toString();
  const s = sec < 10 ? "0" + sec.toString() : sec.toString();
  return { h, m, s };
};

export const hasElement = (
  target: string,
  parentElement?: HTMLElement
): boolean => {
  if (parentElement) {
    if (parentElement.querySelector(target)) {
      return true;
    }
    return false;
  }

  if (document.querySelector(target)) {
    return true;
  }
  return false;
};

export const htmlEntityDecode = (text: string): string => {
  const unescaped: { [key: string]: string } = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
  };
  return text.replace(
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160);/g,
    (word) => unescaped[word]
  );
};

export const getQueryParam = (query: string): string => {
  const param = new URLSearchParams(window.location.search).get(query);
  if (!param) throw new Error(`Not Found Query ${query}`);
  return param;
};

export const SOLVEDAC_LEVEL: { [key: string]: string } = {
  0: "Unrated",
  1: "Bronze V",
  2: "Bronze IV",
  3: "Bronze III",
  4: "Bronze II",
  5: "Bronze I",
  6: "Silver V",
  7: "Silver IV",
  8: "Silver III",
  9: "Silver II",
  10: "Silver I",
  11: "Gold V",
  12: "Gold IV",
  13: "Gold III",
  14: "Gold II",
  15: "Gold I",
  16: "Platinum V",
  17: "Platinum IV",
  18: "Platinum III",
  19: "Platinum II",
  20: "Platinum I",
  21: "Diamond V",
  22: "Diamond IV",
  23: "Diamond III",
  24: "Diamond II",
  25: "Diamond I",
  26: "Ruby V",
  27: "Ruby IV",
  28: "Ruby III",
  29: "Ruby II",
  30: "Ruby I",
  31: "Master",
};

export const LANGUAGES: { [key: string]: string } = {
  아희: "aheui",
  엄준식: "umm",
  Ada: "ada",
  "Algol 68": "a",
  APECODE: "ape",
  Assembly: "o",
  "Assembly (32bit)": "o",
  "Assembly (64bit)": "o",
  awk: "awk",
  Bash: "sh",
  bc: "bc",
  Befunge: "bf",
  Boo: "boo",
  "Brainf**k": "bf",
  C: "c",
  "C#": "cs",
  "C# 3.0 (Mono)": "cs",
  "C# 6.0 (Mono)": "cs",
  "C# 9.0 (.NET)": "cs",
  "C++": "cc",
  "C++11": "cc",
  "C++11 (Clang)": "cc",
  "C++14": "cc",
  "C++14 (Clang)": "cc",
  "C++17": "cc",
  "C++17 (Clang)": "cc",
  "C++20": "cc",
  "C++20 (Clang)": "cc",
  "C++98": "cc",
  "C++98 (Clang)": "cc",
  C11: "c",
  "C11 (Clang)": "c",
  C2x: "c",
  "C2x (Clang)": "c",
  C90: "c",
  "C90 (Clang)": "c",
  C99: "c",
  "C99 (Clang)": "c",
  Cobol: "cob",
  Cobra: "cobra",
  Coq: "v",
  Crystal: "cr",
  D: "d",
  "D (LDC)": "d",
  "F#": "fs",
  "F# (.NET)": "fs",
  "F# (Mono)": "fs",
  Fortran: "f",
  FreeBASIC: "bas",
  Go: "go",
  "Go (gccgo)": "go",
  Golfscript: "gs",
  Haskell: "hs",
  Haxe: "py",
  INTERCAL: "i",
  Java: "java",
  "Java 11": "java",
  "Java 15": "java",
  "Java 8": "java",
  "Java 8 (OpenJDK)": "java",
  Kotlin: "kt",
  "Kotlin (JVM)": "kt",
  "Kotlin (Native)": "kt",
  LOLCODE: "lol",
  Lua: "lua",
  Minecraft: "mca",
  Nemerle: "n",
  Nimrod: "nim",
  "node.js": "js",
  "Objective-C": "m",
  "Objective-C++": "mm",
  OCaml: "ml",
  Pascal: "pas",
  Perl: "pl",
  PHP: "php",
  Pike: "pike",
  PyPy: "py",
  PyPy2: "py",
  PyPy3: "py",
  Python: "py",
  "Python 2": "py",
  "Python 3": "py",
  Rhino: "js",
  Ruby: "rb",
  "Ruby 1.8": "rb",
  "Ruby 1.9": "rb",
  "Ruby 2": "rb",
  Rust: "rs",
  "Rust 2015": "rs",
  "Rust 2018": "rs",
  "Rust 2019": "rs",
  "Rust 2021": "rs",
  Scala: "scala",
  Scheme: "scm",
  sed: "sed",
  Swift: "swift",
  SystemVerilog: "sv",
  Tcl: "tcl",
  Text: "txt",
  TypeScript: "ts",
  "VB.NET 2.0 (Mono)": "vb",
  "VB.NET 4.0 (Mono)": "vb",
  "Visual Basic": "vb",
  "Visual Basic (.NET)": "vb",
  Whitespace: "ws",
};

export type paramReadmeText = {
  level?: string;
  title: string;
  problemId: string;
  spentMemory: string;
  spentTime: string;
  category: string;
  description: string;
  solvingTime: string;
};

export const getReadmeText = ({
  level,
  title,
  solvingTime,
  problemId,
  spentMemory,
  spentTime,
  category,
  description,
}: paramReadmeText): string =>
  level
    ? `# [${level}] ${title} - ${problemId} \n\n`
    : `# ${title} - ${problemId} \n\n` +
      `[문제 링크](https://www.acmicpc.net/problem/${problemId}) \n\n` +
      `### 성능 요약\n\n` +
      `평균 소요 메모리: ${spentMemory} KB, ` +
      `평균 소요 시간: ${spentTime} ms\n\n` +
      `풀이시간: ${solvingTime}\n\n` +
      `### 분류\n\n` +
      `${category}\n\n` +
      `### 문제 설명\n\n${description}\n\n`;

export function addComponents(this: any) {
  const node = this.node;

  const newNode = Array.from(
    new DOMParser().parseFromString(this.template(), "text/html").body.children
  );
  node.parentNode.insertBefore(newNode[0], node.nextSibling);
  this.node = node.nextSibling;
  node.remove();
}
