import React from 'react';



const Project3 = () => (
	<div className="w-full h-full text-white">
		<div>
			<div className="w-full h-full flex  flex-col items-center pt-[7%] space-y-5 ">
				<div className="text-neutral-400 font-Roboto tracking-[0.2rem] text-sm">
					Product Website
				</div>
				<div className="text-8xl w-[70%] text-center  italic font-bold font-Poppins">
					Designed, coded, and deployed in 3 weeks
				</div>
				<div className="pt-[3%]   ">
					<img src="/images/thumbnail.png" />
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
					MiaHire is a video interview platform to reduce costs of hiring process. Since its website had to be launched quickly, I designed, coded, and deployed it in 3 weeks.
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
							Web design
						</li>
						<li>
							Coding
						</li>
					</ul>
				</div>
				<div className="pt-[20%] ">
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
				<div className=" pt-[20%] ">
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
			<div className=" w-full  ">
				<div className="w-[100%] ">
					<img src="/images/third_page.png" />
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
					Schedule
				</div>
				<div className="font-Roboto pt-5 w-[42%] text-neutral-500">
					<p>
						My client delivered me a wireframe. I designed, coded, and deployed it in 3 weeks. To achieve it, I set schedule 2 weeks for design fix including review, and 1 week for coding and deployment.
					</p>
				</div>
				<div className=" pt-10 w-[43%]">
					<img src="/images/p3a.png" />
				</div>
                    	</div>
                </div>
                <div className="ml-[36.2%]">
			<div className="pt-[15%]">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Design
				</div>
				<div className="font-Roboto pt-5 w-[42%] text-neutral-500">
					<p>
						I made it simple, friendly, and globally acceptable because it was going to be published in Japanese, English, and Vietnamese. Paid attention to observe the branding.
					</p>
				</div>
				<div className=" pt-10 w-[43%]">
					<img src="/images/p3b.png" />
				</div>
			</div>
			<div className="pt-[10%]">
				<div className="text-3xl font-Poppins font-light tracking-wide">
					Code
				</div>
				<div className="font-Roboto pt-5 w-[42%] text-neutral-500">
					<p>
						I designed in Figma, and coded with HTML, CSS, JavaScript, and WordPress. Implemented 1 post type managed in CMS, and Contact form that send to email addresses of the company and applicants.
					</p>
				</div>
				<div className="font-Roboto pt-10 w-[45%] text-neutral-500">
					<img src="/images/p3c.png" />
				</div>
			</div>
                </div>
   	</div> 
      
  );
  
  export default Project3;