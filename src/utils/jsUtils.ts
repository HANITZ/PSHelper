type $ = (targetName: string, parentEl?: HTMLElement) => HTMLElement;
export const $: $ = (targetName, parentEl) => {
  const element = parentEl
    ? parentEl.querySelector(targetName)
    : document.querySelector(targetName);
  if (!element) throw new Error(`${targetName} element를 찾을 수 없습니다`);
  return element as HTMLElement;
};

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

type enrollEvent = (
  el: HTMLElement,
  type: string,
  fn: EventListenerOrEventListenerObject
) => void;
export const enrollEvent: enrollEvent = (el, type, fn) => {
  el.addEventListener(type, fn);
};

export const isObjEmpty = (obj: Object) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

type removeEvent = (
  el: HTMLElement,
  type: string,
  fn: EventListenerOrEventListenerObject
) => void;
export const removeEvent: removeEvent = (el, type, fn) => {
  el.removeEventListener(type, fn);
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
