import React from 'react';



const Project3 = () => (
	<div className="w-full h-full text-white">
		<div>
			<div className="w-full h-full flex  flex-col items-center lg:pt-[7%] pt-[30%] md:pt-[15%] space-y-5">
				<div className="text-neutral-400 font-Roboto tracking-[0.2rem] lg:text-sm text-xs">
					Product Website
				</div>
				<div className="lg:text-8xl text-4xl lg:w-[60%] w-[95%] text-center  italic font-bold font-Poppins">
					Designed, coded, and deployed in 3 weeks
				</div>
				<div className="pt-[3%]   ">
					<img src="/images/thumbnail.png" />
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
					MiaHire is a video interview platform to reduce costs of hiring process. Since its website had to be launched quickly, I designed, coded, and deployed it in 3 weeks.
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
							Web design
						</li>
						<li>
							Coding
						</li>
					</ul>
				</div>
				<div className="pt-10 md:pt-0 ">
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
							Wordpress
						</li>
					</ul>
				</div>
				<div className=" pt-10 md:pt-0 ">
					<div className="font-Poppins text-4xl font-semibold tracking-wider">
						Client
					</div>
					<ul className="pt-5 space-y-3 text-neutral-500 font-Roboto">
						<li>
							MiaTech Inc.
						</li>
					</ul>
				</div>
			
			</div>
			<div className=" lg:w-[50%]  ">
				<div className="w-[100%] ">
					<img src="/images/third_page.png"  />
				</div>
				
			</div>
		</div>
            	<div className="lg:ml-[12.7%] font-Poppins md:text-4xl font-semibold tracking-wider  lg:pt-[5%]  md:pt-0 text-2xl ml-[35%]">
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
					Schedule
				</div>
				<div className="font-Roboto lg:pt-5 lg:w-[43%] md:w-[90%] text-neutral-500 pt-2">
					<p>
						My client delivered me a wireframe. I designed, coded, and deployed it in 3 weeks. To achieve it, I set schedule 2 weeks for design fix including review, and 1 week for coding and deployment.
					</p>
				</div>
				<div className="md:pt-10 pt-5 lg:w-[43%] w-[90%]">
					<img src="/images/p3a.png" />
				</div>
                    	</div>
                </div>
                <div className="lg:ml-[36.2%] ml-4 md:ml-[7.5%]">
			<div className="lg:pt-[15%] pt-[10%]">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Design
				</div>
				<div className="font-Roboto lg:pt-5 lg:w-[43%] md:w-[90%] text-neutral-500 pt-2">
					<p>
						I made it simple, friendly, and globally acceptable because it was going to be published in Japanese, English, and Vietnamese. Paid attention to observe the branding.
					</p>
				</div>
				<div className=" md:pt-10 pt-5 lg:w-[43%] w-[90%]">
					<img src="/images/p3b.png" />
				</div>
			</div>
			<div className="pt-[10%]">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Code
				</div>
				<div className="font-Roboto lg:pt-5 lg:w-[43%] md:w-[90%] text-neutral-500 pt-2">
					<p>
						I designed in Figma, and coded with HTML, CSS, JavaScript, and WordPress. Implemented 1 post type managed in CMS, and Contact form that send to email addresses of the company and applicants.
					</p>
				</div>
				<div className="md:pt-10 pt-5 lg:w-[43%] w-[90%]">
					<img src="/images/p3c.png" />
				</div>
			</div>
                </div>
   	</div> 
      
  );
  
  export default Project3;