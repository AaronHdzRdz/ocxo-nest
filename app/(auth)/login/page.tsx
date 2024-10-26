"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "constants/constants";

export default function LoginPage() {
  const [submitting, setSumitting] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    setSumitting(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // Usar e.currentTarget en lugar de e.target
    let authData: any = {};
    authData.userEmail = formData.get('userEmail');
    authData.userPassword = formData.get('userPassword');
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(authData),
        credentials: 'include',
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
            color="primary"
            type="submit"
            disabled={submitting}>
            {submitting ? "Enviando..." : "Iniciar Sesión"}
          </Button>
        </div>
        <p className="text-center">
          ¿No tienes una cuenta? <Link href="/signup" className="text-[#E70020] hover:text-gray-400">Regístrate</Link>
        </p>
      </form>
    </div>

  );
}