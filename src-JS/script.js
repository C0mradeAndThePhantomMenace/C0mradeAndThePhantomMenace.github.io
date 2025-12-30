/**
 * 
script.js
\src-JS\script.js
 */

console.log("JavaScript: /src-JS/script.js: Hi!")

let page = (window.location.pathname).split("/").pop() || "index.html"
console.log(`HTML Page: ${page}`)

let pagePart = {
    "headerID": "/src-HTML/header.html",
    "navID": "/src-HTML/nav.html",
}

let pagePartMain = {
    "index.html": ["mainHomeID", "/src-HTML/mainHome.html"],
    "about.html": ["mainAboutID", "/src-HTML/mainAbout.html"],
    "contactUs.html": ["mainContactUsID", "/src-HTML/mainContactUs.html"]
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

for (const key in pagePart) {
    console.log(key, pagePart[key])
    htmlHandler(key, pagePart[key])
}

// htmlHandler(pagePartMain[page][0], pagePartMain[page][1])