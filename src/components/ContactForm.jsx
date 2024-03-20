import React from 'react'

const ContactForm = ({info, setInfo, handleSubmit}) => {
  const handleChange = (e) => {
    // console.log(e.target)
    console.log(e.target.name)
    setInfo ({...info, [e.target.name]: e.target.value })
  }
  return (
    <form className='w-full lg:w-6/12 p-5 border border-gray-300 bg-white mx-auto bg-opacity-50 rounded-lg shadow-lg onSubmit={handleSubmit}'>
    <div className='grid gap-6 mb-6 md:grid-cols-2'>
      <div>
        <label 
        htmlFor="first_name"
        className='block mb-2 text-sm font-medium text-gray-900'
        >
        First name
        </label>
        <input 
          type="text" 
          id='first_name'
          name='firstName'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5'
          placeholder='Anthony'
          value = {info.firstName}
          onChange={handleChange}
          required

        />
      </div>

      <div>
      <label 
        htmlFor="last_name"
        className='block mb-2 text-sm font-medium text-gray-900'
        >
        Last name
        </label>
        <input 
          type="text" 
          id='last_name'
          name='lastName'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5'
          placeholder='Harold'
          value={info.lastName}
          onChange={handleChange}
          required

        />
      </div>

      <div>
        <label 
        htmlFor="email"
        className='block mb-2 text-sm font-medium text-gray-900'
        >
        E mail
        </label>
        <input 
          type="email" 
          id='email'
          name='email'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5'
          placeholder='example@gmail.com'
          value={info.email}
          onChange={handleChange}
          required

        />
      </div>

      <div>
        <label 
        htmlFor="department"
        className='block mb-2 text-sm font-medium text-gray-900'
        >
        Department
        </label>
        <input 
          type="text" 
          id='department'
          name='department'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5'
          placeholder='Web Development'
          value={info.department}
          onChange={handleChange}
          required

        />
      </div>

      <div>
        <label 
        htmlFor="phone"
        className='block mb-2 text-sm font-medium text-gray-900'
        >
        Phone number
        </label>
        <input 
          type="tel" 
          id='phone'
          name='phone'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5'
          placeholder='{+90 (555)-555-5555}'
          value={info.phone}
          onChange={handleChange}
          required

        />
      </div>

      <button
       type='submit'
       className='text-white bg-slate-300 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
        Save

      </button>
    

    </div>
    </form>
  )
}

export default ContactForm