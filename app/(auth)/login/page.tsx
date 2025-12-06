import Image from "next/image";
import React from "react";

import banner from "@/app/assets/banner.svg";
import icon from "@/app/assets/task-manage-icon.svg";

const Page = () => {
  return (
    <main className="flex min-h-screen w-full">
      <section className="flex w-1/2 flex-col items-start justify-between overflow-hidden bg-indigo-700 px-[100px] py-12 text-white">
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

      <section className="flex w-1/2 flex-col items-start justify-between overflow-hidden bg-white px-[100px] py-12 text-black">
        Lado Direito
      </section>
    </main>
  );
};

export default Page;
