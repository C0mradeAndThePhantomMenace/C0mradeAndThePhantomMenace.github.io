/**
 * 
script.js
\src-JS\script.js
 */

console.log("JavaScript: /src-JS/script.js: Hi!")

// let page = (window.location.pathname).split("/").pop() || "index.html"
// console.log(`HTML Page: ${page}`)

let headerParts = {
    "titleID": "/src-HTML/title.html",
    "navID": "/src-HTML/nav.html",
}

let pagePartMain = {
    "index.html": ["mainHomeID", "/src-HTML/mainHome.html"],
    "about.html": ["mainAboutID", "/src-HTML/mainAbout.html"],
    "contactUs.html": ["mainContactUsID", "/src-HTML/mainContactUs.html"]
}


for (const key in headerParts) {
    console.log(key, headerParts[key])
    htmlHandler(key, headerParts[key])
}

// htmlHandler(pagePartMain[page][0], pagePartMain[page][1])