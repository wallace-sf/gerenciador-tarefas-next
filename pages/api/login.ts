import { DefaultMsgResponse } from "./../../types/DefaultMsgResponse";
import type { NextApiRequest, NextApiResponse } from "next";

const store = (
  req: NextApiRequest,
  res: NextApiResponse<DefaultMsgResponse>
) => {
  if (req.method === "POST") {
    const { login, password } = req.body;
    if (login === "rafael@verzel.com.br" && password === "Senha@123") {
      return res.status(200).json({ msg: "Login autenticado!" });
    }

    return res.status(400).json({ error: "Credenciais inválidas!" });
  }
  return res.status(405).json({ error: "Metodo informado nao é permitido!" });
};

export default store;
