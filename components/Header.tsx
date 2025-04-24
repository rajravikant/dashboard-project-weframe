"use client"
import { ArrowLeft,ArrowRight} from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import { icons } from '@/constant/images'
import SearchBar from './SearchBar'
import Filters from './Filters'
import { cn } from '@/lib/utils'

const Header = ({hideSideBar,isOpen}:{hideSideBar: ()=>void, isOpen: boolean}) => {
  

  // State to manage the search value and selected filter option
  const [searchValue, setSearchValue] = useState('')

  // state to manage the selected filter option
  const [selectedOption, setSelectedOption] = useState('All')

  // state to manage the show filters
  const [showFilters, setShowFilters] = useState(true)


  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  }

  return (
    <div className="z-40 ">
                <div className="flex items-center justify-between mb-6 border-b border-[#e7e8ef] pb-4">
                  <div className="flex items-center gap-2">
                    <button name='side-bar-state' aria-label='close-or-open-sidebar' className="p-1" onClick={hideSideBar} >
                      {isOpen ? <ArrowLeft className="h-5 w-5 text-[#1c1d22]"/> : <ArrowRight className="h-5 w-5 text-[#1c1d22]"/>}
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
                      <button name="drop-down-button" className="ml-16">
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
                  <div className='flex gap-5 w-full lg:w-auto'>
                 <SearchBar value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                  <div className="actions flex items-center gap-3">
                  <button name='toggle-calender' className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#f4f4f4]">
                      <Image alt="calendar" height={5} width={5} src={icons.calender} className="size-5"/>
                    </button>
                    <button name='toggle-filter' onClick={toggleFilters} aria-label='toggle-filter' className={cn("h-10 w-10 flex items-center justify-center rounded-lg bg-[#f4f4f4]", showFilters ? 'border border-gray-300' : null)}>
                      <Image alt="filter" height={5} width={5} src={icons.filter} className="size-5"/>
                    </button>
                  </div>
                  </div>
                    <button name="add-new-story"  className="bg-[#1c1442] hover:bg-[#2f2861] text-white px-4 lg:ml-12 py-2.5 rounded-lg font-medium">Add New Story</button>
                </div>
    
                {/* filters */}
                 <div className={cn(showFilters ? 'visible opacity-100 lg:h-[10vh] h-[20vh] mb-6' : 'invisible opacity-0 h-0', 'transition-all duration-300 ease-in-out overflow-hidden ')}>
                  <Filters options={filterOptions} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                </div>
               
              </div>
    
  )
}

export default Header



const filterOptions = [
  { label: 'All', count: 4500 },
  { label: 'Draft', count: 1203 },
  { label: 'Pending', count: 890 },
  { label: 'Published', count: 2432 },
  { label: 'Archived', count: 320 },
]


