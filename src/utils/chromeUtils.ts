

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

export const setChromeLocalStorage = ({ ...props }):Promise<any> => {
  return chrome.storage.local.set({ ...props });
};

type Fn = (data: object) => {};
type getChromeLocalStorage = (key: string) => Promise<object>;

export const getChromeLocalStorage: getChromeLocalStorage = (key) => {
  return chrome.storage.local.get([key]);
};
type deleteChromeLocalStorage = (key: string | string[]) => void;
export const deleteChromeLocalStorage: deleteChromeLocalStorage = (key) => {
  chrome.storage.local.remove(key);
};

export const sendChromeMessage = async (
  { ...props },
  callbackFn?: (response: any) => void
): Promise<any> => {
  if (callbackFn) {
    return chrome.runtime.sendMessage({ ...props }, callbackFn);
  }
  return chrome.runtime.sendMessage({ ...props });
};

export const getChromeMessage = (fn: any) => {
  chrome.runtime.onMessage.addListener(fn);
};


