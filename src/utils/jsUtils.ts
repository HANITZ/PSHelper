type $ = (targetName: string, parentEl?: HTMLElement | Document) => HTMLElement;
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
  el: HTMLElement | Window,
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

export const createTimer = (callbackFn: Function) => {
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
    callbackFn(h, m, s);
  }, 1000);
  return timer;
};

export const getTimeDiff = (startTime: number, callbackFn: Function) => {
  const timer = setInterval(() => {
    let [hour, min, sec] = [0, 0, 0];
    let timeDiffSec = Math.floor((new Date().getTime() - startTime) / 1000);
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
    callbackFn(h, m, s);
  });
  return timer;
};

export const getTimeNow = () => {
  return new Date().getTime();
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
