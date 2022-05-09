import { FiChevronRight } from "react-icons/fi"

import { NavigasiHeader } from "../../components/NavigasiHeader";

const Payment = () => {
  return (
    <>
      <NavigasiHeader title="Payment" />
      <div className="max-w-md px-2 md:py-10 md:px-4 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl py-4 md:mx-auto px-4 md:px-12 md:text-center rounded-2xl my-6">
            <p className="mb-6 text-center font-medium">Mohon pilih metode pembayaran</p>
            <div className="">
              <button className="flex w-full p-4 border border-gray-400 rounded justify-between items-center">
                <span className="">Bank Transfer</span>
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
