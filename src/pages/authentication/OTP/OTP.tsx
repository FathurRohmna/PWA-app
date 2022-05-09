import { useNavigate } from 'react-router-dom'

const OTP = () => {
  const navigate = useNavigate()

  return (
    <div className="relative w-full min-h-screen">
      <div className="max-w-md px-2 md:px-4 py-8 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl md:mx-auto px-4 md:px-12 md:text-center rounded-2xl my-6">
            <h1 className="text-lg font-bold mb-4">OTP Confirmation</h1>
            <div className="my-4">
              <p className="w-3/4">Please enter the OTP code sent to your phone.</p>
              <span className="font-bold mt-2 block">+62 2132*******</span>
            </div>

            <div className="my-8">
              <form action="">
                <div className="w-full text-black relative box-border px-4">
                  <div className="px-2 relative">
                    <input style={{ letterSpacing: '30px', paddingLeft: '10px', paddingRight: '8px', backgroundImage: 'linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%)', backgroundPosition: 'bottom', backgroundSize: '48px 1px', backgroundRepeat: 'repeat-x'}} className="text-xl font-bold py-4 outline-none w-full" id="email" type="text" maxLength={6} />
                  </div>
                </div>
                <div className="my-8 text-center block">
                  <button onClick={() => navigate('/app')} className="px-8 py-3 block bg-gray-600 text-gray-200 w-full rounded">
                    Confirm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTP
