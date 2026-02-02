// export nested object and function from a module.

const utilis = require("./utilis");

console.log("App Name : ", utilis.config.name);
console.log("Current Theme : ", utilis.config.settings.theme);

const hello = utilis.greet("Yash");
console.log(hello);
