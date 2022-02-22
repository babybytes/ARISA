import React from 'react';



const Project1 = () => (
	<div className="w-full h-full text-white">
		<div>
            <div className="w-full h-full flex  flex-col items-center pt-[7%] space-y-5 ">
                <div className="text-neutral-400 font-Roboto tracking-[0.2rem] text-sm">
                    Portfolio Website
                </div>
                <div className="text-8xl w-[60%] text-center  italic font-bold font-Poppins">
                    Self-introduction and guinea pig
                </div>
                <div className="pt-[7%] ">
                    <img src="/images/image.png" />
                </div>
            </div>
        </div>
        <div className="flex pt-[15%]  w-full justify-center space-x-[35%] ">
            <div className="text-6xl font-Poppins font-semibold"> 
                Summary
            </div>
            <div className="w-[32%]  font-Roboto text-neutral-400 leading-loose">
                <p className="w-[85%]">
                    I created this portfolio as my self-introduction in order to connect with global leaders and talents. In this project I do everything from making contents to coding my design. This is also to experiment new design and technologies.
                </p>
                <p className="w-[85%]">
                    I have created a portfolio before (ARIFOLIO ver1), however, its loose repetition was collapsing the hierarchy. To solve this issue, i clarified the information architecture by following rules strictly.
                </p>
            </div>  
        </div>    
            <div className="flex justify-around w-full pt-[10%]">
                <div className="flex flex-col">
                    <div>
                        <div className="font-Poppins text-4xl font-semibold tracking-wide">
                            My Role
                        </div>
                        <ul className="pt-5 space-y-3 text-neutral-500 font-Roboto">
                            <li>
                                Information Architecture
                            </li>
                            <li>
                                Branding
                            </li>
                            <li>
                                Web design
                            </li>
                            <li>
                                Coding
                            </li>
                        </ul>
                    </div>
                   <div className="pt-10 ">
                        <div className="font-Poppins text-4xl font-semibold tracking-wider">
                            Technology
                        </div>
                        <ul className="pt-5 space-y-3 text-neutral-500 font-Roboto">
                            <li>
                                Figma
                            </li>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                Next.js
                            </li>
                            <li>
                                Three.js
                            </li>
                        </ul>
                   </div>
                    
                </div>
                <div className="w-[40%] ">
                    <img src="/images/sub.png" />
                </div>
            </div>
            <div className="ml-[12.7%] font-Poppins text-4xl font-semibold tracking-wider pt-[5%]">
                Process
            </div>
                <div className="flex    pt-[5%]">
                    <div className="ml-[12.7%]">
                        <div className="font-Roboto ">
                            Research
                        </div>
                        <div className="font-Roboto ">
                            Research
                        </div>
                        <div className="font-Roboto ">
                            Research
                        </div>
                    </div>
                    <div className="ml-[20%]">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                            Scope
                        </div>
                        <div className="font-Roboto pt-5 w-[63%] text-neutral-500">
                            <p>
                                In order to approach global leaders adn talents, I avoided to make it only look good, but emphasized the logical process.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ml-[36.2%]">
                    <div className="pt-[15%]">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                             Identity
                        </div>
                        <div className="font-Roboto pt-5 w-[40%] text-neutral-500">
                            <p>
                                Black and minimalism are my identity as I only wear the same black outfit everyday. I made this identity from the keyword "Minimalism".
                            </p>
                        </div>
                    </div>
                    <div className="pt-[10%]">
                        <div className="font-Roboto   text-neutral-500">
                            Logo
                        </div>
                        <div className="pt-5 w-[40%]">
                            <img src="/images/1.svg" />
                        </div>
                    </div>
                    <div className="pt-[5%]">
                        <div className="font-Roboto   text-neutral-500">
                            Color
                        </div>
                        <div className="pt-5 w-[40%]">
                            <img src="/images/2.svg" />
                        </div>
                    </div>
                    <div className="pt-[5%]">
                        <div className="font-Roboto   text-neutral-500">
                            Typography
                        </div>
                        <div className="pt-5 w-[40%]">
                            <img src="/images/3.svg" />
                        </div>
                    </div>
                    <div className="pt-[10%]">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                            Communication
                        </div>
                        <div className="font-Roboto pt-5 w-[40%] text-neutral-500">
                            <p>
                                I prioritised usability by making link remarkable, use more images or icons with no much writing, Minimal design makes my words stand out, so tried my best to make it simple.
                            </p>
                        </div>
                    </div>
                    <div className="pt-[10%]">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                            Code
                        </div>
                        <div className="font-Roboto pt-5 w-[45%] text-neutral-500">
                            <p>
                                I designed in Figma, and coded all with HTML, CSS, JavaScript, and the static site generating framework HUGO.
                            </p>
                        </div>
                        <div className="font-Roboto pt-5 w-[45%] text-neutral-500">
                        <img src="/images/code.png" />
                        </div>
                    </div>
                </div>
    </div> 
  );
  
  export default Project1;