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
type getChromeLocalStorage = (key: string) => object

export const getChromeLocalStorage: getChromeLocalStorage = (key) => {

  return chrome.storage.local.get([key]);
};
type deleteChromeLocalStorage = (key: string|string[]) => void
export const deleteChromeLocalStorage: deleteChromeLocalStorage = (key) => {
  chrome.storage.local.remove(key)
}

export const sendChromeMessage = ({ ...props }) => {
  chrome.runtime.sendMessage({ ...props });
};

export const getChromeMessage = (fn: any) => {
  chrome.runtime.onMessage.addListener(fn);
};

export const closeCurrentTab = (parent: any) => {
  let that = parent;
  chrome.tabs = parent;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length > 0) {
      let tabId = tabs[0].id;
      if (!tabId) return;
      chrome.tabs.remove(tabId, () => {
        console.log("페이지 닫힘");
      });
    }
  });
};
