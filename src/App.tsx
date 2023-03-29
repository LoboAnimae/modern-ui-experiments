import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import { gsap } from 'gsap'


const fadeInScreen = async (timeline?: gsap.core.Timeline) => {
  timeline ??= gsap.timeline()
  timeline.fromTo('.container', { background: 'white' }, {
    background: 'linear-gradient(325deg, rgba(0, 0, 0, 1) 0%, rgba(148, 148, 148, 1) 77%, rgba(255, 255, 255, 1) 100%)',
    duration: .5
  })
  timeline.fromTo('.screen-container', { opacity: 0 }, {
    opacity: 1,
    duration: 0.5,
  }, "+=1")

  timeline.to('.screen', {
    background: 'white',
    duration: .5
  }, '+=.5')

}

function App() {

  useLayoutEffect(() => {
    let ctx = gsap.context(async () => {
      const timeline = gsap.timeline()
      await fadeInScreen(timeline)

    })

    return () => ctx.revert()
  }, [])
  return (
    <div
      className='container'>
      {/*<div className='as-old-phone'>*/}
      {/*  <div id='screen'></div>*/}
      {/*</div>*/}
      <div className='screen-container'>
        <div className='screen'>
          <h1 className='title design-title'>Design is</h1>
          <h1 className='title convenience'>Convenience</h1>
        </div>
      </div>
    </div>
  )
}

export default App
