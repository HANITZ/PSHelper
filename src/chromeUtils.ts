export const createChromeTabs = ({ ...props }) => {
  chrome.tabs.create({
    ...props,
  });
};

export const 