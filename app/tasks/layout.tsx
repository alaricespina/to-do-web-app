import { Metadata } from "next";
import Link from "next/link";
import Sidebar from "@/components/SideBar/Sidebar";
export const metadata: Metadata = {
  title: "Tasks",
};

export default function TasksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/4 h-full p-4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        {children}
      </div>

      {/* <div className="flex-grow p-4">{children}</div> */}
    </div>
  );
}
