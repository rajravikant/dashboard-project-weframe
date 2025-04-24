import { MoreHorizontal } from 'lucide-react'
import img1 from '../assets/img/card-img-1.png'
import img2 from '../assets/img/card-img-2.png'
import img3 from '../assets/img/card-img-3.png'
import img4 from '../assets/img/card-img-4.png'
import img5 from '../assets/img/card-img-5.png'
import img6 from '../assets/img/card-img-6.png'
import img7 from '../assets/img/card-img-7.png'
import img8 from '../assets/img/card-img-8.png'
import { icons } from "@/constant/images"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

import Image from 'next/image'

interface StoryCardProps {
    image: StaticImport
    title: string
    category: string
    date: string
    status: "Published" | "Created" | "Draft"
  }
  
export default function StoryCard({ image, title, category, date, status }: StoryCardProps) {
    const getStatusBadge = (status: string) => {
      switch (status) {
        case "Published":
          return <span className="px-3 py-1 rounded-sm bg-[#e4fff8] text-[#0dad82] text-xs font-medium">Published</span>
        case "Created":
          return <span className="px-3 py-1 rounded-sm bg-[#daf1fb] text-[#58a4ff] text-xs font-medium">Created</span>
        case "Draft":
          return <span className="px-3 py-1 rounded-sm bg-[#f4f4f4] text-[#53545c] text-xs font-medium">Draft</span>
        default:
          return null
      }
    }
  
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm relative">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            
            className="w-full h-96 lg:h-46 object-cover"
          />
          <div className="absolute top-2 right-2 flex space-x-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 flex items-center gap-1">
              {/* <Eye className="h-3.5 w-3.5 text-[#1c1d22]" /> */}
              <Image alt="eye" height={3.5} width={3.5} src={icons.eye} className="size-5"/>
              <span className="text-xs font-medium">428</span>
            </div>
            <button className="bg-white/80 backdrop-blur-sm rounded-md p-1.5">
              <Image alt="status" height={3} width={3} src={icons.statsup} className="size-5"/>
            </button>
          </div>
        </div>
        <div className="p-4 absolute bottom-0 left-0 right-0 rounded-b-lg shadow-sm">
          <h3 className="text-base font-semibold text-[#fff] mb-2">{title}</h3>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-[#eee]">{category}</span>
              <span className="text-[#a0a3bd]">•</span>
              <span className="text-xs text-[#a0a3bd]">{date}</span>
            </div>
            {getStatusBadge(status)}
          </div>
          <div className="flex items-center gap-2">
            <button className="flex-1 py-2 rounded-md bg-[#f8fafb] text-[#1c1d22] text-sm font-medium">View</button>
            <button className="p-2 rounded-md bg-[#f8fafb]">
              <MoreHorizontal className="h-5 w-5 text-[#1c1d22]" />
            </button>
          </div>
        </div>
      </div>
    )
  }
  
 export const storyCards: StoryCardProps[] = [
    {
      image: img1,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
    },
    {
      image: img2,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Created",
    },
    {
      image: img3,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Draft",
    },
    {
      image: img4,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
    },
    {
      image: img5,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
    },
    {
      image: img6,
      title: "Chez pierre restaurant in Monte Carlo by Vuidafieri",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
    },
    {
      image: img7,
      title: "Teknion wins Gold at 2022 International Design Awards",
      category: "Politics",
      date: "20 Sep 2022",
      status: "Published",
    },
    {
      image: img8,
      title: "How 7 lines code turned into $36 Billion Empire",
      category: "BUSINESS",
      date: "20 Sep 2022",
      status: "Published",
    }
  ]
  