/**
 * 
about.js
\src-JS\contactUs.js
 */

console.log("\src-JS\contactUs.js: Hi!")

let homePagePart = {
    "mainContactUsID": "/src-HTML/mainContactUs.html",
    "headerID2": "/src-HTML/header2C.html",
}


for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}
