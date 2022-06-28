import type { NextApiRequest, NextApiResponse } from "next";

import { UserModel } from "../../models/UserModel";
import { connect } from "../../middlewares/connectToMongoDB";

const registerEndpoint = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const { name, email = "", password } = req.body;

      if (!name || name.trim().length < 2) {
        return res.status(400).json({ error: "Nome não é válido" });
      }

      if (!email || email.trim().length < 5) {
        return res
          .status(400)
          .json({ error: "A senha deve ter pelo menos 5 caracteres." });
      }

      if (!email.includes("@") || !email.includes(".")) {
        return res
          .status(400)
          .json({ error: "Formato de e-mail não é válido" });
      }

      await UserModel.create({ name, email, password });

      return res.status(200).json({ msg: "Usuário cadastrado com sucesso!" });
    }
  } catch (error) {
    console.error("Error on create user", error);
    return res.status(500).json({
      error: "Não foi possível cadastrar o usuário, entre em contato.",
    });
  }
};

export default connect(registerEndpoint);
