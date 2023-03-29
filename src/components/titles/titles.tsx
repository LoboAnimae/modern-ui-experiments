import { gsap } from "gsap";
import React, { useLayoutEffect } from "react";

interface TitlesProps {
  timeline?: gsap.core.Timeline
}

export const Titles: React.FC<TitlesProps> = ({ timeline }) => {

  useLayoutEffect(() => {
    let ctx = gsap.context(async () => {
      timeline ??= gsap.timeline()
      timeline.fromTo('.design-title',
        { opacity: 0 },
        { opacity: 1 },
        '+=0.5'
      )
      timeline.to('.design-title', { translateY: '-40px', ease: 'power1.inOut' }, "=+1.5")
      timeline.to(".convenience", { ease: 'power1.in', bottom: '', opacity: 1 }, "<.125")

      timeline.to('.design-title', { translateY: '-350px', ease: 'power1.inOut' }, "+=1.5")
      timeline.to('.convenience', { translateY: '-310px', ease: 'power1.inOut' }, "<")
    })

    return () => ctx.revert()
  })
  return (
    <div className='title-container'>
      <h1 className='title design-title'>Design is</h1>
      <h1 className='title convenience'>Convenience</h1>
    </div>
  )
}