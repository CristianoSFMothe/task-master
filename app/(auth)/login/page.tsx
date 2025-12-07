import { ArrowRight, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import banner from "@/app/assets/banner.svg";
import icon from "@/app/assets/task-manage-icon.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <main className="flex min-h-screen w-full">
      <section
        className={cn(
          "flex w-1/2 flex-col items-start justify-between",
          "overflow-hidden bg-indigo-700 px-[100px] py-12 text-white",
        )}
      >
        <div className="flex items-center gap-3">
          <Image
            src={icon}
            width={48}
            height={48}
            alt="Task Manage Icon"
            priority
            quality={100}
          />

          <h1 className="font-roboto text-5xl font-bold">TaskMaster</h1>
        </div>

        <div className="flex h-full w-full flex-col justify-center">
          <div className="mt-8 flex flex-col gap-6">
            <h2 className="font-roboto text-4xl font-bold leading-tight">
              Gerencia suas tarefas com <br />{" "}
              <span className="text-indigo-300">foco e clareza</span>
            </h2>

            <p className="font-inter max-w-md text-lg text-indigo-200">
              Aumente sua produtividade organizando seus projetos em um só
              lugar. Simples, rápido e eficiente.
            </p>
          </div>

          <div className="mt-8 flex w-full justify-center">
            <Image
              src={banner}
              width={550}
              height={550}
              alt="Ilustração de gerenciamento de tarefas"
              priority
              quality={100}
              className="h-auto max-h-[50vh] w-full max-w-[550px] object-contain"
            />
          </div>
        </div>

        <div className="pt-6 text-sm text-indigo-300">
          © 2025 TaskMaster Inc. Todos os direitos reservados.
        </div>
      </section>

      <section
        className={cn(
          "flex w-1/2 flex-col justify-between",
          "overflow-hidden bg-white px-[100px] py-12 text-black",
        )}
      >
        <div className="mb-8 text-center">
          <h1
            className={cn(
              "font-roboto whitespace-nowrap text-5xl",
              "font-bold tracking-tighter text-slate-900",
            )}
          >
            Bem-vindo de volta
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Insira suas credenciais para acessar sua conta.
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="email"
              className="text-base font-medium text-slate-500"
            >
              E-mail
            </Label>
            <div className="relative">
              <Mail className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <Input
                id="email"
                type="email"
                placeholder="meu@email.com"
                className={cn(
                  "h-12 border-slate-200 pl-12 text-base",
                  "placeholder:text-slate-400 focus-visible:ring-indigo-600",
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-base font-medium text-slate-500"
              >
                Senha
              </Label>
              <Link
                href="#"
                className="text-sm font-semibold text-indigo-700 hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <Input
                id="password"
                type="password"
                placeholder="minha senha secreta"
                className={cn(
                  "h-12 border-slate-200 bg-slate-50 pl-12 text-base",
                  "placeholder:text-slate-400 focus-visible:ring-indigo-600",
                )}
              />
            </div>
          </div>

          <Button
            className={cn(
              "font-roboto mt-2 h-12 w-full bg-indigo-700",
              "text-lg font-bold transition-colors hover:bg-indigo-800",
            )}
          >
            Entrar na plataforma <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        <div className="my-8 flex items-center gap-4 text-xs font-medium uppercase text-slate-400">
          <div className="h-[1px] w-full bg-slate-200"></div>
          <span className="whitespace-nowrap">Ou continue com</span>
          <div className="h-[1px] w-full bg-slate-200"></div>
        </div>

        <div className="flex gap-4">
          {/* Botão de Login com Google */}
          <Button
            variant="outline"
            className="h-12 w-full gap-2 border-slate-200 bg-white text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            {/* Ícone SVG do Google */}
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>

          {/* Botão de Login com GitHub */}
          <Button
            variant="outline"
            className="h-12 w-full gap-2 border-slate-200 bg-white text-base font-medium text-slate-700 hover:bg-slate-50"
          >
            {/* Ícone SVG do GitHub */}
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </Button>
        </div>

        <div className="mt-8 text-center text-sm text-slate-600">
          Não tem uma conta?{" "}
          <Link
            href="/register"
            className="font-bold text-indigo-700 hover:underline"
          >
            Comece gratuitamente
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
