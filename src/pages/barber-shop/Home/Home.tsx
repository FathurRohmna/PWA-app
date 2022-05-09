import { useNavigate } from 'react-router-dom'

import ReactStarts from 'react-rating-stars-component'

import Profile from '../../../assets/mrcrmn.png'
import Banner from '../../../assets/5142963.jpg'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full overflow-auto">
      <div className='max-w-md mx-auto'>
        <div className="h-56 relative overflow-hidden w-full">
          <img src={Banner} alt="Banner" />
        </div>
        <div className='text-center my-6'>
          <button onClick={() => navigate('/app/booking')} className='bg-gray-600 shadow md:shadow-lg rounded-full px-16 py-3 text-gray-200 font-bold'>
            Book Now
          </button>
        </div>
      </div>
      <div className="max-w-md md:py-10 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl md:mx-auto md:text-center rounded-2xl my-4">
            <div className='my-2 px-6 md:px-16'>
              <h6 className='mb-4 font-bold'>Current Booking(s)</h6>
              <div className="">
                <div className="flex w-full border border-gray-400 shadow-lg rounded">
                  <div className="py-2 px-3 bg-gray-200 text-center">
                    <h4 className='text-xl m-0'>30</h4>
                    <span className='text-xs'>Queue</span>
                  </div>
                  <div className="w-full py-2 px-3 flex justify-between items-center">
                    <div className="w-full">
                      <h3 className='text-lg font-bold leading-5'>John Doe</h3>
                      <ReactStarts
                        count={5}
                        size={15}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                    <button onClick={() => navigate('/app/booking/1/chek-queue')} className='whitespace-nowrap text-xs px-4 py-2 border border-gray-600 rounded-full'>
                      Cek Antrian
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div  className='my-4'>
              <h6 className='mb-4 font-bold px-6 md:px-16'>Todays Proffesionals</h6>
              <div className="flex gap-6 overflow-auto pl-6 pb-4">
                <div className="w-min">
                  <div className="rounded-full overflow-hidden relative w-16 h-16">
                    <img className="object-cover" src={Profile} alt="" />
                  </div>
                  <div className='text-center my-2'>
                    <h3 className='text-xs font-bold leading-5'>John Doe</h3>
                    <div className="flex items-center justify-center">
                      <ReactStarts
                        count={5}
                        size={10}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-min">
                  <div className="rounded-full overflow-hidden relative w-16 h-16">
                    <img className="object-cover" src={Profile} alt="" />
                  </div>
                  <div className='text-center my-2'>
                    <h3 className='text-xs font-bold leading-5'>John Doe</h3>
                    <div className="flex items-center justify-center">
                      <ReactStarts
                        count={5}
                        size={10}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-min">
                  <div className="rounded-full overflow-hidden relative w-16 h-16">
                    <img className="object-cover" src={Profile} alt="" />
                  </div>
                  <div className='text-center my-2'>
                    <h3 className='text-xs font-bold leading-5'>John Doe</h3>
                    <div className="flex items-center justify-center">
                      <ReactStarts
                        count={5}
                        size={10}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-min mr-8">
                  <div className="rounded-full overflow-hidden relative w-16 h-16">
                    <img className="object-cover" src={Profile} alt="" />
                  </div>
                  <div className='text-center my-2'>
                    <h3 className='text-xs font-bold leading-5'>John Doe</h3>
                    <div className="flex items-center justify-center">
                      <ReactStarts
                        count={5}
                        size={10}
                        value={4}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12">
              <div className="flex w-full justify-between  px-6 md:px-16">
                <h6 className='mb-4 font-semibold'>Latest News</h6>
                <span>See all(3)</span>
              </div>
              <div className="flex gap-2 overflow-auto pl-6 pb-4">
                <div className="">
                  <div className="w-36 h-36">
                    <img className="object-cover" src={Banner} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="w-36 h-36">
                    <img className="object-cover" src={Banner} alt="" />
                  </div>
                </div>
                <div className="">
                  <div className="w-36 h-36">
                    <img className="object-cover" src={Banner} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
