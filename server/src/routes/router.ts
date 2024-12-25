import { Router, Request, Response } from "express";

const route = Router();

import { User } from "../models/User";

route.get("/", (req: Request, res: Response) => {
  res.send("Hello, Server!");
});

route.post("/register-user", async (req: Request, res: Response) => {
  const { name, email } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(400).json({ message: "Usuário já cadastrado",  type:"error" });
      return
    }

    const newUser = new User({
      name,
      email,
    });

    await newUser.save();

    res.status(201).json({ message: "Usuário cadastrado", type:"success" });
  } catch {
    res.status(400).json({message: "Erro ao cadastrar usuário", type: "error"});
  }
});

route.get("/list-users", async (req:Request, res:Response) => {
  try{
    const users = await User.find()

    res.status(201).json(users)
  } catch{
    res.status(400).json({message: "Erro em bustar usuários!", type: "error"})
  }
})

export { route };
