




export const getProblemInfoBySolvedAcAPI = async (problemId: string) => {
    const host = `https://solved.ac/api/v3/problem/show?problemId=${problemId}`;
    return await (
      await fetch(host, {
        method: "get",
        headers: {
          Accept: "application/json",
        },
      })
    ).json();
  };