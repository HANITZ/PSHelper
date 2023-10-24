



export default class Baekjun {

  static getProblemId = (url: string) => {
    if (url.includes("problem")) {
      return url.split("https://www.acmicpc.net/problem/")[1];
    }
    return url.split("https://www.acmicpc.net/submit/")[1];
  };

  static checkProblemId = (id: string): boolean => {
    const splitedLink = window.location.href.split(/=|&|\//);
    if (splitedLink.includes(id)) {
      return true;
    }
    return false;
  };

}