export const createChromeTabs = ({ ...props }) => {
  chrome.tabs.create({
    ...props,
  });
};

export const setChromeStorage = ({ ...props }, fn = () => {}) => {
  chrome.storage.local.set({ ...props }, fn);
};
type Fn = (data: object) => {};
export const getChromeStorage = (
  key: string,
  fn?: Fn
): void | Promise<object> => {
  if (fn) {
    chrome.storage.local.get([key], fn);
    return;
  }
  return chrome.storage.local.get([key]);
};

export const sendChromeMessage = ({ ...props }) => {
  chrome.runtime.sendMessage({ ...props });
};

export const getChromeMessage = (fn: any) => {
  chrome.runtime.onMessage.addListener(fn);
};
