import React from 'react'
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className='pb-20 pt-12'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-31 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.01] bg-grid-black/[0.2] flex items-center justify-center relative">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className='flex justify-center realtive my-20 z-10'>
                    <div className='maax-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                            Creating dynamic web experiences with Next.js.
                        </h2>

                        <TextGenerateEffect
                            words='Nishant, a Full Stack Developer, who loves to build web applications with Next.js'
                            className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        />

                        <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                            Hi, I&apos;m Nishant, a Full Stack Developer passionate about building fast, responsive, and accessible web applications with Next.js. I have experience with React, Node.js, Express.js, MongoDB, and more. Always eager to learn and grow—let&apos;s build something amazing together!
                        </p>

                        <a href="#projects">
                            <MagicButton
                                title='Show my work'
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
