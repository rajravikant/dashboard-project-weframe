import Sidebar from "@/components/sidebar"
import Header from "@/components/Header"
import StoryCard, { storyCards } from "@/components/StoryCard"

export default function StoriesPage() {
  return (
    <div className="flex h-screen bg-[#fafafa] overflow-y-hidden">
      <Sidebar />
      <main className="flex-1 lg:p-6 p-2 relative ">
          {/* HEADER */}
          <Header/>
          {/* CARDS */}
          <div className="h-screen overflow-y-auto pb-72">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {storyCards.map((card, index) => (
                <StoryCard key={index} {...card} />
              ))}
            </div>
          </div>
      </main>
    </div>
  )
}

