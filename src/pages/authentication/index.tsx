import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './Login';
import OTP from './OTP/OTP';
import Register from './Register';

export function AuthenticationRouter() {
  return (
    <Routes>
      <Route path="signin" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="OTP-confirmation" element={<OTP />} />
      <Route path="*" element={<Navigate to="/authentication/signin" replace />} />
    </Routes>
  )
}