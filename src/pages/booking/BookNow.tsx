import { useRef, createRef, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import { useNavigate } from "react-router-dom";

import { NavigasiHeader } from "../../components/NavigasiHeader";
import ServiceSelector, {
  TYPE_SERVICE,
} from "../../components/ServiceSelector";
import BarberSelector, { BARBER_DATA } from "../../components/BarberSelector";
import PaymentSelector, {
  TYPE_PAYMENT,
} from "../../components/PaymentSelector";

const QUEUE_TIME = [
  { id: 1, time: 9},
  { id: 2, time: 10},
  { id: 3, time: 11},
  { id: 4, time: 12},
  { id: 5, time: 14},
  { id: 6, time: 15},
  { id: 7, time: 16},
  { id: 8, time: 17},
];

export function tConvert(time) {
  const sufix = time >= 12 ? 'pm' : 'am'
  const hours = ((time + 11) % 12 + 1) + sufix

  return hours
}

const BookNow = () => {
  const [serviceIsOpen, setServiceIsOpen] = useState(false);
  const [barberIsOpen, setBarberIsOpen] = useState(false);
  const [paymentIsOpen, setPaymentIsOpen] = useState(false);

  const serviceRef = createRef();
  const barberRef = createRef();
  const paymentRef = createRef();
  
  const navigate = useNavigate()

  const selectedDay = (val) => console.log(val);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <NavigasiHeader title="Book Now" />
      <div className="max-w-md px-2 md:py-10 md:px-4 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl py-8 md:mx-auto px-4 md:px-12 md:text-center rounded-2xl my-6">
            <h4 className="text-2xl mb-6 font-medium">How can we help you ?</h4>
            <div className="my-4">
              <label htmlFor="">Select Service</label>
              <div className="">
                <ServiceSelector
                  id={"service_selector"}
                  ref={serviceRef}
                  open={serviceIsOpen}
                  onToggle={() => setServiceIsOpen(!serviceIsOpen)}
                  selectedValue={TYPE_SERVICE.find((type) => type.id === 1)}
                />
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="">Select Service</label>
              <div className="">
                <BarberSelector
                  id={"service_selector"}
                  ref={barberRef}
                  open={barberIsOpen}
                  onToggle={() => setBarberIsOpen(!barberIsOpen)}
                  selectedValue={BARBER_DATA.find((type) => type.id === 1)}
                />
              </div>
            </div>
            <div className="w-full relative my-4">
              <DatePicker
                getSelectedDay={selectedDay}
                selectDate={new Date()}
                labelFormat={"MMMM"}
                color=""
              />
              <div className="w-full flex flex-row overflow-auto mt-4">
                {QUEUE_TIME.map((time) => {
                  return (
                    <button className="mx-0.4 p-2 border border-gray-400 rounded">
                      {tConvert(time.time)}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="">Select Service</label>
              <div className="">
                <PaymentSelector
                  id={"service_selector"}
                  ref={paymentRef}
                  open={paymentIsOpen}
                  onToggle={() => setPaymentIsOpen(!paymentIsOpen)}
                  selectedValue={TYPE_PAYMENT.find((type) => type.id === 1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 py-4 bg-stone-800 text-white fixed bottom-0 z-10">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-2xl font-medium m-0">Rp. 150.000</h2>
          <button onClick={() => navigate('/app/booking/1/payment')} className="px-6 py-3 rounded-full bg-stone-200 text-stone-900">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
