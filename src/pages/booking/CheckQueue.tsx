import { NavigasiHeader } from "../../components/NavigasiHeader";

import ReactStarts from "react-rating-stars-component";

import Profile from "../../assets/mrcrmn.png";

const CheckQueue = () => {
  return (
    <>
      <NavigasiHeader title="Antrian" />
      <div className="max-w-md px-2 md:py-10 md:px-4 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl py-4 md:mx-auto px-4 md:px-12 md:text-center rounded-2xl my-6">
            <div className="">
              <div className="flex w-full">
                <div className="rounded-full mr-4 overflow-hidden relative">
                  <img className="object-cover w-14 h-14" src={Profile} alt="" />
                </div>
                <div className="w-full py-2 px-3 flex justify-between items-center">
                  <div className="w-full">
                    <h3 className="text-lg font-bold leading-5">John Doe</h3>
                    <ReactStarts
                      count={5}
                      size={15}
                      value={4}
                      activeColor="#ffd700"
                    />
                  </div>
                  <button
                    className="whitespace-nowrap text-xs px-4 py-2 border border-gray-600 rounded-full"
                  >
                    Cek Antrian
                  </button>
                </div>
              </div>
            </div>
            <div className="px-4 my-8">
              <div className="text-center py-8 bg-black rounded-2xl">
                <p className="text-lg font-norma">You are on queue number</p>
                <h2 className="text-4xl font-bold my-4">5</h2>
                <p>Current queue: 4</p>
              </div>
            </div>
            <span className="text-gray-400 font-semibold text-center">Est. Time 4 hours</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckQueue;
