import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

import img1 from "./img/smile1.jpg"
import img2 from "./img/smile2.jpg"
import img3 from "./img/smile3.jpg"
import img4 from "./img/smile4.jpg"
import img5 from "./img/smile5.jpg"
import img6 from "./img/smile6.jpg"

function Gallery() {
    let data = [
        {
            id:1,
            imgSrc: img1,  
        },
        {
            id:2,
            imgSrc: img2,  
        },
        {
            id:3,
            imgSrc: img3,  
        },
        {
            id:4,
            imgSrc: img4,  
        },
        {
            id:5,
            imgSrc: img5,  
        },
        {
            id:6,
            imgSrc: img6,  
        },
    ]

    const [model, setModel] = useState(false)
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc)=>{
        setTempImgSrc(imgSrc)
        setModel(true)
    }

  return (
    <>
    <div className={model? "model open": "model"}>
        <img src={tempImgSrc} alt=''/>
        <CloseIcon onClick={()=>setModel(false)} />
    </div>
    <div className="gallery">
        {data.map((item, index)=>(
            <div 
            className='pics' 
            key={index}
            onClick={()=>getImg(item.imgSrc)}
            >
                <img 
                    src={item.imgSrc} 
                    alt=""
                    style={{width: "100%"}}
                />
            </div>
        ))}
    </div>
    </>
  )
}

export default Gallery