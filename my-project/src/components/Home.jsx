import React, {useState} from 'react'
import '../App.css'
import star from "../images/icon-star.svg"
import minus from "../images/icon-minus.svg"
import plus from "../images/icon-plus.svg"
export default function Home() {
  const [show, setShow] = useState(true);
  return (
    <div className='flex flex-col p-4'>
    <header className=''>
    </header>
  <div className='flex flex-col relative shadow-md w-1/3 p-6 rounded-md mx-auto -mt-20 bg-white space-y-4'>
   <div className='flex flex-row'>
    <img src={star} alt='star' />
    <h1 className='text-darkPurple text-4xl font-bold'>FAQs</h1>
   </div>
   <div className='flex flex-row items-center space-x-4'>
   <h2 className='font-bold text-darkPurple'>What is Frontend Mentor, and how will it help me?</h2>
   <img src={minus} alt='minus' />
  </div>
  <p className='text-grayishPurple'> Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
  all levels and ideal for portfolio building.</p>
    <div className='flex flex-row items-center space-x-6'>
   <h2 className='font-bold text-darkPurple'>Is Frontend Mentor free?</h2>
   
  <img src={plus} alt='minus' onClick={()=>setShow(true)} />
   <img src={minus} alt='minus' onClick={()=>setShow(false)} />
   
  </div>
    { show ? <p className='text-grayishPurple'>  Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
</p> : null }
    <div className='flex flex-row items-center space-x-4'>
   <h2 className='font-bold text-darkPurple'>Can i use Frontend Mentor projects in my portfolio?</h2>
   <img src={plus} alt='minus' onClick={()=>setShow(true)} />
  </div>
  {
   show? <span className='text-grayishPurple'>  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
  way to showcase your skills to potential employers!</span>: null
  }
    <div className='flex flex-row items-center space-x-14'>
   <h2 className='font-bold text-darkPurple'>How can i get help if i'm stuck on a challenge?</h2>
   <img src={plus} alt='minus' onClick={()=>setShow(true)} />
  </div>
    {show?<p className='text-grayishPurple'> The best place to get help is inside Frontend Mentor's Discord community. There's a help 
  channel where you can ask questions and seek support from other community members.</p>:null
  }
  </div>
  
    
   
    </div>
  )
}
