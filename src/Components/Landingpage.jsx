import React, { useState, useEffect } from 'react'
import TextType from './Animations/TextType'
import { Typography } from '@mui/material'
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import '../Styles/Landingpage.css'

const Landingpage = () => {
  const texts = [
    "Scanning visitor device . . . ",
    "Checking threat level . . . ",
    "Risk: LOW",
    "Access granted. Welcome to the system."
  ];

  const typingSpeed = 75;
  const pauseDuration = 1500;

  const [visibleLines, setVisibleLines] = useState([0]);
  const [showDetails, setShowDetails] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    texts.forEach((text, index) => {
      if (index === 0) return;

      const delay = texts.slice(0, index).reduce((acc, txt) => {
        return acc + (txt.length * typingSpeed) + pauseDuration;
      }, 0);

      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, delay);
    });

    const totalAnimationTime = texts.reduce((acc, txt) => {
      return acc + (txt.length * typingSpeed) + pauseDuration;
    }, 0);

    setTimeout(() => {
      setShowTerminal(false);
    }, totalAnimationTime + 500);

    setTimeout(() => {
      setShowDetails(true);
    }, totalAnimationTime + 1000);
  }, []);

  return (
    <>
      {showTerminal && (
        <div className='bg-background text-foreground min-h-screen flex flex-col transition-opacity duration-500'>
          <div className='flex flex-row'>
            <PolicyOutlinedIcon style={{ fontSize: 80 }} className='text-primary mt-10' />
            <Typography variant='h2' className='font-bold text-5xl pt-10'>Security Clearance Required</Typography>
          </div>
          <div className='font-mono text-2xl pt-8 pl-22'>
            {texts.map((text, index) => (
              visibleLines.includes(index) && (
                <div key={index}>
                  <TextType
                    text={[text]}
                    typingSpeed={typingSpeed}
                    pauseDuration={pauseDuration}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                    loop={false}
                    initialDelay={0}
                    stopCursor={visibleLines.includes(index + 1)}
                  />
                </div>
              )
            ))}
          </div>
        </div>
      )}

      {showDetails && (
        <div className='min-h-screen bg-black text-green-400 font-mono p-8 animate-fade-in'>
          <div className='border-2 border-green-400 p-6 mb-8'>
            <div className='text-green-500 mb-2'>[SYSTEM ACCESS GRANTED]</div>
            <Typography variant='h2' className='font-bold text-5xl text-green-400 mb-2 font-mono'>
              &gt; GNANENDRA BOLLAM
            </Typography>
            <Typography variant='h5' className='text-xl text-green-300 font-mono'>
              [CYBERSECURITY ENGINEER | FULL STACK DEVELOPER]
            </Typography>
          </div>

          <div className='space-y-6'>
            <div>
              <div className='text-green-500 mb-2'>&gt; whoami</div>
              <p className='text-green-300 pl-4 text-lg'>
                Cybersecurity enthusiast and full-stack developer specializing in secure application development 
                and penetration testing. Building robust systems with security-first approach.
              </p>
            </div>

            <div>
              <div className='text-green-500 mb-2'>&gt; ls ./skills</div>
              <div className='pl-4 grid grid-cols-2 gap-2 text-green-300'>
                <div>→ Web Security</div>
                <div>→ React / Node.js</div>
                <div>→ Penetration Testing</div>
                <div>→ Cloud Security</div>
                <div>→ Python / JavaScript</div>
                <div>→ DevSecOps</div>
              </div>
            </div>

            <div>
              <div className='text-green-500 mb-2'>&gt; cat ./contact.txt</div>
              <div className='pl-4 text-green-300'>
                <div>📧 Email: your.email@example.com</div>
                <div>💼 LinkedIn: linkedin.com/in/yourprofile</div>
                <div>🐱 GitHub: github.com/yourhandle</div>
              </div>
            </div>

            <div className='flex items-center'>
              <span className='text-green-500'>&gt; </span>
              <span className='animate-pulse ml-2'>_</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Landingpage