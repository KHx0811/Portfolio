import { Typography } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <>
        <div className='min-h-screen bg-black text-cyan-300 font-mono p-8 animate-fade-in'>
          <div className='border-2 border-cyan-400 p-6 mb-8 bg-gradient-to-r from-cyan-950/30 to-purple-950/30'>
            <div className='text-green-400 mb-2 flex items-center gap-2'>
              <span className='text-2xl'>✓</span>
              [SYSTEM ACCESS GRANTED]
            </div>
            <Typography variant='h2' className='font-bold text-5xl text-cyan-300 mb-2 font-mono'>
              &gt; GNANENDRA BOLLAM
            </Typography>
            <Typography variant='h5' className='text-xl text-purple-300 font-mono'>
              [CYBERSECURITY ENGINEER | FULL STACK DEVELOPER]
            </Typography>
          </div>

          <div className='space-y-6'>
            <div className='border-l-4 border-blue-500 pl-4'>
              <div className='text-blue-400 mb-2 font-bold'>&gt; whoami</div>
              <p className='text-cyan-200 pl-4 text-lg'>
                Cybersecurity enthusiast and full-stack developer specializing in secure application development
                and penetration testing. Building robust systems with security-first approach.
              </p>
            </div>

            <div className='border-l-4 border-purple-500 pl-4'>
              <div className='text-purple-400 mb-2 font-bold'>&gt; ls ./skills</div>
              <div className='pl-4 grid grid-cols-2 gap-2 text-cyan-200'>
                <div className='text-green-400'>→ Web Security</div>
                <div className='text-blue-400'>→ React / Node.js</div>
                <div className='text-purple-400'>→ Penetration Testing</div>
                <div className='text-orange-400'>→ Cloud Security</div>
                <div className='text-cyan-400'>→ Python / JavaScript</div>
                <div className='text-pink-400'>→ DevSecOps</div>
              </div>
            </div>

            <div className='border-l-4 border-orange-500 pl-4'>
              <div className='text-orange-400 mb-2 font-bold'>&gt; cat ./contact.txt</div>
              <div className='pl-4 text-cyan-200'>
                <div className='text-yellow-400'>📧 Email: your.email@example.com</div>
                <div className='text-blue-400'>💼 LinkedIn: linkedin.com/in/yourprofile</div>
                <div className='text-purple-400'>🐱 GitHub: github.com/yourhandle</div>
              </div>
            </div>

            <div className='flex items-center'>
              <span className='text-cyan-400'>&gt; </span>
              <span className='animate-pulse ml-2 text-cyan-300'>_</span>
            </div>
          </div>
        </div>
    </>
  )
}

export default Profile