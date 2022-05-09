import { useEffect } from 'react';

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { NavigasiHeader } from "../../../components/NavigasiHeader";

const registerSchema = yup.object().shape({
  phoneNumber: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  name: yup.string().required(),
});

const Register = ({ isLoading, isLoaded, user, errors: authError, submitAuthentication, userLogin }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });
  const navigate = useNavigate()

  useEffect(() => {
    userLogin()
  }, [])

  useEffect(() => {
    if (user.authenticated) {
      navigate('/app')
    }
  }, [user])

  const onSubmit = (values) => {
    submitAuthentication(values);
  };

  return (
    <>
      <NavigasiHeader title="Register" />
      <div className="max-w-md px-2 md:py-10 md:px-4 mx-auto text-gray-500">
        <div className="w-full relative md:items-center">
          <div className="relative max-w-xl md:mx-auto px-4 md:px-12 md:text-center rounded-2xl my-6">
            {authError && <span className="text-red p-4 border border-red-600 w-full block text-red-600 text-center mt-4">{authError}</span>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-8 block">
                <div className="my-2">
                  <label className="font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="px-4 my-2 py-3 block w-full border border-gray-800 rounded"
                    id="name"
                    type="string"
                    placeholder="Joe fullname"
                    {...register('name')}
                  />
                </div>
                <div className="my-2">
                  <label className="font-semibold" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    className="px-4 my-2 py-3 block w-full border border-gray-800 rounded"
                    id="phone"
                    type="string"
                    placeholder="+62 8723487232"
                    {...register('phoneNumber')}
                  />
                </div>
                <div className="my-2">
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
                <div className="my-2">
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
                <div className="my-8 text-center block">
                  <button type="submit" className="px-8 py-3 block bg-gray-600 text-gray-200 w-full rounded">
                    Daftar
                  </button>
                </div>
              </div>
            </form>
            <p>
              Sudah punya akun ?{" "}
              <Link
                className="text-graty-900 font-bold underline"
                to="/authentication/signin"
              >
                Masuk
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
