import React from 'react';

const Landing = () => (
	<div className="w-full h-full ">
		<div className="flex text-white w-full h-full justify-center ">
			<div className=" pt-[20%] z-10 text-8xl text-neutral-300 bg-[url('/images/Vectary_texture.png')]">
				ARISA TSUJI's PORTFOLIO
			</div>
		</div>
		<div className="w-full h-full bg-back ">
			<div className="w-full h-full flex pt-[10%] items-center">
				<div className="drop-shadow-xl">
					<img src="/images/image1.png" />
				</div>
				<div className="px-[10%] items-center space-y-2">
					<div className="text-neutral-500 font-Roboto tracking-[0.25rem]">
						Portfolio Website
					</div>
					<div className="text-6xl  w-[80%] text-white font-Poppins font-semibold">
						Self-introduction and guinea pig
					</div>
					<div className="pt-10">
						<button className=" flex rounded-full border bg-white w-[30%] h-[3.5rem] space-x-[10%] justify-center items-center">
							<span className="text-black text-2xl  font-Roboto">
								Read More
							</span>
							<span className="">
								<img src="/images/arrow1.png" />
							</span>
							
						</button>
					</div>
					
				</div>
			</div>
		</div>
      </div>
  );
  
  export default Landing;