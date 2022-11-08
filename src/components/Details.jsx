import Search from './Search';

function Details(){
  return(
    <div className="p-6">
      <nav className="flex justify-between items-center">
        <div className="text-xl">
          <h1 className="font-semibold"><span className="text-[#29CD9C]">KOT</span> <span>Microworks</span></h1>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Mike Otieno</h2>
        </div>
      </nav>
      <div className='flex justify-between items-center mt-4'>
        <Search/>
        <div>
          <p className='font-semibold p-1.5 bg-green-50 rounded-lg'>Download</p>
        </div>
      </div>
    </div>
  )
}
export default Details;