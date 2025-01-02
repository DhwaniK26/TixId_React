import { Request, Response, NextFunction } from 'express';
const jwt  =  require('jsonwebtoken')

const SECRET_KEY = "HELLOWORLD";

const jwtverifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Get authorization header
    const authorization = req.headers.authorization;
    
    if (!authorization) {
        return res.status(401).json({
            message: "Token not found, please Login"
        });
    }
    
    try {
        // Split 'Bearer token'
        const token = authorization.split(" ")[1];
        
        if (!token) {
            return res.status(401).json({
                message: "Unauthorized access"
            });
        }

        // Verify token
        const decodedToken = jwt.verify(token, SECRET_KEY);
        
        // Add decoded payload to request object
        (req as any).userpayload = decodedToken;
        next();

    } catch (error) {
        console.log("error is:", error);
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};

const generateToken = (payload: any) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '8h' });
};

export { jwtverifyToken, generateToken };