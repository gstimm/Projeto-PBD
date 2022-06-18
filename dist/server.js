"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { CompeticaoRoutes } from "./routes/index";
class App {
    constructor() {
        this.server = (0, express_1.default)();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express_1.default.json());
    }
    routes() {
        this.server.get("/", (req, res) => {
            res.send("Hello World!");
        });
        // this.server.use("/api/competicao", CompeticaoRoutes);
    }
    listen() {
        this.server.listen(3333, () => {
            console.log("Server started on port 3333");
        });
    }
    getServer() {
        return this.server;
    }
    static bootstrap() {
        return new App().server;
    }
}
exports.default = new App().server;
