import type { NextApiRequest, NextApiResponse } from "next";

import { UserModel } from "../../models/UserModel";

const store = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { name, email = "", password } = req.body;

      if (!name || name.trim().length < 2) {
        return res.status(400).json({ error: "Nome não é válido" });
      }

      if (!email.includes("@") && !email.includes(".")) {
        return res
          .status(400)
          .json({ error: "Formato de e-mail não é válido" });
      }

      if (!email || email.trim().length < 5) {
        return res
          .status(400)
          .json({ error: "A senha deve ter pelo menos 5 caracteres." });
      }
    }
  } catch (error) {
    console.error("Error on create user", error);
    return res.status(500).json({
      error: "Não foi possível cadastrar o usuário, entre em contato.",
    });
  }
};

export default store;
