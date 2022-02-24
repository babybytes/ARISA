import React from 'react';



const Project1 = () => (
	<div className="w-full h-full text-white">
		<div>
            <div className="w-full h-full flex  flex-col items-center lg:pt-[7%] pt-[30%] md:pt-[15%] space-y-5 ">
                <div className="text-neutral-400 font-Roboto tracking-[0.2rem] lg:text-sm text-xs">
                    Portfolio Website
                </div>
                <div className="lg:text-8xl text-4xl lg:w-[60%] w-[95%] text-center  italic font-bold font-Poppins">
                    Self-introduction and guinea pig
                </div>
                <div className="pt-[7%] ">
                    <img src="/images/image.png" />
                </div>
            </div>
        </div>
        <div className="lg:flex  pt-[15%]  w-full lg:justify-center lg:space-x-[35%] space-x-[5%]">
            <div className="lg:text-6xl  text-4xl font-Poppins font-semibold md:ml-[5%] ml-4 lg:ml-0"> 
                Summary
            </div>
            <div className="lg:w-[32%] md:w-[90%]  font-Roboto text-neutral-400 leading-loose md:pt-5">
                <p className="lg:w-[85%] ">
                    I created this portfolio as my self-introduction in order to connect with global leaders and talents. In this project I do everything from making contents to coding my design. This is also to experiment new design and technologies.
                </p>
                <p className="lg:w-[85%] w-[98%]">
                    I have created a portfolio before (ARIFOLIO ver1), however, its loose repetition was collapsing the hierarchy. To solve this issue, i clarified the information architecture by following rules strictly.
                </p>
            </div>  
        </div>    
            <div className="lg:flex lg:justify-around w-full pt-[10%]">
                <div className="lg:flex lg:flex-col ml-4 lg:ml-0 md:flex md:flex-row md:justify-around ">
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
                   <div className="pt-10 md:pt-0">
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
                <div className="lg:w-[40%] ">
                    <img src="/images/sub.png" />
                </div>
            </div>
            <div className="lg:ml-[12.7%] font-Poppins md:text-4xl font-semibold tracking-wider pt-[5%] md:pt-0 text-2xl ml-[35%]">
                Process
            </div>
                <div className="lg:flex    lg:pt-[5%] ml-4 lg:ml-0">
                    <div className="lg:ml-[12.7%] lg:block hidden">
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
                    <div className="lg:ml-[20%] md:ml-[5%] pt-10 md:pt-0">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                            Scope
                        </div>
                        <div className="font-Roboto lg:pt-5 lg:w-[63%] md:w-[90%] text-neutral-500 pt-2">
                            <p>
                                In order to approach global leaders adn talents, I avoided to make it only look good, but emphasized the logical process.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:ml-[36.2%] ml-4 md:ml-[7.5%]">
                    <div className="lg:pt-[15%] pt-[10%] ">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                             Identity
                        </div>
                        <div className="font-Roboto lg:pt-5 lg:w-[40%] md:w-[90%] pt-2 text-neutral-500">
                            <p>
                                Black and minimalism are my identity as I only wear the same black outfit everyday. I made this identity from the keyword "Minimalism".
                            </p>
                        </div>
                    </div>
                    <div className="pt-[10%] ">
                        <div className="font-Roboto   text-neutral-500">
                            Logo
                        </div>
                        <div className="md:pt-5 pt-2 lg:w-[40%] w-[90%]">
                            <img src="/images/1.svg" />
                        </div>
                    </div>
                    <div className="pt-[5%]">
                        <div className="font-Roboto   text-neutral-500">
                            Color
                        </div>
                        <div className="md:pt-5 pt-2 w-[90%] lg:w-[40%]">
                            <img src="/images/2.svg" />
                        </div>
                    </div>
                    <div className="pt-[5%]">
                        <div className="font-Roboto   text-neutral-500">
                            Typography
                        </div>
                        <div className="md:pt-5 pt-2 w-[90%] lg:w-[40%]">
                            <img src="/images/3.svg" />
                        </div>
                    </div>
                    <div className="pt-[10%]">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                            Communication
                        </div>
                        <div className="font-Roboto md:pt-5 pt-2 lg:w-[40%] md:w-[90%] text-neutral-500">
                            <p>
                                I prioritised usability by making link remarkable, use more images or icons with no much writing, Minimal design makes my words stand out, so tried my best to make it simple.
                            </p>
                        </div>
                    </div>
                    <div className="pt-[10%]">
                        <div className="text-3xl font-Poppins font-light tracking-wide">
                            Code
                        </div>
                        <div className="font-Roboto md:pt-5 w-[90%] lg:w-[45%] md:w-[90%] text-neutral-500">
                            <p>
                                I designed in Figma, and coded all with HTML, CSS, JavaScript, and the static site generating framework HUGO.
                            </p>
                        </div>
                        <div className=" pt-5 lg:w-[45%] ">
                        <   img src="/images/code.png" />
                        </div>
                    </div>
                </div>
    </div> 
  );
  
  export default Project1;