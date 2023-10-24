import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("New user is created successfully!");
  } catch (error) {
    next(error);
  }
};

/* next(
  errorHandler(
    500,
    `mern-estate-app.users index: username_1 dup key:${newUser.username}`
  )
); */
