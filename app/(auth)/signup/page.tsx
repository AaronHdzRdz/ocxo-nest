import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="p-8">
      <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900">Registro</h1>
      </div>
      <div className="flex flex-col gap-2 my-2">
        <Input label="Correo Electrónico" type="email" isRequired={true} size="sm" />
        <Input label="Contraseña" type="password" isRequired={true} size="sm" />
        <Input label="Repite la contraseña" type="password" isRequired={true} size="sm" />

      </div>
      <div className="flex flex-col">
        <Button className="w-full bg-[#FBB110] hover:bg-[#E6A100] text-black">Iniciar seción</Button>
      </div>
      <div className="text-center text-sm">
            <span className="text-gray-600">¿Ya tienes una cuenta? </span>
            <Link 
              href="/login" 
              className="text-[#E31837] hover:text-[#B31329] font-medium"
            >
              Inicia sesión
            </Link>
      </div>
    </div>
  );
}