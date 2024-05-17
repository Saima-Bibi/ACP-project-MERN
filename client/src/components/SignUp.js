import React from 'react'
import { useForm} from "react-hook-form"    
import { Link } from 'react-router-dom'
import Login from './Login'

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
      
     < div id="my_modal_4" className="">
  <div className="model-box">
    <form method="div">
      {/* if there is a button in form, it will close the modal */}
      
      <Link to='/' className="btn btn-sm btn-circle btn-ghost text-slate-600 absolute right-2 top-2">✕</Link>
    </form>
    <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-12 mt-16 ">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className=" text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Creat your account</h2>
  </div>

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" action="#" method="POST">
    <div>
        <label htmlFor="name" className="block text-sm  text-start font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="text"  
           {...register("name", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
         {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>
     
      <div>
        <label htmlFor="email" className="block text-sm text-start  font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email1" name="email" type="email"  
              {...register("email", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm text-start  font-medium leading-6 text-gray-900">Password</label>
        <div className="mt-2">
          <input id="password1" name="password" type="password"  
              {...register("password", { required: true })} 
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        </div>
      </div>

      <div>
        <button type="submit" className="mt-6 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Sign up</button>
      </div>
    </form>

    <div className="mt-6 text-center text-sm text-gray-500">
      Already have account?
     
      <button className="font-semibold leading-6 text-sky-500 hover:text-sky-600"
       onClick={()=>{document.getElementById('my_modal_3').showModal()}}
      > 
      Sign in</button>
      <Login></Login>
     
    </div>
  </div>
</div>
  </div>
</div>

    </>
  )
}
