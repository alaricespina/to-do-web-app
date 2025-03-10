import { Metadata } from "next";
import Link from "next/link";
import Sidebar from "@/components/SideBar/Sidebar";
export const metadata: Metadata = {
  title: "Tasks",
};

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-72 min-w-[250px] max-w-[320px] h-full p-4 transition-all duration-300 ease-in-out lg:w-80">
        <Sidebar />
      </div>
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
