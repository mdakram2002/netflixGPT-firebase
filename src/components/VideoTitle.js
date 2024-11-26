import React from 'react'

const VideoTitle = ({title, overview}) => {
    return (
        <div className='flex flex-col justify-start w-screen aspect-video pt-48 px-24 absolute text-white  bg-gradient-to-r from-black'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='py-6 text-md w-1/3 '>{overview}</p>
            <div className='space-x-2'>
                <button className='bg-white text-black p-2 px-4  hover:text-white hover:bg-red-600 font-semibold transition duration-75 rounded-lg'> ▶️Play</button>
                <button className='bg-gray-300 text-black p-2 px-3 bg-opacity-40 hover:text-white hover:bg-red-600 font-semibold transition duration-75 rounded-lg'>❕More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;
