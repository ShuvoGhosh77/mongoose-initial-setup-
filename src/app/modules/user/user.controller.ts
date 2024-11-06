import { NextFunction, Request, Response } from "express";
import { createUserToDB } from "./user.service";


export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const data = req.body;
  
    const user = await createUserToDB(data);
  
    res.status(200).json({
      status: "success",
      data: user,
    });
  };