import React from 'react'
/* react hook form */
import { useForm } from "react-hook-form";

function Contactus() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='flex h-screen items-center justify-center bg-gray-100'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-white p-8 rounded-lg shadow-lg w-[500px]'>

                    <h1 className="font-bold text-3xl">Contact Us</h1>
                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span>
                        <br />
                        <input
                            type='text'
                            placeholder='Enter your fullname'
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("name", { required: true })}
                        />
                    </div>

                    {/* Email */}
                    <div className='mt-6 space-y-2'>
                        <span>Email</span>
                        <br />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='w-80 px-3 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })}
                        />
                    </div>

                    {/* Textbox */}
                    <div className='mt-6 space-y-2'>
                        <span>Message </span>
                        <br />
                        <textarea
                            rows="4"
                            placeholder="Enter your message"
                            className='w-80 px-3 py-2 border rounded-md outline-none'
                            {...register("message", { required: true })}
                        />
                    </div>

                    {/* Button */}
                    <div className='mt-4'>
                        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                            submit
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Contactus
