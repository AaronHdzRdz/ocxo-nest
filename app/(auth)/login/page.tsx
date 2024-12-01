"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "constants/constants";

export default function LoginPage() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (e: any) => {
    setSubmitting(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let authData: any = {};
    authData.userEmail = formData.get('userEmail');
    authData.userPassword = formData.get('userPassword');
    
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(authData),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 201) {
        router.push("/dashboard");
      } else {
        console.error("Error en la autenticación:", response.statusText);
      }
      
      setSubmitting(false);
    } catch (e) {
      console.error("Error en la solicitud:", e);
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8">
      <form onSubmit={handleSubmit}>
        <p className="text-2xl font-semibold text-gray-900">
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
        <div className="text-center text-sm">
            <span className="text-gray-600">¿No tienes una cuenta? </span>
            <Link 
              href="/signup" 
              className="text-[#007BFF] hover:text-[#0056b3] font-medium"
            >
              Regístrate
            </Link>
          </div>
      </form>
    </div>
  );
}