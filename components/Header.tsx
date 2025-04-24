import { ArrowLeft, Search } from 'lucide-react'
import React from 'react'

import Image from 'next/image'
import { icons } from '@/constant/images'

const Header = () => {
  return (
    <div className="bg-white z-40 ">
                <div className="flex items-center justify-between mb-6 border-b border-[#e7e8ef] pb-4">
                  <div className="flex items-center gap-2">
                    <button className="p-1">
                      <ArrowLeft className="h-5 w-5 text-[#1c1d22]" />
                    </button>
                    <h1 className="text-2xl font-semibold text-[#1c1d22]">Stories</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3 bg-[#fff] px-4 py-2 rounded-md border-solid border-blue-100 border">
                      <Image alt="user" className="size-8" src={icons.girl}/>
                      <div>
                        <div className="text-xs text-[#53545c]">Welcome back,</div>
                        <div className="text-sm font-medium">Akshita Patel</div>
                      </div>
                      <button className="ml-16">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="#1c1d22"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
    
                <div className="flex items-center justify-end gap-5  mb-6 lg:flex-row flex-col">
                  
                  <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-[#a0a3bd]" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full pl-10 pr-4 py-2.5 shadow rounded-lg border border-[#e7e8ef] focus:outline-none focus:ring-1 focus:ring-[#9058ff]"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#f4f4f4]">
                      <Image alt="calendar" height={5} width={5} src={icons.calender} className="size-5"/>
                    </button>
                    <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#f4f4f4]">
                      <Image alt="filter" height={5} width={5} src={icons.filter} className="size-5"/>
                    </button>
                    <button className="bg-[#1c1442] text-white px-4 ml-12 py-2.5 rounded-lg font-medium">Add New Story</button>
                  </div>
                </div>
    
                <div className="mb-6">
                  <div className="flex space-x-2 flex-wrap">
                    <button className="px-4 py-2 rounded-lg bg-[#1c1442] text-white font-semibold">All <span className="text-[#A0A3BD]">(4,500)</span></button>
                    <button className="px-4 py-2 rounded-lg bg-[#f4f4f4] text-[#53545c] font-semibold">Draft <span className="text-[#A0A3BD]">(1,203)</span></button>
                    <button className="px-4 py-2 rounded-lg bg-[#f4f4f4] text-[#53545c] font-semibold">Pending <span className="text-[#A0A3BD]">(890)</span></button>
                    <button className="px-4 py-2 rounded-lg bg-[#f4f4f4] text-[#53545c] font-semibold">Published <span className="text-[#A0A3BD]">(2,432)</span></button>
                    <button className="px-4 py-2 rounded-lg bg-[#f4f4f4] text-[#53545c] font-semibold">Archived <span className="text-[#A0A3BD]">(320)</span></button>
                  </div>
                </div>
              </div>
    
  )
}

export default Header