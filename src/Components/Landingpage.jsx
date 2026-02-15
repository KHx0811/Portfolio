import React, { useState, useEffect, useRef } from 'react'
import TextType from './Animations/TextType'
import PixelBlast from './Animations/PixelBlast';
import FuzzyText from './Animations/FuzzyText';
import { Typography } from '@mui/material'
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import SensorOccupiedOutlinedIcon from '@mui/icons-material/SensorOccupiedOutlined';
import '../Styles/Landingpage.css'
import { LiveClock } from './Animations/LiveClock';
import Profile from './Profile';


const Landingpage = () => {
  const texts = [
    "Scanning visitor device . . . ",
    "Checking threat level . . . ",
    "Risk: LOW",
    "Access granted."
  ];

  const typingSpeed = 35;
  const pauseDuration = 200;

  const [hasStarted, setHasStarted] = useState(false);
  const [visibleLines, setVisibleLines] = useState([0]);
  const [showDetails, setShowDetails] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  const typingSoundRef = useRef(null);
  const glitchSoundRef = useRef(null);

  const startExperience = () => {
    setHasStarted(true);
  };

  useEffect(() => {
    if (!hasStarted) return;

    typingSoundRef.current = new Audio('/sounds/typing.mp3');
    typingSoundRef.current.volume = 0.3;
    typingSoundRef.current.loop = true;

    glitchSoundRef.current = new Audio('/sounds/glitch.mp3');
    glitchSoundRef.current.volume = 0.5;

    typingSoundRef.current.play().catch(e => console.log('Audio play failed:', e));

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
      if (typingSoundRef.current) {
        typingSoundRef.current.pause();
        typingSoundRef.current.currentTime = 0;
      }

      setShowTerminal(false);
      setShowWelcome(true);

      if (glitchSoundRef.current) {
        glitchSoundRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
    }, totalAnimationTime + 300);

    setTimeout(() => {
      if (glitchSoundRef.current) {
        glitchSoundRef.current.pause();
        glitchSoundRef.current.currentTime = 0;
      }
      setShowWelcome(false);
      setShowDetails(true);
    }, totalAnimationTime + 1300);

    return () => {
      if (typingSoundRef.current) {
        typingSoundRef.current.pause();
        typingSoundRef.current = null;
      }
      if (glitchSoundRef.current) {
        glitchSoundRef.current.pause();
        glitchSoundRef.current = null;
      }
    };
  }, [hasStarted]);

  // Get color based on line type
  const getLineColor = (index) => {
    if (index === 0) return '#00D4FF'; // Cyan for scanning
    if (index === 1) return '#FFA500'; // Orange for checking
    if (index === 2) return '#00FF41'; // Green for low risk
    if (index === 3) return '#00BFFF'; // Blue for access granted
    return '#FFFFFF';
  };

  const getLinePrefix = (index) => {
    if (index === 0) return '🔍';
    if (index === 1) return '⚠️';
    if (index === 2) return '✓';
    if (index === 3) return '✅';
    return '>';
  };

  if (!hasStarted) {
    return (
      <div className='min-h-screen bg-black flex items-center justify-center'>
        <div className='text-center max-w-md'>
          <PolicyOutlinedIcon
            style={{ fontSize: 100 }}
            className='text-cyan-400 mb-6 animate-pulse'
          />
          <Typography
            variant='h3'
            className='font-mono text-cyan-400 mb-8 font-bold'
            style={{ textShadow: '0 0 10px rgba(0, 212, 255, 0.5)' }}
          >
            SYSTEM PORTAL
          </Typography>

          <div className='border-2 border-purple-500 p-6 mb-6 mt-4  bg-purple-950/30'>
            <Typography className='text-purple-300 font-mono text-sm mb-6'>
              HUMAN VERIFICATION REQUIRED
            </Typography>
            <button
              onClick={startExperience}
              className='w-full px-6 py-3 bg-transparent border-2 mt-4 border-purple-400 text-purple-300 font-mono text-lg font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-3'
              style={{
                textShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)'
              }}
            >
              <SensorOccupiedOutlinedIcon style={{ fontSize: 24 }} />
              <span>I'm not a robot</span>
            </button>
          </div>

          <div className='text-cyan-600 text-xs font-mono opacity-75'>
            Click to verify identity and initialize system
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {showTerminal && (
        <div className='relative min-h-screen flex flex-col transition-opacity duration-500 overflow-hidden bg-black'>
          <div className='absolute inset-0 z-0'>
            <PixelBlast
              variant="square"
              pixelSize={3}
              color="#00D4FF"
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
                  className='text-cyan-400 drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]'
                />
              </div>
              <div>
                <Typography
                  variant='h2'
                  className='font-mono text-cyan-400 text-4xl font-bold tracking-wider'
                  style={{
                    textShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
                    letterSpacing: '0.1em'
                  }}
                >
                  [ SECURITY CLEARANCE PROTOCOL ]
                </Typography>
                <div className='text-cyan-500 text-sm font-mono mt-1 opacity-75'>
                  System Access Control v3.7.3
                </div>
              </div>
            </div>

            <div className='font-mono space-y-3 max-w-3xl'>
              {texts.map((text, index) => (
                visibleLines.includes(index) && (
                  <div
                    key={index}
                    className='flex items-start gap-3 animate-slide-in-left'
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className='text-xl select-none' style={{ color: getLineColor(index) }}>
                      {getLinePrefix(index)}
                    </span>
                    <div className='flex-1'>
                      <TextType
                        text={[text]}
                        typingSpeed={30}
                        pauseDuration={pauseDuration}
                        showCursor
                        cursorCharacter="▊"
                        deletingSpeed={50}
                        loop={false}
                        initialDelay={0}
                        stopCursor={visibleLines.includes(index + 1)}
                        className='text-xl'
                        style={{
                          textShadow: `0 0 5px ${getLineColor(index)}50`,
                          color: getLineColor(index),
                          fontWeight: index === 2 || index === 3 ? 'bold' : 'normal',
                          fontSize: index === 3 ? '1.5rem' : '1.25rem'
                        }}
                      />
                    </div>
                  </div>
                )
              ))}
            </div>

            <div className='absolute bottom-8 left-12 right-12 border-t border-cyan-800 pt-4'>
              <div className='flex justify-between items-center font-mono text-xs text-cyan-600'>
                <div className='flex gap-6'>
                  <span className='text-green-400'>◉ CONNECTED</span>
                  <span className='text-blue-400'>▣ PORT: 8811</span>
                  <span className='text-purple-400'>⚡ SECURE</span>
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
            color="#00BFFF"
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
        <Profile />
      )}
    </>
  )
}

export default Landingpage