


window.onload = function() {
    document.querySelector('button')?.addEventListener('click', ()=> {
        chrome.identity.getAuthToken({interactive: true}, (token)=> {
            console.log(token)
        })
    })
}