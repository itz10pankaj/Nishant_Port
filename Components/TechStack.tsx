"use client"
import React from 'react'
import { techStack } from '@/data';

const TechStack = () => {
    const handleClick = (link: string) => () => {
        window.open(link, '_blank');
    };

    return (
        <div className='w-full h-full'>
            <h1 className='heading'>
                My {' '}
                <span className='text-purple'>Tech Stack</span>
            </h1>
            <div className='mt-12 grid lg:grid-cols-10 grid-cols-2 gap-10 my-10'>
                {techStack.map((tech) => (
                    <div className="w-[9rem] h-[9rem] object-contain overflow-x-hidden lg:dark:bg-black-200 lg:border lg:border-black-300 flex justify-center items-center rounded-full hover:cursor-pointer"
                        onClick={handleClick(tech.link)}
                        key={tech.id}
                    >
                        <img
                            src={tech.img}
                            alt={tech.title}
                            width={60}
                            height={60}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechStack;