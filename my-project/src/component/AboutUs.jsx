import React from 'react'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import { cyan } from '@mui/material/colors';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function AboutUs() {
  return (
        <div className='w-full flex justify-center items-center my-8 flex-col p-4 text-center py-14'>
            <div className='pb-6'>
                <h1 className='text-5xl font-poppins font-semibold'>Why People <span className='text-cyan-500'>Love</span> Us</h1>
            </div>

                <div className='grid md:grid-cols-3 gap-8 justify-items-center w-full pt-10'>
                    <div className='w-3/4 max-w-sm flex flex-col justify-center items-center gap-4'>
                        <DinnerDiningIcon sx={{ color: cyan[500], fontSize: 60 }} />
                        <h2 className='text-2xl font-poppins font-semibold'>Fresh Ingredients</h2>
                        <p className='text-base font-lato text-lg'>We prioritize quality by sourcing fresh, locally-sourced ingredients to ensure every dish bursts with flavor and nutrition.</p>
                    </div>

                    <div className='w-3/4 max-w-sm flex flex-col justify-center items-center gap-4'>
                        <LocalDiningIcon sx={{ color: cyan[500],fontSize: 60 }} />
                        <h2 className='text-2xl font-poppins font-semibold'>Experienced Chefs</h2>
                        <p className='text-base font-lato text-lg'>Our chefs bring years of expertise and a passion for creating delicious, beautifully presented meals.</p>
                    </div>

                    <div className='w-3/4 max-w-sm flex flex-col justify-center items-center gap-4'>
                        <StarBorderIcon sx={{ fontSize: 60,color: cyan[500] }} />
                        <h2 className='text-2xl font-poppins font-semibold'>Cozy Atmosphere</h2>
                        <p className='text-base font-lato text-lg'>Enjoy a warm, welcoming dining experience crafted for comfort and great conversation.</p>
                    </div>
                </div>

        </div>
    
   
  )
}

export default AboutUs