"use client";

import { ArrowRight, Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Assets
import banner from "@/app/assets/banner.svg";
import icon from "@/app/assets/task-manage-icon.svg";
import SocialButtons from "@/components/social-buttons";
// Componentes Shadcn UI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <main className="font-roboto flex min-h-screen w-full bg-white">
      {/* =================================================================================
          LADO ESQUERDO (FORMULÁRIO / BRANCO)
          Ocupa 100% no mobile e 50% no desktop
          ================================================================================= */}
      <section
        className={cn(
          "flex w-full flex-col justify-center bg-white py-12 text-slate-900",
          "px-6 sm:px-12 lg:w-1/2 lg:px-16 xl:px-[100px]",
        )}
      >
        {/* --- CABEÇALHO MOBILE (LOGO) --- */}
        {/* Só aparece em telas menores que LG (lg:hidden) */}
        <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700 shadow-md">
            <Image
              src={icon}
              width={28}
              height={28}
              alt="TaskMaster Icon"
              quality={100}
            />
          </div>
          <h1 className="font-roboto text-3xl font-bold text-slate-900">
            TaskMaster
          </h1>
        </div>

        <div className="mb-8 text-center">
          <h1 className="font-roboto whitespace-nowrap text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Crie sua conta
          </h1>
          <p className="font-inter mt-4 text-xs text-slate-500 sm:text-base lg:text-lg">
            Preencha os dados abaixo para começar.
          </p>
        </div>

        <form className="flex flex-col gap-6">
          {/* CAMPO NOME */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="name"
              className="text-base font-medium text-slate-500"
            >
              Nome
            </Label>
            <div className="relative">
              <User className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                className={cn(
                  "h-12 border-slate-200 pl-12 text-base",
                  "placeholder:text-slate-400 focus-visible:ring-indigo-600",
                )}
              />
            </div>
          </div>

          {/* CAMPO EMAIL */}
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

          {/* CAMPO SENHA */}
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="password"
              className="text-base font-medium text-slate-500"
            >
              Senha
            </Label>
            <div className="relative">
              <Lock className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <Input
                id="password"
                type="password"
                placeholder="Minha senha secreta"
                className={cn(
                  "h-12 border-slate-200 pl-12 text-base",
                  "placeholder:text-slate-400 focus-visible:ring-indigo-600",
                )}
              />
            </div>
          </div>

          {/* BOTÃO CRIAR CONTA */}
          <Button
            type="submit"
            className={cn(
              "font-roboto mt-2 h-12 w-full bg-indigo-700",
              "text-lg font-bold transition-colors hover:bg-indigo-800",
            )}
          >
            Criar conta
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        <div className="my-8 flex items-center gap-4 text-xs font-medium uppercase text-slate-400">
          <div className="h-[1px] w-full bg-slate-200"></div>
          <span className="whitespace-nowrap">Ou continue com</span>
          <div className="h-[1px] w-full bg-slate-200"></div>
        </div>

        {/* BOTÕES SOCIAIS */}
        <SocialButtons />

        <div className="mt-8 text-center text-sm text-slate-600">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-bold text-indigo-700 hover:underline"
          >
            Entre agora!
          </Link>
        </div>
      </section>

      {/* =================================================================================
          LADO DIREITO (BRANDING / ROXO)
          Visível apenas em Desktop (lg:flex). Em mobile fica totalmente oculto.
          - ALTERAÇÃO: mudei 'h-screen' para 'min-h-screen' para evitar cortes verticais
          ================================================================================= */}
      <section
        className={cn(
          "flex w-1/2 flex-col items-start justify-between",
          "overflow-hidden bg-indigo-700 px-[100px] py-12 text-white",
          "hidden min-h-screen lg:flex lg:w-1/2 lg:px-12 xl:px-[100px]",
        )}
      >
        <div className="flex items-center gap-3">
          <Image
            src={icon}
            width={48}
            height={48}
            alt="TaskMaster Icon"
            quality={100}
            priority
          />
          <h1 className="font-roboto text-3xl font-bold lg:text-5xl">
            TaskMaster
          </h1>
        </div>

        <div className="flex h-full w-full flex-col justify-center">
          <div className="mt-8 flex flex-col gap-6">
            <h2 className="font-roboto text-2xl font-bold leading-tight lg:text-4xl">
              Junte-se a nós e <br />
              <span className="text-indigo-300">comece a organizar</span>
            </h2>

            <p className="font-inter max-w-md text-sm text-indigo-200 lg:text-lg">
              Criei sua conta e dê o primeiro passo para uma gestão de tarefas
              mais eficiente e colaborativa.
            </p>
          </div>

          <div className="mt-8 flex w-full justify-center">
            <Image
              src={banner}
              width={550}
              height={550}
              alt="Ilustração de gerenciamento"
              priority
              quality={100}
              unoptimized
              className="h-auto max-h-[50vh] w-full max-w-[550px] object-contain"
            />
          </div>
        </div>

        <div className="pt-6 text-xs text-indigo-300 lg:text-sm">
          © 2025 TaskMaster Inc. Todos os direitos reservados.
        </div>
      </section>
    </main>
  );
};

export default Page;
