import { BsChevronLeft } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

interface Props {
  title: string
}

export const NavigasiHeader = ({ title }: Props) => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full px-4 bg-stone-700">
      <div className="w-full text-center relative text-gray-200 py-3">
        <div className="absolute left-0 bottom-0 top-0">
          <button onClick={() => navigate(-1)} className="flex relative h-full items-center justify-center">
            <BsChevronLeft size={18} />
          </button>
        </div>
        <span>{title}</span>
      </div>
    </div>
  )
}