type $ = (targetName: string, parentEl?: HTMLElement) => HTMLElement | null;
export const $: $ = (targetName, parentEl) => {
  if (parentEl) return parentEl.querySelector(targetName);
  return document.querySelector(targetName);
};

type $$ = (
  targetName: string,
  parentEl?: HTMLElement
) => NodeListOf<Element> | null;
export const $$: $$ = (targetName, parentEl) => {
  if (parentEl) return parentEl.querySelectorAll(targetName);
  return document.querySelectorAll(targetName);
};

type getElById = (targetId: string) => HTMLElement | null;
export const getElById: getElById = (targetId) => {
  return document.getElementById(targetId);
};
type enrollEvent = (el: HTMLElement, type: string, fn: EventListenerOrEventListenerObject) => void;
export const enrollEvent:enrollEvent = (el, type, fn) => {
  el.addEventListener(type, fn);
};
