export default function Loading() {
  return ( 
    <div className="flex h-screen bg-[#fafafa] overflow-y-hidden">
      <div className="w-[200px] bg-white border-r border-[#e7e8ef] flex-col h-full lg:flex hidden">
        <div className="flex-1 py-12">
          <nav className="space-y-1 px-3">
            <div className="animate-pulse flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-[#f4f4f4] text-[#53545c]">
              <div className="h-5 w-5 bg-[#e7e8ef] rounded-full"></div>
              <div className="h-4 w-24 bg-[#e7e8ef] rounded"></div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
