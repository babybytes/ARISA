import React from 'react';

const Footer = () => (
	<div className="w-full h-full ">
		<div className="w-full h-full pt-[20%] md:pt-[10%]"> 
			<div className="lg:ml-[20%] lg:w-[59%]">
				<img src="/images/divider.png" />
			</div>
			<div className="flex justify-around text-white h-[5rem] items-center">
				<div className=" font-Poppins ">
					arisa120597@gmail.com
				</div>
				<div className="flex w-[25%] md:w-[15%] lg:w-[5%]">
					<div className="w-full">
						<img src="/images/icon_linkedin.png" />
					</div>
					<div className="w-full">
						<img src="/images/icon_twitter.png" />
					</div>
				</div>
			</div>
			
		</div>
     	</div>
  );
  
  export default Footer;