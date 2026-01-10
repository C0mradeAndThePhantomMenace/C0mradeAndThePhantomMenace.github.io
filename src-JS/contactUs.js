/**
 * 
contactUs.js
\src-JS\contactUs.js
 */

console.log("\src-JS\contactUs.js: Hi!")

let homePagePart = {
    "mainContactUsID": "/src-HTML/mainContactUs.html",
    "subTitleC0ID": "/src-HTML/subTitle2C.html",
}


for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}
