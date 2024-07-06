"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autheticator = void 0;
let username = "Habib";
let password = 12345;
function autheticator() {
    if (username === "Habib" && password === 12345) {
        console.log("Authentication successful, You can now use the application");
    }
}
exports.autheticator = autheticator;
