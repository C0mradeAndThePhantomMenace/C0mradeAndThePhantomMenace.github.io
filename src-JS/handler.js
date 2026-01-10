/**
 * 
handler.js
\src-JS\handler.js
 */

console.log("JavaScript: /src-JS/handler.js: Hi!")

const htmlInject = (htmlID, htmlCode) => document.getElementById(htmlID).innerHTML = htmlCode;

const htmlLoader = (htmlFileSrc) => fetch(htmlFileSrc)
    .then(response => {
        if (response.ok) return response.text(); // Get the response as plain text
        else throw new Error('Network response was not ok ' + response.statusText);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

const htmlHandler = (htmlID, htmlFileSrc) => htmlLoader(htmlFileSrc)
    .then(htmlCode => htmlInject(htmlID, htmlCode))
    .catch(error => console.error('There was a problem:', error))

const currentPageHandler = () => {
    let currentPage = (window.location.pathname).split("/").pop() || "home.html"
    // let page = (window.location.pathname).split("/").pop() || "index.html"
    if (currentPage == "index.html") currentPage = "home.html"
    if (currentPage !== "home.html" && currentPage !== "about.html" && currentPage !== "contactUs.html" && currentPage !== "test.html") currentPage = "404.html"
    currentPage = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
    console.log(`HTML currentPage: ${currentPage}`)
    return currentPage
}

const pagePartHeaderHandler = () => {
    for (const key in pagePartHeader) {
        console.log(key, pagePartHeader[key])
        htmlHandler(key, pagePartHeader[key])
    }
}

const pagePartMainHandler = () => {
    for (const key in pagePartMain) {
        console.log("***", key, pagePartMain[key])
        htmlHandler(key, pagePartMain[key])
    }
}
