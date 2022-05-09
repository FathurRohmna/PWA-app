import { Route, Routes } from 'react-router-dom';
import AccountBarber from './Account/Accunt';
import HistoryBarber from './History/History';

export function BarberRouter() {
  return (
    <Routes>
      <Route path="/" element={<AccountBarber />} />
      <Route path="history" element={<HistoryBarber />} />
    </Routes>
  )
}
