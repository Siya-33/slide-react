import React, { useEffect, useState } from 'react'
import { ReactCompareSlider, styleFitContainer } from 'react-compare-slider'

import video3 from '../assets/public/video3.mp4'
import video4 from '../assets/public/video4.mp4'

function Page2() {
  const [positionX, setPositionX] = useState(50)
  useEffect(() => {
    window.api.onMousePositionGet((_, PositionX) => {
      setPositionX(PositionX * 100)
    })
  }, [])
  return (
  <>
    <ReactCompareSlider
    changePositionOnHover
    position={positionX}
      itemOne={<video
        playsInline
        autoPlay
        muted
        loop
        style={{
          ...styleFitContainer({
            objectFit: 'cover',
            objectPosition: 'center',
          }),
        }}
        src={video3} alt="Image one" />}
      itemTwo={<video
        playsInline
        autoPlay
        muted
        loop
        style={{
          ...styleFitContainer({
            objectFit: 'cover',
            objectPosition: 'center',
          }),
        }}
        src={video4} alt="Image two" />}
    />
  </>

  )
}

export default Page2
