'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/form/Button'
import { InputRow } from '@/components'

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    captchaResponse: ""
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <section className=" md:mt-4 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center ">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <InputRow
              id='email'
              name='email'
              type='email'
              labelText='email'
              placeholder='example@gmail.com'
              value={formValues.email}
              onChange={handleChange}
            />
            <InputRow
              id='password'
              name='password'
              type='password'
              labelText='password'
              placeholder='••••••••'
              value={formValues.password}
              onChange={handleChange}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-500 ">Remember me</label>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline ">Forgot password ?</a>
            </div>
            <Button
              text='Log In'
              className='text-lg w-full bg-blue-900 items-center'
              // loading={true}
            />
            <div className="text-sm font-light text-gray-900 ">
              Don’t have an account yet? <Link href="/register" className="font-medium text-blue-600 hover:underline ">Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default LoginForm