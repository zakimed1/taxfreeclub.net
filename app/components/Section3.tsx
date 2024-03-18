export const Section3 = () => {
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
  return (
    <>
    {/* Left side */}
    <div>
      <h5>Some Pictures of</h5>
      <h2>MEMBERS WORK</h2>
      <p>Variant object vector clip library. Device layout scale asset share union blur duplicate editor slice.</p>
    </div>
    {/* Right side */}
    <div>
      <div>
        {
          members_work.map((e, index) => (
            <div key={index}>
              <button>
                <img src="/icons/play_btn.png" alt="play" />
              </button>
              <div style={{
                backgroundImage: e.thumbnail
              }}>
                <h6>{ e.name }</h6>
                <p>{ e.position }</p>
              </div>
            </div>
          ))
        }
      </div>
      <div>
        <div>
          <button>left</button>
          <button>right</button>
        </div>
        <div></div>
        <div>
          <span>01</span>
        </div>
      </div>
    </div>
    </>
  )
}