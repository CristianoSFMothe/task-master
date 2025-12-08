import { Layout, User } from "lucide-react";
import Image from "next/image";

import icon from "@/app/assets/task-manage-icon.svg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Dashboard() {
  return (
    <main className="flex min-h-screen w-full">
      <aside className="flex w-72 flex-col bg-[#0F172A] px-6 py-8 text-white">
        <div className="mb-10 flex items-center gap-3">
          <Image
            src={icon}
            width={32}
            height={32}
            alt="TaskMaster Icon"
            quality={100}
            unoptimized // Ajuda com SVGs locais
          />
          <h1
            className={cn(
              "font-roboto font-bold",
              "text-3xl text-white lg:text-2xl",
            )}
          >
            TaskMaster
          </h1>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            className={cn(
              "flex w-full items-center justify-start gap-2",
              "bg-[#483DCA] text-lg hover:bg-[#483DCA]/90",
            )}
          >
            <Layout className="mr-2" size={24} />
            Dashboard
          </Button>

          <Button
            className={cn(
              "flex w-full items-center justify-start gap-2",
              "bg-[#483DCA] text-lg hover:bg-[#483DCA]/90",
            )}
          >
            <User className="mr-2" size={24} />
            Perfil
          </Button>
        </div>
      </aside>
      <section className="h-full min-h-screen w-full bg-gray-300 px-6 py-8">
        <h1>Lateral direita</h1>
      </section>
    </main>
  );
}

export default Dashboard;
