import { icons } from "@/constant/images"
import { ReactNode } from "react";
import Image from "next/image";
import React from "react";

interface NavItem {
    icon: React.JSX.Element;
    label: string;
    href: string;
    active?: boolean;
}


export const navItems:NavItem[] = [
  { icon: <Image alt="home" src={icons.home} className="size-5"/>, label: "Dashboard", href: "/" },
  { icon: <Image alt="document" src={icons.document} className="size-5"/>, label: "Content", href: "/", active: true },
  { icon: <Image alt="user" src={icons.user} className="size-5"/>, label: "User", href: "/" },
  { icon: <Image alt="task" src={icons.task} className="size-5"/>, label: "Task", href: "/" },
  { icon: <Image alt="monitor" src={icons.monitor} className="size-5"/>, label: "App/Web", href: "/" },
  { icon: <Image alt="stats-up" src={icons.statsup} className="size-5"/>, label: "Analytics", href: "/" },
  { icon: <Image alt="video" src={icons.videoSq} className="size-5"/>, label: "Media", href: "/" },
  { icon: <Image alt="customize" src={icons.customize} className="size-5"/>, label: "Customize", href: "/" },
  { icon: <Image alt="notification" src={icons.notification} className="size-5"/>, label: "Notifications", href: "/" },
  { icon: <Image alt="subs" src={icons.subscription} className="size-5"/>, label: "Subscription", href: "/" },
  { icon: <Image alt="settings" src={icons.settings} className="size-5"/>, label: "Settings", href: "/" },
]