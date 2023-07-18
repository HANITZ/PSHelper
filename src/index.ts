const url = new URL(window.location.href);
const githubCode = url.searchParams.get("code");
console.log(githubCode);

