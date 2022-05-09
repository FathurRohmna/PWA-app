import { useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required().required().email(),
  password: yup.string().required(),
});

const Login = ({ isLoading, isLoaded, user, errors: authError, submitAuthentication, userLogin }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate()

  useEffect(() => {
    userLogin()
  }, [])

  useEffect(() => {
    if (user) {
      navigate('/authentication/OTP-confirmation')
    }
  }, [user])

  const onSubmit = (values) => {
    submitAuthentication(values);
  };

  return (
    <div className="relative w-full min-h-screen">
      <div className="max-w-md px-2 md:px-4 py-8 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl md:mx-auto px-4 md:px-12 md:text-center rounded-2xl my-6">
            <h1 className="text-lg font-bold mb-4">Barber Authentication</h1>
            {authError && <span className="text-red p-4 border border-red-600 w-full block text-red-600 text-center mt-4">{authError}</span>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-8 block text-left">
                <div className="my-4">
                  <label className="font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="px-4 my-2 py-3 block w-full border border-gray-800 rounded"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    {...register('email')}
                  />
                </div>
                <div className="my-4 text-left">
                  <label className="font-semibold" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="px-4 my-2 py-3 block w-full border border-gray-800 rounded"
                    id="password"
                    type="password"
                    placeholder="*******"
                    {...register('password')}
                  />
                </div>
              </div>
              <div className="my-8 text-center block">
                <button type="submit" className="px-8 py-3 block bg-gray-600 text-gray-200 w-full rounded">
                  Masuk
                </button>
              </div>
            </form>
            <p>
              Belum punya akun ?{" "}
              <Link
                className="text-graty-900 font-bold underline"
                to="/authentication/register"
              >
                Daftar
              </Link>
            </p>
          </div>

          <Link to="/authentication/OTP-confirmation">OTP</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
