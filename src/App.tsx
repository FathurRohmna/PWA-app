import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { user } from './store/authentication/selector';

import { ProtectedRoute } from "./components/PrivateRouter";
import { AuthenticationRouter } from "./pages/authentication";
import { BarberRouter } from "./pages/barber";
import BarberShopRouter from "./pages/barber-shop";
import { BookingRouter } from "./pages/booking";

export function BarberShopApplication() {
  const isBarber = true

  return (
    <Routes>
      <Route
        path="barber-shop/*"
        element={
          <ProtectedRoute isAllowance={true} redirectPath="/app/barber">
            <BarberShopRouter />
          </ProtectedRoute>
        }
      />
      <Route
        path="barber/*"
        element={
          <ProtectedRoute isAllowance={isBarber} redirectPath="/app/barber-shop">
            <BarberRouter />
          </ProtectedRoute>
        }
      />
      <Route
        path="booking/*"
        element={
          <ProtectedRoute isAllowance={true} redirectPath="/app/barber">
            <BookingRouter />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/app/barber-shop" replace />} />
    </Routes>
  );
}

function App({ user }) {
  const isAllowance = user.access_token

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="authentication/*"
          element={
            <ProtectedRoute isAllowance={!isAllowance} redirectPath="/app">
              <AuthenticationRouter />
            </ProtectedRoute>
          }
        />
        <Route
          path="app/*"
          element={
            <ProtectedRoute isAllowance={isAllowance} redirectPath="/authentication">
              <BarberShopApplication />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/app" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  user: user(state)
})

const actions = {}

export default compose(
  connect(mapStateToProps, actions)
)(App)