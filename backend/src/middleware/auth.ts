import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "process.env.JWT_SECRET";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });
        req.user = decoded as any; 
        next();
    });
};

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (req.user?.role !== "admin") return res.status(403).json({ message: "Forbidden" });
    next();
};
