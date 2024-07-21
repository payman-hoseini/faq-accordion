import { useState } from 'react';
import './App.css'

function App() {

  let [show , setshow] = useState(false);
  let [id , setId] = useState()
  const clickhandler = (num) =>{
    if(id == num){
      show ? setshow(false) : setshow(true);
    }
    else{
      setshow(true)
    }
    setId(num);
    console.log(show)
  }

  return (
    <>
      <div className='bg-Light-pink  flex flex-col items-center justify-center '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 320"><g clip-path="url(#a)"><path fill="#301534" d="M0 0h1440v320H0z"/><path stroke="#AD28EB" stroke-linecap="round" stroke-width="3" d="M-676-182C-454-10-396.863 71.888-197.5 143.5-99 178.882-36.919 170.726-4.751 170.108c104.487-2.01 204.609-43.237 298.633-85.495 38.354-17.238 75.882-36.189 112.063-57.63 23.903-14.165 58.87-33.913 64.721-64.42 2.32-12.102-16.369-12.24-23.771-9.789-13.511 4.474-25.95 16.544-36.056 25.669-19.131 17.273-37.062 35.948-53.235 56.031-33.728 41.883-68.034 100.247-34.158 152.014 17.287 26.415 43.94 45.693 72.112 59.127 56.182 26.791 119.205 38.742 180.778 44.146 164.438 14.432 328.964-3.461 483.004-63.622 79.76-31.148 158.55-70.539 224.23-126.245 48.56-41.186 102.8-96.548 110.66-162.9 10.93-92.187-94.04-136.062-169.29-148.418-61.41-10.084-123.75-4.164-184.07 9.588-78.262 17.84-149.006 47.67-214.241 94.384-130.002 93.093-234.95 228.413-272.466 385.827-15.64 65.625-16.648 138.21 5.493 202.551 21.452 62.338 69.196 110.576 124.048 144.923 65.117 40.774 137.161 62.14 212.839 73.21 100.474 14.696 202.817 12.233 303.027-2.997 176.17-26.772 352.73-88.431 505.18-181.077 103.22-62.725 199.3-134.15 280.06-224.425 17.7-19.793 31.81-40.875 43.74-64.521C2172.11-58.5 2095.5-145.528 2095.5-151"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h1440v320H0z"/></clipPath></defs></svg>
        <div className='bg-white max-w-2xl w-[90vw] -mt-12 md:-mt-36 rounded-2xl font-Work p-10 shadow-lg mb-64'>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41"><path fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"/></svg>
              <span className='md:text-5xl text-3xl font-bold ml-5'>FAQs</span>
            </div>
            <div className={`mt-8 pb-5 flex justify-between items-center hover:cursor-pointer text-Dark-purple hover:text-[#AD28EB] ${(show && id ==0) ? '' : 'border-b-2'}`} onClick={() =>{clickhandler(0)}}>
              <span className='md:font-bold md:text-base font-semibold text-sm'>What is Frontend Mentor, and how will it help me?</span>
              {(show && id ==0 ) ? <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
              </svg> : 
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
              </svg>}
            </div>
            {(show && id ==0 ) && <div className='mt-1 text-Grayish-purple border-b-2 pb-5'>
              Frontend Mentor offers realistic coding challenges to help developers improve their 
              frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
              all levels and ideal for portfolio building.
            </div>}
            <div>
              <ul>
                <li onClick={() =>{clickhandler(1)}} className={`text-Dark-purple flex py-5 justify-between  items-center hover:cursor-pointer hover:text-[#AD28EB] ${(show && id ==1 ) ? '' : 'border-b-2'}`}>
                  <span className='md:font-bold md:text-base font-semibold text-sm'>Is Frontend Mentor free?</span>
                  {(show && id ==1 ) ?  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
                    </svg>}
                </li>
                {(show && id ==1 ) && <div className='mt-1 text-Grayish-purple border-b-2 pb-5'>
                  Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
                  option providing access to a range of projects suitable for all skill levels.
                </div>}
                <li onClick={() =>{clickhandler(2)}} className={`text-Dark-purple flex py-5 justify-between  items-center hover:cursor-pointer hover:text-[#AD28EB] ${(show && id ==2 ) ? '' : 'border-b-2'}`}>
                  <span className='md:font-bold md:text-base font-semibold text-sm'>Can I use Frontend Mentor projects in my portfolio?</span>
                  {(show && id ==2 ) ?  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
                    </svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
                  </svg>}
                </li>
                {(show && id ==2 ) && <div className='mt-1 text-Grayish-purple border-b-2 pb-5'>
                  Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
                  way to showcase your skills to potential employers!
                </div>}
                <li onClick={() =>{clickhandler(3)}} className={`text-Dark-purple flex py-5 justify-between  items-center hover:cursor-pointer hover:text-[#AD28EB] ${(show && id ==3 ) ? '' : 'border-b-2'}`}>
                  <span className='md:font-bold md:text-base font-semibold text-sm'>How can I get help if I'm stuck on a Frontend Mentor challenge?</span>
                  {(show && id ==3 ) ?  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>
                    </svg>:
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31">
                    <path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>
                  </svg>}
                </li>
                {(show && id ==3 ) && <div className='mt-1 text-Grayish-purple border-b-2 pb-5'>
                  The best place to get help is inside Frontend Mentor's Discord community. There's a help 
                  channel where you can ask questions and seek support from other community members.
                </div>}
              </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
