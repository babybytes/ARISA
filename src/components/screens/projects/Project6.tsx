import React from 'react';



const Project6 = () => (
	<div className="w-full h-full text-white">
		<div>
			<div className="w-full h-full flex  flex-col items-center pt-[7%] space-y-5 ">
				<div className="text-neutral-400 font-Roboto tracking-[0.2rem] text-sm">
					Portfolio Website
				</div>
				<div className="text-8xl w-[65%] text-center  italic font-bold font-Poppins">
					First portfolio to share works at intern
				</div>
				<div className="pt-[3%]  w-[70%] ">
					<img src="/images/image6.png" />
				</div>
			</div>
		</div>
		<div className="flex pt-[15%]  w-full justify-around space-x-[5%] ">
			<div>
				<div className="text-6xl font-Poppins font-semibold"> 
					Summary
				</div>
				<div className="pt-[10%] text-neutral-400">
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
			<div className="w-[32%]  font-Roboto text-neutral-400 leading-loose">
				<p className="w-[85%]">
					This is my 1st portfolio to expand job opportunities and experiment animation with JavaScript.  Built by the static site generating framework HUGO. 
				</p>
			</div>  
		</div>    
		<div className="flex justify-around w-full pt-[15%]">
			<div className="flex flex-col w-full ml-[13%]">
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
				<div className="pt-[10%] ">
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
			<div className=" w-full  ">
				<div className="w-[100%] ">
					<img src="/images/sixth_page.png" />
				</div>
				
			</div>
		</div>
            	<div className="ml-[12.7%] font-Poppins text-4xl font-semibold tracking-wider pt-[5%]">
                	Process
            	</div>
                <div className="flex    pt-[5%]">
			<div className="ml-[12.7%]">
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
                   	<div className="ml-[20%]">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Scope
				</div>
				<div className="font-Roboto pt-5 w-[45%] text-neutral-500">
					<p>
						It is designed for my works to be conspicuous because they tell the improvement of my skill. It is important for me who has no much background or degree, and also, to prioritize what a website can convey but document cannot.
					</p>
					<p>
						Today motion and interactivity are essential to improve usability, so I experimented a lot to incorporate them with learning. It is a slide show to emphasize each project.
					</p>
				</div>
				<div className=" pt-10 w-[43%]">
					<img src="/images/p6a.png" />
				</div>
                    	</div>
                </div>
                <div className="ml-[36.2%]">
			<div className="pt-[10%]">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Code
				</div>
				<div className="font-Roboto pt-5 w-[42%] text-neutral-500">
					<p>
						I was struggling with the animation to make this slide show flow from right to left but solved it by laying the elements. Also, SVG images may have bugs during transition unless z-index is written. I learned a lot through the experiments. I am going to continue to take new learnings.
					</p>
				</div>
				<div className="pt-[5%] text-neutral-400 ml-[10%]">
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