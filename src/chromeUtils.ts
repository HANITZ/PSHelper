export const createChromeTabs = ({ ...props }) => {
  chrome.tabs.create({
    ...props,
  });
};

export const setChromeStorage = ({ ...props }, fn = () => {}) => {
  chrome.storage.local.set({ ...props }, fn);
};

export const getChromeStorage = (key: string, fn = (data: any) => {}) => {
  chrome.storage.local.get([key], fn);
};

export const sendChromeMessage = ({ ...props }) => {
  chrome.runtime.sendMessage({ ...props });
};

export const getChromeMessage = (fn: any) => {
  chrome.runtime.onMessage.addListener(fn);
};
