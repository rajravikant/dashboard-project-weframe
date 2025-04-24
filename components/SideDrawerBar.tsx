import type React from "react"
import { ArrowLeft, Headphones} from "lucide-react"
import { cn } from "@/lib/utils"
import SideBarItem from "./SideBarItem"
import { navItems } from "@/constant/navItems"

const SideDrawerBar = ({open,onClose}: { open: boolean ,onClose : ()=>void}) => {
  return (
    <div className={cn(" bg-white border-r border-[#e7e8ef] flex-col h-full flex absolute z-[999] lg:relative",open ? "w-1/2 lg:w-[200px] opacity-100" : "w-0 opacity-0", "transition-all duration-300 ease-in-out")}>
      
        <button name="close-sidebar" className="absolute right-3 top-3 lg:hidden border border-gray-200 rounded-md p-1.5 bg-gray-100" onClick={onClose}>
          <ArrowLeft className="h-5 w-5 text-[#1c1d22]" />
        </button>
      <div className="flex-1 py-20">
        <nav className="space-y-1 px-3">
          {navItems.map((item, index) => (
            <SideBarItem key={index} icon={item.icon} label={item.label} href={item.href} active={item.active} />
          ))}
        </nav>
      </div>
      <div className="p-3 border-t border-[#e7e8ef]">
        <SideBarItem icon={<Headphones className="h-5 w-5" />} label="Contact Support" href="/" />
      </div>
    </div>
  )
}

export default SideDrawerBar;


