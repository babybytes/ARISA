import React from 'react';


const About = () => (
	<div className="w-full h-full">
			<div className=" flex pt-[10%] items-center ml-[10%] justify-content">
				<div className="flex flex-col">
					<div>
						<img src="/images/profile.png" className=" w-[90%]"/>
					</div>
					<div>
						<img src="/images/message.svg" />
					</div>
				</div>	
				<div className=" w-full flex flex-col ml-[20%]">
					<div className="text-neutral-400 font-Roboto tracking-[0.2rem] text-sm">
						UIUX Designer
					</div>
					<div className="text-white text-8xl font-Poppins font-bold italic tracking-wider ">
						Hi, 
					</div>
					<div className="text-white text-8xl font-Poppins font-bold italic tracking-wider ">
						I'm Arisa!
					</div>
					<div className=" w-[65%] font-Roboto text-neutral-400 leading-loose ">
						<p className="w-[80%]">
							Born in 1997, raised in Japan. Self-taught in coding and learned design from professionals as a full-time intern at a start-up.
						</p>
						<p className="w-[80%]">
							I love to distill highly complex matters into clean as a simple thinker doubting premises. Also to explore with my hands and my eyes, touching and examining the world with rationalism and spirited curiosity. I am a natural maker, building the useful for the fun of it, and learning from my environment as I go.
						</p>
						<p className="w-[80%]">
							Currently, participating as a UX designer in B2B services for the mobile telco industry to enable next-generation, cloud-based, international mobile services.
						</p>
					</div>
					<div>
						<div className="flex items-center space-x-5">
							<span>
								<img src="/images/heart.png" />
							</span>
							<span className="font-Roboto text-neutral-600 leading-loose">
								Passion
							</span>
						</div>
						<div className="flex items-center space-x-8">
							<div className="w-0.5 h-[4rem]  bg-line "></div>
							<div className="text-neutral-600 w-[50%] leading-loose ">
								#UserCenteredDesign  #Technology  #Business  #Telecom  #Finance  #Minimalism  #Chocolate 🍫
							</div>
						</div>
					</div>
					<div className="pt-10 text-neutral-400">
						<button className="border flex rounded-full justify-center items-center w-[20%] h-[3.5rem]">
							<span className="font-Roboto">
								Download CV
							</span>
							<span className="ml-[5%]">
								<img src="/images/arrow2.png" />
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className="flex items-center space-x-[3%] pt-[10%]">
				<div className="ml-[3%]">
					<div className="w-0.5 h-[6rem]  bg-line rotate-90"></div>
				</div>
				<div className="text-8xl text-white font-Poppins  font-bold italic">
					Skill
				</div>
			</div>
			<div className="flex  justify-around pt-[10%]">
				<div className="flex flex-col items-center ">
					<div>
						<img src="/images/icon_research.svg" />
					</div>
					<div className="text-white text-3xl font-Poppins pt-[5%]">
						Research
					</div>
					<div className="pt-[10%]">
						<img src="/images/skills.png" />
					</div>


				</div>
				<div className="flex flex-col items-center">
					<div>
						<img src="/images/icon_design.svg" />
					</div>
					<div className="text-white text-3xl font-Poppins pt-[5%]">
						Surface
					</div>
					<div className="pt-[10%]">
						<img src="/images/skills1.png" />
					</div>

				</div>
				<div className="flex flex-col items-center">
					<div>
						<img src="/images/icon_code.svg" />
					</div>
					<div className="text-white text-3xl font-Poppins pt-[5%]">
						Technology
					</div>
					<div className="pt-[10%]">
						<img src="/images/skills2.png" />
					</div>

				</div>
			</div>
			<div className="flex items-center space-x-[3%] pt-[10%]">
				<div className="ml-[3%]">
					<div className="w-0.5 h-[6rem]  bg-line rotate-90"></div>
				</div>
				<div className="text-8xl text-white font-Poppins  font-bold italic">
					Workflow
				</div>
			</div>
			<div className="flex items-center justify-around pt-[10%]">
				<div className="flex flex-col  ml-[8%]">
					<div>
						<div className="flex space-x-4 items-center">
							<div >
								<img src="/images/icon_strategy.svg" className="w-[90%]"/>
							</div>
							<div className="text-neutral-300 text-4xl font-Poppins">
								Strategy
							</div>
						</div>
						<p className="w-[65%] text-neutral-500 pt-5">
							My first thing to do is collect data to find issues and user needs, and make a strategy for what value we will deliver to whom. And plan a design process such as Design Thinking, Design Sprints, and Double Diamond.
						</p>
					</div>
					<div className=" pt-[5%] w-[70%]">
						<img src="/images/devider.png" />
					</div>
					<div className=" pt-[5%]">
						<div className="flex space-x-4 items-center">
							<div >
								<img src="/images/icon_scope.svg" className="w-[90%]"/>
							</div>
							<div className="text-neutral-300 text-4xl font-Poppins">
								Scope
							</div>
						</div>
						<p className="w-[60%] text-neutral-500 pt-5">
							Secondly, make a scope to define the functional and content requirements that fulfill and be aligned with the strategic goals. 
						</p>
					</div>
					<div className=" pt-[5%] w-[70%]">
						<img src="/images/devider.png" />
					</div>
					<div className=" pt-[5%]">
						<div className="flex space-x-4 items-center">
							<div >
								<img src="/images/icon_structure.svg" className="w-[90%]"/>
							</div>
							<div className="text-neutral-300 text-4xl font-Poppins">
								Structure
							</div>
						</div>
						<p className="w-[65%] text-neutral-500 pt-5">
							Thirdly, make a structure that defines how the system behaves when users interact, how it’s organized, prioritized, and how much of it.
						</p>
					</div>
					<div className=" pt-[5%] w-[70%]">
						<img src="/images/devider.png" />
					</div>
					<div className=" pt-[5%]">
						<div className="flex space-x-4 items-center">
							<div >
								<img src="/images/icon_skelton.svg" className="w-[90%]"/>
							</div>
							<div className="text-neutral-300 text-4xl font-Poppins">
								Skeleton
							</div>
						</div>
						<p className="w-[65%] text-neutral-500 pt-5">
							And then, skeleton (wireframe) determines the visual form of all elements that make us interact with the functionality of the system.
						</p>
					</div>
					<div className=" pt-[5%] w-[70%]">
						<img src="/images/devider.png" />
					</div>
					<div className=" pt-[5%]">
						<div className="flex space-x-4 items-center">
							<div >
								<img src="/images/icon_surface.svg" className="w-[90%]"/>
							</div>
							<div className="text-neutral-300 text-4xl font-Poppins">
								Surface
							</div>
						</div>
						<p className="w-[65%] text-neutral-500 pt-5">
							Finally, we can make the surface (interface) as the sum total of the decisions we have made. It determines how does the product will look like, and choosing the right layout, typography, colors, …etc.
						</p>
					</div>

				</div>
				<div className="flex flex-col items-center w-full">
					<div className="text-neutral-500">
						Specific
					</div>
					<div className="pt-5">
						<img src="/images/about_page.png" />
					</div>
				</div>
			</div>
			<div className="flex justify-center flex-col items-center font-Roboto text-neutral-500 pt-[10%]">
				<div>
					It's not the end, actually the beginning.
				</div>
				<div>
					By repeating enhancements based on engagement, we deliver great values.
				</div>
			</div>
      </div>
);
  
export default About;