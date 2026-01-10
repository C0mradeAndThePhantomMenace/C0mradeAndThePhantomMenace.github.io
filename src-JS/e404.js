/**
 * 
404.js
\src-JS\e404.js
 */

console.log("\src-JS\e404.js: Hi!")

let homePagePart = {
    "mainID": "/src-HTML/main2" + page,
    "subTitleID": "/src-HTML/subTitle2" + page,
}


for (const key in homePagePart) {
    console.log(key, homePagePart[key])
    htmlHandler(key, homePagePart[key])
}
