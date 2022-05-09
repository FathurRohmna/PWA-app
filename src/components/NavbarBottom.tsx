import { IoBookOutline, IoPersonOutline, IoHomeOutline } from 'react-icons/io5'

import { useNavigate } from 'react-router-dom'

export const NavbarBottom = () => {
  const navigate = useNavigate()

  return (
    <div className="w-full z-10 bottom-0 fixed py-4 bg-white border-t border-gray-400 shadow-inner">
      <div className="max-w-md mx-auto flex items-center justify-around text-gray-700">
        <button onClick={() => navigate('/app/barber-shop')}>
          <IoHomeOutline size={20} />
        </button>
        <button onClick={() => navigate('/app/barber-shop/history')}>
          <IoBookOutline size={20} />
        </button>
        <button onClick={() => navigate('/app/barber-shop/account')}>
          <IoPersonOutline size={20} />
        </button>
      </div>
    </div>
  )
}