/**
 * 
handler.js
\src-JS\handler.js
 */

console.log("JavaScript: /src-JS/handler.js: Hi!")

let page = (window.location.pathname).split("/").pop() || "index.html"
console.log(`HTML Page: ${page}`)