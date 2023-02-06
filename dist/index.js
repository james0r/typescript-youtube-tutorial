"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shapes_1 = require("./shapes");
const storage_1 = __importDefault(require("./storage"));
let circle = new shapes_1.Circle(1);
let store = new storage_1.default();
console.log(store);
console.log(circle);
//# sourceMappingURL=index.js.map