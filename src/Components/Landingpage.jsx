import React, { useState, useEffect } from 'react'
import TextType from './Animations/TextType'
import { Typography } from '@mui/material'
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';

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
    }, []);

    return (
        <div className='bg-background text-foreground'>
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
                                stopCursor={visibleLines.includes(index + 1)} // Stop cursor when next line appears
                            />
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Landingpage