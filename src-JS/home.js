/**
 * 
home.js
\src-JS\home.js
 */

console.log("\src-JS\home.js: Hi!")

let homePagePart = {
    "mainHomeID": "/src-HTML/mainHome.html",
    "subTitleC0ID": "/src-HTML/subTitle2H.html",
}

for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}

// htmlHandler("mainHomeID", homePagePart["mainHomeID"])
// console.log("mainHomeID", homePagePart["mainHomeID"])

