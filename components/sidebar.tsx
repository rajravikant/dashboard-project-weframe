import type React from "react"
import Link from "next/link"
import {
  BarChart2,
  Contact,
  ReplaceIcon as Customize,
  FileText,
  Headphones,
  Home,
  ImageIcon,
  LayoutGrid,
  MessageSquare,
  Settings,
  User2,
} from "lucide-react"
import Image from "next/image"
import { icons } from "@/constant/images"

export default function Sidebar() {
  return (
    <div className="w-[200px] bg-white border-r border-[#e7e8ef] flex-col h-full lg:flex hidden">
      <div className="flex-1 py-12">
        <nav className="space-y-1 px-3">
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.home} className="size-5"/>} label="Dashboard" href="#"  />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.document} className="size-5"/>} label="Content" href="#" active />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.user} className="size-5"/>} label="User" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.task} className="size-5"/>} label="Task" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.monitor} className="size-5"/>} label="App/Web" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.statsup} className="size-5"/>} label="Analytics" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.videoSq} className="size-5"/>} label="Media" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.customize} className="size-5"/>} label="Customize" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.notification} className="size-5"/>} label="Notifications" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.subscription} className="size-5"/>} label="Subscription" href="#" />
          <SidebarItem icon={<Image alt="home" height={5} width={5} src={icons.settings} className="size-5"/>} label="Settings" href="#" />
        </nav>
      </div>
      <div className="p-3 border-t border-[#e7e8ef]">
        <SidebarItem icon={<Headphones className="h-5 w-5" />} label="Contact Support" href="#" />
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href: string
  active?: boolean
}

function SidebarItem({ icon, label, href, active }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
        active ? "bg-[#1c1442] text-white" : "text-[#53545c] hover:bg-[#f4f4f4]"
      }`}
    >
      {icon}
      {label}
    </Link>
  )
}
