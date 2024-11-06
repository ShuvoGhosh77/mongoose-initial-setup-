import { IUser } from "./user.interface";
import User from "./user.model";


export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    // creating a new user
    const user = new User(payload); 
    await user.save();
    return user;
  };
  