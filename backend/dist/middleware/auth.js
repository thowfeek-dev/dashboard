"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "process.env.JWT_SECRET";
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "No token provided" });
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decoded) => {
        if (err)
            return res.status(401).json({ message: "Unauthorized" });
        req.user = decoded;
        next();
    });
};
exports.authMiddleware = authMiddleware;
const adminMiddleware = (req, res, next) => {
    var _a;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== "admin")
        return res.status(403).json({ message: "Forbidden" });
    next();
};
exports.adminMiddleware = adminMiddleware;
