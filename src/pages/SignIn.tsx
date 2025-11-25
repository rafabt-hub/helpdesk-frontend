import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

interface SignInProps {
  userType?: "admin" | "tech" | "client";
}

export function SignIn({ userType = "admin" }: SignInProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setIsloading(true);

    console.log("Login:", { email, password, userType });

    setTimeout(() => {
      setIsloading(false);

      if (userType === "admin") {
        navigate("/");
      } else if (userType === "tech") {
        navigate("/tech");
      } else {
        navigate("/client");
      }
    }, 600);
  }

  const titleMap = {
    admin: "Acesse o portal administrativo",
    tech: "Acesse o portal do técnico",
    client: "Acesse o portal do cliente",
  };

  return (
    <div className="lg:w-100 w-85 h-75 flex gap-5 border rounded-2xl border-gray-500">
      <form onSubmit={onSubmit} className="w-full flex flex-col items-center p-4 gap-5">
        <div className="w-full">
          <h1 className="text-xl text-gray-700 mb-2">{titleMap[userType]}</h1>
          <p className="text-xs text-gray-700">
            Entre usando seu e-mail e senha cadastrados
          </p>
        </div>

        <Input
          required
          legend="E-MAIL"
          type="email"
          placeholder="exemplo@email.com"
          onChange={(e) => setEmail(e.target.value)}/>

        <Input
          required
          legend="SENHA"
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}/>

        <Button type="submit" isLoading={isLoading}>Entrar</Button>

        <div className="lg:w-100 w-85 flex flex-col p-4 mt-4 border rounded-2xl border-gray-500">
          <h1 className="w-full m-0 text-sm text-gray-600 mb-2">
            Ainda não tem uma conta?
          </h1>
          <p className="w-full m-0 text-sm text-gray-400">Cadastre agora mesmo</p>

          <Button variant="white" href="/signup">Criar conta</Button>
        </div>
      </form>
    </div>
  );
}
