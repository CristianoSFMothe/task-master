"use client";

import { ArrowRight, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import banner from "@/app/assets/banner.svg";
import icon from "@/app/assets/task-manage-icon.svg";
import { AuthInput } from "@/components/auth-input";
import SocialButtons from "@/components/social-buttons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Page = () => {
  const router = useRouter();

  return (
    <main className="flex min-h-screen w-full">
      <section
        className={cn(
          "flex w-1/2 flex-col items-start justify-between",
          "overflow-hidden bg-indigo-700 px-[100px] py-12 text-white",
          "xl:[100px] hidden py-12 lg:flex lg:w-1/2 lg:px-12",
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

          <h1 className="font-roboto text-3xl font-bold lg:text-5xl">
            TaskMaster
          </h1>
        </div>

        <div className="flex h-full w-full flex-col justify-center">
          <div className="mt-8 flex flex-col gap-6">
            <h2 className="font-roboto log:text-4xl text-2xl font-bold leading-tight">
              Gerencia suas tarefas com <br />{" "}
              <span className="text-indigo-300">foco e clareza</span>
            </h2>

            <p className="font-inter max-w-md text-sm text-indigo-200 lg:text-lg">
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
              unoptimized
              className="h-auto max-h-[50vh] w-full max-w-[550px] object-contain"
            />
          </div>
        </div>

        <div className="pt-6 text-xs text-indigo-300 lg:text-sm">
          © 2025 TaskMaster Inc. Todos os direitos reservados.
        </div>
      </section>

      <section
        className={cn(
          "flex w-full flex-col justify-center bg-white py-12 text-slate-900",
          "px-6 sm:px-12 lg:w-1/2 lg:px-16 xl:px-[100px]",
        )}
      >
        <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
          {/* Fundo roxo para o ícone branco aparecer bem no fundo branco */}
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
          <h1
            className={cn(
              "font-roboto whitespace-nowrap sm:text-4xl lg:text-5xl",
              "text-3xl font-bold tracking-tighter text-slate-900",
            )}
          >
            Bem-vindo de volta
          </h1>
          <p className="font-inter mt-4 text-xs text-slate-500 sm:text-base lg:text-lg">
            Insira suas credenciais para acessar sua conta.
          </p>
        </div>

        <form className="flex flex-col gap-6">
          <AuthInput
            id="email"
            label="E-mail"
            type="email"
            icon={Mail}
            placeholder="meu@email.com"
          />

          <AuthInput
            id="password"
            label="Senha"
            type="password"
            icon={Lock}
            placeholder="minha senha secreta"
          />

          <Button
            type="button"
            onClick={() => router.push("/dashboard")}
            className={cn(
              "mt-2 h-12 w-full bg-indigo-700",
              "font-roboto text-lg font-bold transition-colors hover:bg-indigo-800",
            )}
          >
            Entrar na plataforma
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </form>

        <div className="my-8 flex items-center gap-4 text-xs font-medium uppercase text-slate-400">
          <div className="h-[1px] w-full bg-slate-200"></div>
          <span className="whitespace-nowrap">Ou continue com</span>
          <div className="h-[1px] w-full bg-slate-200"></div>
        </div>

        <SocialButtons />

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
