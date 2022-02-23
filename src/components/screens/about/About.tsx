import React from 'react';


const About = () => (
	<div className="w-full h-full">
			<div className="w-full  flex justify-between pt-[10%] items-center">
				<div className="flex flex-col w-[30%]">
					<div>
						<img src="/images/profile.png"/>
					</div>
					<div>
						<img src="/images/message.svg" />
					</div>
				</div>	
				<div className="w-full flex flex-col">
					<div className="text-neutral-400 font-Roboto tracking-[0.2rem] text-sm">
						UIUX Designer
					</div>
					<div className="text-white text-8xl font-Poppins font-bold italic tracking-wider ">
						Hi, 
					</div>
					<div className="text-white text-8xl font-Poppins font-bold italic tracking-wider ">
						I'm Arisa!
					</div>
					<div className="w-[32%]  font-Roboto text-neutral-400 leading-loose">
						<p className="w-[90%]">
							Born in 1997, raised in Japan. Self-taught in coding and learned design from professionals as a full-time intern at a start-up.
						</p>
						<p className="w-[95%]">
							I love to distill highly complex matters into clean as a simple thinker doubting premises. Also to explore with my hands and my eyes, touching and examining the world with rationalism and spirited curiosity. I am a natural maker, building the useful for the fun of it, and learning from my environment as I go.
						</p>
						<p className="w-[95%]">
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
							<div className="text-neutral-600 w-[30%] leading-loose ">
								#UserCenteredDesign  #Technology  #Business  #Telecom  #Finance  #Minimalism  #Chocolate
							</div>
						</div>
					</div>
					<div className="pt-10 text-neutral-400">
						<button className="border flex rounded-full justify-center items-center w-[15%] h-[3.5rem]">
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
	
      </div>
);
  
export default About;