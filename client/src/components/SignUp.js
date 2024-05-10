import React from 'react'

export default function SignUp() {
  return (
    <>
      
     < dialog id="my_modal_4" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-12">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    
    <h2 className=" text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Creat your account</h2>
  </div>

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-4" action="#" method="POST">
    <div>
        <label htmlFor="name" className="block text-sm  text-start font-medium leading-6 text-gray-900">Name</label>
        <div className="mt-2">
          <input id="name" name="name" type="text"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
     
      <div>
        <label htmlFor="email" className="block text-sm text-start  font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email1" name="email" type="email"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          
        </div>
        <div className="mt-2">
          <input id="password1" name="password" type="password"  required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" className="mt-6 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p className="mt-6 text-center text-sm text-gray-500">
      Already have account?
      <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
      
      > Sign up</a>
      
    </p>
  </div>
</div>
  </div>
</dialog>

    </>
  )
}
