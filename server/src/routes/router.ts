import { Router, Request, Response } from "express";

const route = Router();

import mongoose from "mongoose";
import { User } from "../models/User";

route.get("/", (req: Request, res: Response) => {
  res.send("Hello, Server!");
});

route.post("/register-user", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "Usuário já cadastrado" });
      return
    }

    const newUser = new User({
      name,
      email,
    });

    await newUser.save();

    res.status(201).json({ message: "Deu certo" });
  } catch {
    res.status(400).send("erro");
  }
});

export { route };
