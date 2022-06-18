"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const index_1 = require("./routes/index");
class App {
    constructor() {
        this.prisma = new client_1.PrismaClient();
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
        this.app.get("/api/todos", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield this.prisma.todo.findMany();
                return res.json({
                    success: true,
                    data: allUsers,
                });
            }
            catch (error) {
                return res.json({
                    success: false,
                    message: error,
                });
            }
        }));
    }
}
exports.default = new App().app;
