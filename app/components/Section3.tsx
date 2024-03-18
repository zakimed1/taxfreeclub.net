export const Section3 = () => {
  return (
    <div className="flex">
    {/* Left side */}
    <div className="w-[30%]">
      <h5 className="text-[25px] font-medium text-left capitalize text-white">Some Pictures of</h5>
      <h2 className="text-[40px] font-semibold text-left uppercase text-white">MEMBERS WORK</h2>
      <p className="text-[18px] text-left capitalize text-white">Variant object vector clip library. Device layout scale asset share union blur duplicate editor slice.</p>
    </div>
    {/* Right side */}
    <div className="flex-2">
      <div className="flex gap-4">
        {
          members_work.map((e, index) => (
            <div 
              key={index}
              className="w-[160px] h-[200px] rounded-[15px] relative bg-slate-400"
              style={{
                backgroundImage: e.thumbnail
              }}
            >
              <button className="w-[40px] h-[40px] absolute top-5 right-8">
                <img src="/icons/play_btn.png" alt="play" />
              </button>
              <div 
              className="w-[40px] h-[40px] absolute bottom-5 left-4"
              >
                <h6>{ e.name }</h6>
                <p>{ e.position }</p>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-4">
          <button>left</button>
          <button>right</button>
        </div>
        <div className="h-[2px] w-full bg-white"></div>
        <div>
          <span className="text-[30px] font-semibold text-left uppercase text-white">01</span>
        </div>
      </div>
    </div>
    </div>
  )
}

const members_work = [
  {
    thumbnail: '/work_sample.png',
    name: 'dev_name',
    position: 'dev_position',
    description: 'description',
  },
  {
    thumbnail: '/work_sample.png',
    name: 'dev_name',
    position: 'dev_position',
    description: 'description',
  },
  {
    thumbnail: '/work_sample.png',
    name: 'dev_name',
    position: 'dev_position',
    description: 'description',
  },
  {
    thumbnail: '/work_sample.png',
    name: 'dev_name',
    position: 'dev_position',
    description: 'description',
  },
]