import React from 'react'
import DrawRoundedIcon from '@mui/icons-material/DrawRounded';

const MainHeading = () => {
  return (
    <div className="w-full mb-4 text-pink-200 flex gap-1 items-center justify-center">
        <DrawRoundedIcon />
        <h1 className=" text-2xl w-full justify-center tracking-tight">
          Sketch Grind
        </h1>
        {/* <p className="text-pink-200">
          Become a better artist one day at a time
        </p> */}
      </div>
  )
}

export default MainHeading