import React from 'react';



const Project6 = () => (
	<div className="w-full h-full text-white">
		<div>
			<div className="w-full h-full flex  flex-col items-center lg:pt-[7%] pt-[30%] md:pt-[15%] space-y-5">
				<div className="text-neutral-400 font-Roboto tracking-[0.2rem] lg:text-sm text-xs">
					Portfolio Website
				</div>
				<div className="lg:text-8xl text-4xl lg:w-[60%] w-[95%] text-center  italic font-bold font-Poppins">
					First portfolio to share works at intern
				</div>
				<div className="pt-[3%]  w-[70%] ">
					<img src="/images/image6.png" />
				</div>
			</div>
		</div>
		<div className="lg:flex  pt-[15%]  w-full lg:justify-center lg:space-x-[35%] space-x-[5%] ">
			<div>
				<div className="lg:text-6xl  text-4xl font-Poppins font-semibold md:ml-[5%] ml-4 lg:ml-0"> 
					Summary
				</div>
				<div className="pt-[10%] text-neutral-400 hidden lg:block">
					<button className="border flex rounded-full justify-center items-center w-full h-[3.5rem]">
						<span className="font-Roboto">
							Visit WebSite
						</span>
						<span className="ml-[5%]">
							<img src="/images/arrow2.png" />
						</span>
					</button>
				</div>
				
			</div>
			<div className="lg:w-[32%] md:w-[90%]  font-Roboto text-neutral-400 leading-loose md:pt-5 pt-2">
				<p className="lg:w-[85%]">
					This is my 1st portfolio to expand job opportunities and experiment animation with JavaScript.  Built by the static site generating framework HUGO. 
				</p>
			</div>  
		</div>    
		<div className="lg:flex lg:justify-around lg:items-start w-full pt-[10%]">
			<div className="lg:flex lg:flex-col ml-4  md:flex md:flex-row md:justify-around lg:w-[50%] lg:ml-[13%] lg:space-y-[10%]">
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
				<div className=" md:pt-0 pt-10">
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
							Javascript
						</li>
						<li>
							HUGO
						</li>
					</ul>
				</div>
			</div>
			<div className=" lg:w-[50%]  pt-5  ">
				<div className="w-[100%] ">
					<img src="/images/sixth_page.png" />
				</div>
				
			</div>
		</div>
            	<div className="lg:ml-[12.7%] font-Poppins md:text-4xl font-semibold tracking-wider  lg:pt-[5%]  pt-5 text-2xl ml-[35%]">
                	Process
            	</div>
                <div className="lg:flex    md:pt-[5%] ml-4 lg:ml-0">
			<div className="lg:ml-[12.7%] lg:block hidden">
				<div className="font-Roboto ">
					Schedule
				</div>
				<div className="font-Roboto ">
					Design
				</div>
				<div className="font-Roboto ">
					Code
				</div>
			</div>
                   	<div className="lg:ml-[20%] md:ml-[5%] pt-10 md:pt-0">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Scope
				</div>
				<div className="font-Roboto lg:pt-5 lg:w-[43%] md:w-[90%] text-neutral-500 pt-2">
					<p>
						It is designed for my works to be conspicuous because they tell the improvement of my skill. It is important for me who has no much background or degree, and also, to prioritize what a website can convey but document cannot.
					</p>
					<p>
						Today motion and interactivity are essential to improve usability, so I experimented a lot to incorporate them with learning. It is a slide show to emphasize each project.
					</p>
				</div>
				<div className=" md:pt-10 pt-5 lg:w-[43%] w-[90%]">
					<img src="/images/p6a.png" />
				</div>
                    	</div>
                </div>
                <div className="lg:ml-[36.2%] ml-4 md:ml-[7.5%]">
			<div className="lg:pt-[15%] pt-[10%]">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Code
				</div>
				<div className="font-Roboto lg:pt-5 lg:w-[43%] md:w-[90%] text-neutral-500 pt-2">
					<p>
						I was struggling with the animation to make this slide show flow from right to left but solved it by laying the elements. Also, SVG images may have bugs during transition unless z-index is written. I learned a lot through the experiments. I am going to continue to take new learnings.
					</p>
				</div>
				<div className="pt-[5%] text-neutral-400 ml-[10%] hidden lg:block">
					<button className="border flex rounded-full justify-center items-center w-[20%] h-[3rem]">
						<span className="font-Roboto">
							See Source Code
						</span>
						<span className="ml-[5%]">
							<img src="/images/arrow2.png" />
						</span>
					</button>
				</div>
			</div>		
                </div>
   	</div>
);
  
export default Project6;