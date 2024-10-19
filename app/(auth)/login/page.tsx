"use client";
import { Button, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [submitting, setSumitting] = useState(false)
  const router = useRouter()
  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSumitting(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // Usar e.currentTarget en lugar de e.target
    let authData: any = {};
    authData.userEmail = formData.get('userEmail');
    authData.userPassword = formData.get('userPassword');
    try {
      // Enviar solicitud POST a la API de autenticación
      const response = await axios.post("http://127.0.0.1:4000/auth/login", {
        ...authData
      }, {
        withCredentials: true
      });
      if (response.status === 201) {
        router.push("/dashboard");
      }
      setSumitting(false);
    } catch (e) {
      setSumitting(false);
    }
    return;
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        <p className="text-2xl my-4 text-center text-black font-bold mx-4">
          Inicio de Sesión<span></span>
        </p>
        <div className="flex flex-col gap-2 my-2">
          <Input label="Correo Electrónico" name="userEmail" type="email" isRequired={true} size="sm" />
          <Input label="Contraseña" type="password" name="userPassword" isRequired={true} size="sm" />
        </div>
        <div className="flex flex-col">
          <Button
            type="submit"
            className="w-full bg-[#FBB110] hover:bg-[#E6A100] text-black"
            disabled={submitting}>{submitting ? <Spinner size="md" /> : "Iniciar Sesion"}</Button>
        </div>
        <p className="text-center">
          ¿No tienes una cuenta? <Link href="/signup" className="text-[#E70020] hover:text-gray-400">Regístrate</Link>
        </p>
      </form>
    </div>

  );
}