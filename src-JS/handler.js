/**
 * 
handler.js
\src-JS\handler.js
 */

console.log("JavaScript: /src-JS/handler.js: Hi!")

let page = (window.location.pathname).split("/").pop() || "home.html"
if (page == "index.html") page = "home.html"
if (page !== "home.html" && page !== "about.html" && page !== "contactUs.html" && page !== "test.html") page = "404.html"
page = page.charAt(0).toUpperCase() + page.slice(1);
// let page = (window.location.pathname).split("/").pop() || "index.html"
console.log(`HTML Page: ${page}`)

let homePagePart = {
    "mainID": "/src-HTML/main2" + page,
    "subTitleID": "/src-HTML/subTitle2" + page,
}

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
