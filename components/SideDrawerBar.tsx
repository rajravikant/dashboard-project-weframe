import type React from "react"
import { Headphones} from "lucide-react"
import Image from "next/image"
import { icons } from "@/constant/images"
import { cn } from "@/lib/utils"
import SideBarItem from "./SideBarItem"

const SideDrawerBar = ({open}: { open: boolean }) => {
  return (
    <div className={cn(" bg-white border-r border-[#e7e8ef] flex-col h-full lg:flex hidden",open ? "w-[200px] opacity-100" : "w-0 opacity-0", "transition-all duration-300 ease-in-out")}>
      <div className="flex-1 py-12">
        <nav className="space-y-1 px-3">
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.home} className="size-5"/>} label="Dashboard" href="#"  />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.document} className="size-5"/>} label="Content" href="#" active />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.user} className="size-5"/>} label="User" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.task} className="size-5"/>} label="Task" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.monitor} className="size-5"/>} label="App/Web" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.statsup} className="size-5"/>} label="Analytics" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.videoSq} className="size-5"/>} label="Media" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.customize} className="size-5"/>} label="Customize" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.notification} className="size-5"/>} label="Notifications" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.subscription} className="size-5"/>} label="Subscription" href="#" />
          <SideBarItem icon={<Image alt="home" height={5} width={5} src={icons.settings} className="size-5"/>} label="Settings" href="#" />
        </nav>
      </div>
      <div className="p-3 border-t border-[#e7e8ef]">
        <SideBarItem icon={<Headphones className="h-5 w-5" />} label="Contact Support" href="#" />
      </div>
    </div>
  )
}

export default SideDrawerBar