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
            <div>
                <div>
                    Process
                </div>
                <div className="flex">
                    <div>
                        Research
                    </div>
                    <div>
                        Scope
                    </div>
                </div>
            </div>
       
      </div>
      
  );
  
  export default Project1;