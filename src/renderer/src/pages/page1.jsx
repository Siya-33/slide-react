import React from 'react'
import { ReactCompareSlider, styleFitContainer } from 'react-compare-slider'
import video1 from '../assets/public/video1.mp4'
import video2 from '../assets/public/video2.mp4'

function Page1() {
  const handleMouseMove = (event) => {
    const mouseX = event.clientX
    const screenWidth = window.innerWidth
    const normalizedX = mouseX / screenWidth
    window.api.sendMousePosition(normalizedX)
  }
  return (
  <>
    <ReactCompareSlider
    changePositionOnHover
    onMouseMove={handleMouseMove}
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
        src={video1} alt="Image one" />}
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
        src={video2} alt="Image two" />}
    />
  </>

  )
}

export default Page1
