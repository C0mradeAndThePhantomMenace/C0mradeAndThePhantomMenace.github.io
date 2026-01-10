/**
 * 
script.js
\src-JS\script.js
 */

console.log("JavaScript: /src-JS/script.js: Hi!")

for (const key in pagePartHeader) {
    console.log(key, pagePartHeader[key])
    htmlHandler(key, pagePartHeader[key])
}

for (const key in pagePartMain) {
    console.log("***", key, pagePartMain[key])
    htmlHandler(key, pagePartMain[key])
}
