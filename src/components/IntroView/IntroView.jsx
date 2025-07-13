import React, { useEffect, useState } from 'react'
import './IntroView.css'
import github from '../../assets/Logo/github.png'
import linkedin from '../../assets/Logo/linkedin.png'
import background from '../../assets/Background/IntroViewBackground.jpg'

const IntroView = () => {
    const texts = ["Build Logic", "And Implement"];
    const speed = 150;
    const pause = 1000;

    const [displayed, setDisplayed] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
    const [charIdx, setCharIdx] = useState(0);


    useEffect(() => {
        const current = texts[wordIdx];
        const delay = charIdx < current.length ? speed : pause;

        const id = setTimeout(() => {
            if (charIdx < current.length) {
                setDisplayed(prev => prev + current[charIdx]);
                setCharIdx(prev => prev + 1);
            }else{
                setDisplayed('');
                setCharIdx(0);
                setWordIdx(prev => (prev + 1)%texts.length);
            }
        }, delay);
        return () => clearTimeout(id);
    }, [charIdx, wordIdx]);
    return (
        <div 
        className='intro-view h-[90vh] bg-cover bg-center'
        >
            <div className="top h-9/10 flex items-center justify-left relative -top-7">
                <div className='grid gap-3'>
                    <div className='text-5xl font-bold'>Love to</div>
                    <div className='text-5xl font-bold min-h-18'>
                        {displayed}
                    </div>
                    <div className="text-2xl">I am Rohan, a back-end enthusiast <br />where I love to brainstorm simple to a bit complex logic and implement it.</div>
                </div>
            </div>
            <div className="down flex justify-end gap-8 relative -top-10">
                <a href="https://www.linkedin.com/in/rohan-dhungana-ba5884264/"><img src={linkedin} alt="" className='linkedin' /></a>
                <a href="https://github.com/Rohan-Dh"><img src={github} alt="" className='github' /></a>
            </div>
        </div>
    )
}

export default IntroView