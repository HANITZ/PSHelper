export const createChromeTabs = ({ ...props }) => {
  chrome.tabs.create({
    ...props,
  });
};

export const setChromeSyncStorage = ({ ...props }, fn = () => {}) => {
  chrome.storage.sync.set({ ...props }, fn);
};

export const getChromeSyncStorage = (
  key: string,
  fn?: Fn
): void | Promise<object> => {
  if (fn) {
    chrome.storage.sync.get([key], fn);
    return;
  }
  return chrome.storage.sync.get([key]);
};

export const setChromeLocalStorage = ({ ...props }, fn = () => {}) => {
  chrome.storage.local.set({ ...props }, fn);
};

type Fn = (data: object) => {};
type getChromeLocalStorage =
  | ((key: string ) => Promise<object>)
  | ((key: string, fn?: Fn) => void);

export const getChromeLocalStorage: getChromeLocalStorage = (key, fn) => {
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


