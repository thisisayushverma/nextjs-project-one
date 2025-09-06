'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

function page() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleOnSubmit = async (data) => {
        try {
            console.log("error",errors);
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('address', data.address);
            formData.append('city', data.city);
            formData.append('state', data.state);
            formData.append('contact', data.contact);
            formData.append('image', data.image[0]);
            formData.append('email_id', data.email_id);
            const res = await fetch('/api/add-school', {
                method:'POST',
                body:formData
            })
            const result = await res.json()
            console.log(result);
            alert(result.message)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify gap-4 p-5'>
            <h1 className='text-2xl  font-semibold'>Add School Info...</h1>
            <form className='w-[80%] sm:w-[60%]  flex flex-col gap-3 ' onSubmit={handleSubmit(handleOnSubmit)}>
                <input className='w-full border rounded-md p-2' placeholder='School Name' {...register("name", {
                    required: {
                        value: true,
                        message: "Name is required"
                    }, maxLength: {
                        value: 50,
                        message: "Name must be at most 50 characters long"
                    },
                    minLength: {
                        value: 5,
                        message: "Name must be at least 5 characters long"
                    }
                })} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                <input className='w-full border rounded-md p-2' placeholder='School Address' {...register("address", {
                    required: {
                        value: true,
                        message: "Address is required"
                    }, maxLength: {
                        value: 100,
                        message: "Address must be at most 50 characters long"
                    },
                })} />
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}

                <input className=' border rounded-md p-2' placeholder='Enter City' {...register("city", {
                    required: {
                        value: true,
                        message: "City is required"
                    }, maxLength: {
                        value: 50,
                        message: "City must be at most 50 characters long"
                    },
                    minLength: {
                        value: 3,
                        message: "City must be at least 3 characters long"
                    }
                })} />
                {errors.city && <p className="text-red-500">{errors.city.message}</p>}

                <input className=' border rounded-md p-2' placeholder='Enter State' {...register("state", {
                    required: {
                        value: true,
                        message: "State is required"
                    }, maxLength: {
                        value: 50,
                        message: "State must be at most 50 characters long"
                    },
                    minLength: {
                        value: 5,
                        message: "State must be at least 5 characters long"
                    }
                })} />
                {errors.state && <p className="text-red-500">{errors.state.message}</p>}

                <input type='number'
                    className=' border rounded-md p-2'
                    placeholder='Enter Contact Number'
                    {...register("contact",
                        {
                            required: true,
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Contact number must be exactly 10 digits"
                            }
                        })}
                    maxLength={10}
                    inputMode="numeric"
                />
                {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}

                <input
                    type="file"
                    accept="image/*"
                    {...register("image", {
                        required: {
                            value: true,
                            message: "Image is required"
                        },
                        validate: {
                            fileType: (value) =>
                                value[0] && ["image/jpeg", "image/png"].includes(value[0]?.type)
                                    ? true
                                    : "Only JPG/PNG files are allowed",
                            fileSize: (value) =>
                                value[0] && value[0].size <= 1024 * 1024
                                    ? true
                                    : "File must be less than 1MB",
                        },
                    })}
                    placeholder='Upload Image less than 1MB'
                    className="p-2 border rounded-lg"
                />
                <input
                    type='email'
                    className='border rounded-md p-2'
                    placeholder='Enter Email Id'
                    {...register("email_id",
                        {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email format"
                            },
                        }
                    )}
                />
                {errors.email_id && <p className="text-red-500">{errors.email_id.message}</p>}

                <input type='submit' value='Submit' className='rounded-md p-2 cursor-pointer bg-gray-900' />
            </form>
        </div>
    )
}

export default page