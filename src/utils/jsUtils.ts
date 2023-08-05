type $ = (targetName: string, parentEl?: HTMLElement) => HTMLElement | null;
export const $: $ = (targetName, parentEl) => {
  if (parentEl) return parentEl.querySelector(targetName);
  return document.querySelector(targetName);
};

type $$ = (
  targetName: string,
  parentEl?: HTMLElement
) => NodeListOf<HTMLElement> | null;
export const $$: $$ = (targetName, parentEl) => {
  if (parentEl) return parentEl.querySelectorAll(targetName);
  return document.querySelectorAll(targetName);
};

type getElById = (targetId: string) => HTMLElement | null;
export const getElById: getElById = (targetId) => {
  return document.getElementById(targetId);
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
