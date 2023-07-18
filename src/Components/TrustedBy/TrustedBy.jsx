import React from 'react'
import fab from "../../Assets/t1.png"
import net from "../../Assets/t2.png"
import gog from "../../Assets/t3.png"

const TrustedBy = () => {
    return (
        <div className="TrustedBy w-[100%]  ">
            <div className="container flex justify-center">
                <img className=' h-8 w-28' src={net} />
                <img className=' h-8 w-28' src={fab} />
                <img className=' h-8 w-28' src={gog} />
                <img className=' h-8 w-28' src={fab} />
            </div>
        </div>
    )
}

export default TrustedBy