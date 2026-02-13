import React, { useState, useEffect } from 'react'
import TextType from './Animations/TextType'
import PixelBlast from './Animations/PixelBlast';
import FuzzyText from './Animations/FuzzyText';
import { Typography } from '@mui/material'
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import '../Styles/Landingpage.css'
import { LiveClock } from './Animations/LiveClock';

const Landingpage = () => {
  const texts = [
    "Scanning visitor device . . . ",
    "Checking threat level . . . ",
    "Risk: LOW",
    "Access granted."
  ];

  const typingSpeed = 75;
  const pauseDuration = 1500;

  const [visibleLines, setVisibleLines] = useState([0]);
  const [showDetails, setShowDetails] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

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
      setShowWelcome(true);
    }, totalAnimationTime + 500);

    setTimeout(() => {
      setShowWelcome(false);
      setShowDetails(true);
    }, totalAnimationTime + 2500);
  }, []);

  return (
    <>
      {showTerminal && (
        <div className='relative min-h-screen flex flex-col transition-opacity duration-500 overflow-hidden bg-black'>
          <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="square"
              pixelSize={3}
              color="#00FF41"
              patternScale={2}
              patternDensity={1.2}
              liquid={true}
              liquidStrength={0.15}
              liquidRadius={1.5}
              enableRipples={true}
              rippleIntensityScale={1.5}
              rippleSpeed={0.4}
              liquidWobbleSpeed={3}
              speed={0.5}
              transparent={false}
              edgeFade={0.3}
              noiseAmount={0.1}
            />
          </div>

          <div className='relative z-10 min-h-screen flex flex-col justify-center items-start px-12' style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
            <div className='flex flex-row items-center gap-4 mb-12 animate-fade-in-down'>
              <div className='animate-spin-slow'>
                <PolicyOutlinedIcon
                  style={{ fontSize: 70 }}
                  className='text-green-400 drop-shadow-[0_0_15px_rgba(0,255,65,0.5)]'
                />
              </div>
              <div>
                <Typography
                  variant='h2'
                  className='font-mono text-green-400 text-4xl font-bold tracking-wider'
                  style={{
                    textShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                    letterSpacing: '0.1em'
                  }}
                >
                  [ SECURITY CLEARANCE REQUIRED ]
                </Typography>
                <div className='text-green-500 text-sm font-mono mt-1 opacity-75'>
                  System Access Control v3.7.3
                </div>
              </div>
            </div>

            <div className='font-mono text-green-300 space-y-3 max-w-3xl'>
              {texts.map((text, index) => (
                visibleLines.includes(index) && (
                  <div
                    key={index}
                    className='flex items-start gap-3 animate-slide-in-left'
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className='text-green-500 text-xl select-none'>&gt;</span>
                    <div className='flex-1'>
                      <TextType
                        text={[text]}
                        typingSpeed={50}
                        pauseDuration={pauseDuration}
                        showCursor
                        cursorCharacter="▊"
                        deletingSpeed={50}
                        loop={false}
                        initialDelay={0}
                        stopCursor={visibleLines.includes(index + 1)}
                        className='text-xl'
                        style={{
                          textShadow: '0 0 5px rgba(0, 255, 65, 0.3)',
                          color: index === 2 ? '#00FF41' : '#00D936',
                          fontWeight: index === 2 ? 'bold' : 'normal',
                          fontSize: index === 3 ? '1.5rem' : '1.25rem'
                        }}
                      />
                    </div>
                  </div>
                )
              ))}
            </div>

            <div className='absolute bottom-8 left-12 right-12 border-t border-green-800 pt-4'>
              <div className='flex justify-between items-center font-mono text-xs text-green-600'>
                <div className='flex gap-6'>
                  <span>◉ CONNECTED</span>
                  <span>▣ PORT: 8811</span>
                  <span>⚡ SECURE</span>
                </div>
                <LiveClock />
              </div>
            </div>
          </div>
        </div>
      )}

      {showWelcome && (
        <div className='min-h-screen bg-black flex items-center justify-center animate-fade-in'>
          <FuzzyText
            fontSize="6rem"
            fontWeight={700}
            color="#00FF41"
            baseIntensity={0.3}
            fuzzRange={40}
            className="font-mono"
            letterSpacing={5}
            glitchMode={true}
            glitchInterval={500}
            glitchDuration={100}
          >
            Welcome to the system.
          </FuzzyText>
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