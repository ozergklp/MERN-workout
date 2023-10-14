"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Yaşar' });
});
app.listen(4000, () => {
    console.log('listening port 4000 day 2');
});
//# sourceMappingURL=index.js.map