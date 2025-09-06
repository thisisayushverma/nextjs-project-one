'use client'
import React, { useEffect, useState } from 'react'
import Card from '../../../component/Card.jsx';

function page() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSchools = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch('/api/school', {
                    method: 'GET'
                })
                const result = await res.json();
                console.log(result);
                if (result.success) {
                    setData(result.data);
                }
            }
            catch (error) {
                setError(error);
            }
            setLoading(false);
        }

        fetchSchools();
    }, [])

    console.log(data);
    return (
        <div className='w-full h-screen flex flex-col items-center justify gap-4 p-5'>
            <h1 className='text-2xl  font-semibold'>List of All Schools...</h1>
            {
                loading ? (
                    <h1>Loading...</h1>
                ) : (
                    <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4'>
                        {
                            error !== null ? (
                                <h1>{error}</h1>
                            ) : (
                                data.map((school) => {
                                    return <Card key={school.id} data={school}/>
                                })
                            )
                        }
                    </div>
                )
            }

        </div>
    )
}

export default page
