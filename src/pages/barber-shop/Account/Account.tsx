import { FiChevronRight } from "react-icons/fi"

import { NavigasiHeader } from "../../../components/NavigasiHeader";

import Profile from "../../../assets/mrcrmn.png";

const Account = () => {
  return (
    <>
      <NavigasiHeader title="Account" />
      <div className="max-w-md px-2 md:py-10 md:px-4 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl py-4 md:mx-auto px-4 md:px-12 md:text-center rounded-2xl my-6">
            <div className="">
              <div className="flex w-full">
                <div className="rounded-full mr-4 overflow-hidden relative">
                  <img className="object-cover w-14 h-14" src={Profile} alt="" />
                </div>
                <div className="w-full py-2 px-3 flex justify-between items-center">
                  <div className="w-full text-left">
                    <h3 className="text-lg font-bold leading-5">John Doe</h3>
                    <span>0821376234234</span>
                  </div>
                  <button
                    className="whitespace-nowrap text-xs px-4 py-2 border border-gray-600 rounded-full"
                  >
                    Cek Antrian
                  </button>
                </div>
              </div>
            </div>

            <div className="relative w-full my-4">
              <button className="flex w-full py-2 border-t border-gray-400 items-center justify-between">
                <span>Pengaturan Akun</span>
                <FiChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account
