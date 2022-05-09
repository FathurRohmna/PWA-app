import { NavigasiHeader } from "../../../components/NavigasiHeader";

const History = () => {
  return (
    <>
      <NavigasiHeader title="History" />
      <div className="relative w-full block">
        <div className="">
          <button className="w-full flex justify-between items-center py-4 px-6 border-b border-gray-400">
            <div className="text-left">
              <span className="text-xs font-bold">12 Nov 2022</span>
              <p>Invoice ID XYZ123123</p>
            </div>
            <span className="font-medium">Rp. 150.000</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default History
