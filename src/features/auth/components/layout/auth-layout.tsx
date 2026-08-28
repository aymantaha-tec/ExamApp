import FolderIconCode from "@/components/icons/folderIconCode.tsx";
import { cn } from "@/shared/lib/tailwind-merge.ts";

import { Outlet } from "react-router";
import { FEATURES } from "../auth-features.data.ts";

export default function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Features */}
      <section
        className={cn(
          // Element
          "relative flex items-center justify-center overflow-hidden bg-blue-50",

          //Befor
          "before:absolute before:top-14 before:right-8 before:z-0 before:size-50 before:rounded-full before:bg-blue-500 before:blur-[150px]",

          // After
          "after:absolute after:-bottom-14 after:left-8 after:z-0 after:size-50 after:rounded-full after:bg-blue-500 after:blur-[150px]",
        )}
      >
        <div className="p-5">
          {/* Header / Brand Logo  */}
          <div className="mb-10 flex items-center justify-start">
            <FolderIconCode />
            <span className="font-bold text-primary">Exam App</span>
          </div>
          <div>
            {/* Main Heading (Hero Title)*/}
            <h1 className="mb-5 py-5 font-inter text-3xl font-bold">
              Empower your learning journey <br />
              with our smart exam platform.
            </h1>

            {/* Feature Items */}
            <div className="flex flex-col items-start justify-center gap-y-10">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="aspect-square shrink-0 border border-blue-500 p-2">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex flex-col justify-center gap-2.5">
                      <h3 className="text-xl font-semibold text-blue-600">
                        {feature.title}
                      </h3>
                      <p className="max-w-sm text-sm text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Auth Pages */}
      <main className="flex items-center justify-center bg-white">
        <Outlet />
      </main>
    </div>
  );
}
