import Link from 'next/link'
import React from 'react'


function About_Us() {
  return (
    <div>
      <h1>aboutus</h1>
      <ul>
      
        <li><Link href='aboutus/1'>yash</Link></li>
        
        <li><Link href='aboutus/2'>Vaibhav</Link></li>
        <li><Link href='aboutus/3'>Suresh</Link></li>
        
        </ul>
    </div>
  )
}

export default About_Us