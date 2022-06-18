"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("./routes/index");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.send("Hello World!");
        });
        this.app.use("/competicao", index_1.CompeticaoRoutes);
    }
}
exports.default = new App().app;
