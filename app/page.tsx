"use client"

import { useState } from "react"
import Header from "@/components/Header"
import StoryCard from "@/components/StoryCard"
import { storyCards } from "@/constant/cardData"
import SideDrawerBar from "@/components/SideDrawerBar"

export default function StoriesPage() {
  // State to manage the sidebar open/close
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)

  // Function to handle sidebar toggle
  const handleSidebarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }
    
  return (
    <div className="flex h-screen bg-[#fafafa] overflow-y-hidden">
      
      {/* SIDEBAR */}
      <SideDrawerBar open={isSideBarOpen} />   
      
      <main className="flex-1 lg:p-6 p-2 relative ">
          {/* HEADER */}
          <Header hideSideBar={()=>handleSidebarToggle()} isOpen = {isSideBarOpen}/>
          
          {/* CARDS */}
          <div className="h-screen overflow-y-auto pb-72">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {storyCards.map((card, index) => (
              <div
                key={index}
                className="opacity-0 translate-y-5 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <StoryCard {...card} />
              </div>
              ))}
            </div>
          </div>
          {/* CARDS */}
      </main>
    </div>
  )
}

