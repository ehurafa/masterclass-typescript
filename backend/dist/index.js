"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// type inference
function getUsername() {
    return 'rafa';
}
const name = getUsername(); // return string
app.use(routes_1.default);
app.get('/', (req, res) => {
    return res.send('Hello World');
});
app.listen(3333);
