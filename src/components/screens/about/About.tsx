import React from 'react';
import Header2 from './Header2'

const About = () => (
	<div className="w-full h-full">
		
			<Header2 />
		
			<div className=" flex items-center">
				<div className="flex flex-col">
					<div>
						<img src="/images/profile.png"/>
					</div>
					<div>
						<img src="/images/message.svg" />
					</div>
				</div>	
				<div className="w-full ">
					<div className="text-white">
						UIUX Designer
					</div>
				</div>		
				
			</div>
	
      </div>
);
  
export default About;