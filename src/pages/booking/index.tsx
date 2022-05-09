import { Route, Routes } from "react-router-dom";
import BookNow from "./BookNow";
import Payment from "./Payment";
import CheckQueue from "./CheckQueue";

export function BookingRouter() {
  return (
    <Routes>
      <Route path="/" element={<BookNow />} />
      <Route path=":bookid/chek-queue" element={<CheckQueue />} />
      <Route path=":bookid/payment" element={<Payment />} />
    </Routes>
  )
}