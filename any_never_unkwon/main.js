"use strict";
// IN ANY ANYTING ISPOSSIBLE
Object.defineProperty(exports, "__esModule", { value: true });
function login(user) {
    switch (user) {
        case "standard":
            return true;
            break;
        case "admin":
            return true;
            break;
        default:
            const unreachAble = user;
            console.error("wrong user");
    }
}
