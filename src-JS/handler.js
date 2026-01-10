/**
 * 
handler.js
\src-JS\handler.js
 */

console.log("JavaScript: /src-JS/handler.js: Hi!")

let page = (window.location.pathname).split("/").pop() || "home.html"
if (page == "index.html") page = "home.html"
page = page.charAt(0).toUpperCase() + page.slice(1);
// let page = (window.location.pathname).split("/").pop() || "index.html"
console.log(`HTML Page: ${page}`)



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