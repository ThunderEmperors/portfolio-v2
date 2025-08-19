import React, {useEffect, useRef, useState} from 'react'
import {run} from './../components/3DNoiseBG/run.js'
import * as program from './../components/3DNoiseBG/program.js'

const About = () => {

  const targetRef = useRef(null);

  useEffect(() => {
    run(program, {
      element: document.querySelector('pre')
    }).then(function(e){
      console.log(e);
    })
    .catch(function(e){
      console.warn(e.message);
      console.log(e.error);
    })
  }, [])

  return (
    <div className="absolute w-[100vw] h-[100vh] inset-0px top-0px">
      <pre></pre>
    </div>
  )
}

export default About
