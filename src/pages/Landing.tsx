import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion"

const Landing = () => {
	const line = "ARISA TSUJI's PORTFOLIO"

	const sentence =
	{
		hidden: { opacity: 1 },
		visible:
		{
			opacity: 1,
			transition:{
				delay: 0.5,
				staggerChildren: 0.08,
			},
		},
		
	}

	const letter = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
		}
	}

	return(
			<div className="w-full h-full ">
				<div className="flex w-full  flex-col">
					<div className="flex text-white w-full h-full justify-center pt-10">
						<div> 
							<img src="/images/Vectary_texture.png" />
						</div>
						<motion.div initial="hidden" animate="visible" variants={sentence} className="absolute pt-[20%] text-8xl text-neutral-300 ">
							{line.split("").map((char, index) => {
								return (
									<motion.span key={char + "-" + index} variants={letter}>
										{char}
									</motion.span>
								)
							})}
						</motion.div>
					</div>
					{/**First Project  */ }
					<div  className=" pt-[10%]">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex pt-[10%] items-center">
							<div className="">
								<img src="/images/image1.png" />
							</div>
							<div className=" px-[5%] items-center space-y-2">
								<div className="text-neutral-500 font-Roboto tracking-[0.25rem]">
									Portfolio Website
								</div>
								<div className="text-6xl  w-[80%] text-white font-Poppins font-semibold">
									Self-introduction and guinea pig
								</div>
								<Link href='/Night' >
									<div className="pt-10">
										
											<button className=" flex rounded-full border bg-neutral-300 w-[30%] h-[3.5rem] space-x-[10%] justify-center items-center">
												<span className="text-black text-2xl  font-Roboto">
													Read More
												</span>
												<span className="">
													<img src="/images/arrow1.png" />
												</span>
												
											</button>
										
										
									</div>
								</Link>
								
							</div>
						</motion.div>
					</div>
					{/** Second Project */ }
					<div className="w-full h-full  ">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex pt-[20%] items-center">
							<div className=" w-[75%]">
								<img src="/images/image2.png" />
							</div>
							<div className="px-[5%] items-center space-y-2">
								<div className="text-neutral-500 font-Roboto tracking-[0.25rem]">
									Corporate Website & Blog
								</div>
								<div className="text-6xl  w-[80%] text-white font-Poppins font-semibold">
									Website rebranding for an industrial waste disposer
								</div>
								<Link href='/Club' >
									<div className="pt-10">
										<button className=" flex rounded-full border bg-neutral-300 w-[30%] h-[3.5rem] space-x-[10%] justify-center items-center">
											<span className="text-black text-2xl  font-Roboto">
												Read More
											</span>
											<span className="">
												<img src="/images/arrow1.png" />
											</span>
												
										</button>
											
									</div>	
								</Link>
								
							</div>
						</motion.div>
					</div>
					{/** Third Project */ }
					<div className="w-full h-full  ">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex pt-[20%] items-center">
							<div className=" w-[61%]">
								<img src="/images/image3.png" />
							</div>
							<div className="px-[5%] items-center space-y-2">
								<div className="text-neutral-500 font-Roboto tracking-[0.25rem]">
									Product Website
								</div>
								<div className="text-6xl  w-[80%] text-white font-Poppins font-semibold">
									Designed, coded, and deployed in 3 weeks
								</div>
								<Link href='/Heart' >
									<div className="pt-10">
										<button className=" flex rounded-full border bg-neutral-300 w-[30%] h-[3.5rem] space-x-[10%] justify-center items-center">
											<span className="text-black text-2xl  font-Roboto">
												Read More
											</span>
											<span className="">
												<img src="/images/arrow1.png" />
											</span>
												
										</button>
											
									</div>	
								</Link>
								
							</div>
						</motion.div>
					</div>
					{ /** Fourth Project */ }
					<div className="w-full h-full  ">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex pt-[20%] items-center">
							<div className=" w-[75%]">
								<img src="/images/image4.png" />
							</div>
							<div className="px-[5%] items-center space-y-2">
								<div className="text-neutral-500 font-Roboto tracking-[0.25rem]">
									B2B Streaming Product
								</div>
								<div className="text-6xl  w-[80%] text-white font-Poppins font-semibold">
									Designed app, web admin, and marketing website
								</div>
								<Link href='/Spade' >
									<div className="pt-10">
										<button className=" flex rounded-full border bg-neutral-300 w-[30%] h-[3.5rem] space-x-[10%] justify-center items-center">
											<span className="text-black text-2xl  font-Roboto">
												Read More
											</span>
											<span className="">
												<img src="/images/arrow1.png" />
											</span>
												
										</button>
											
									</div>	
								</Link>
								
							</div>
						</motion.div>
					</div>
					{ /** Fifth Project */ }
					<div className="w-full h-full  ">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex pt-[20%] items-center">
							<div className=" w-[55%]">
								<img src="/images/image5.png" />
							</div>
							<div className="px-[5%] items-center space-y-2">
								<div className="text-neutral-500 font-Roboto tracking-[0.25rem]">
									Corporate Website & Blog
								</div>
								<div className="text-6xl  w-[80%] text-white font-Poppins font-semibold">
									From data analysis to implementation
								</div>
								<Link href='/Diamond' >
									<div className="pt-10">
										<button className=" flex rounded-full border bg-neutral-300 w-[30%] h-[3.5rem] space-x-[10%] justify-center items-center">
											<span className="text-black text-2xl  font-Roboto">
												Read More
											</span>
											<span className="">
												<img src="/images/arrow1.png" />
											</span>
												
										</button>
											
									</div>
								</Link>
									
							</div>
						</motion.div>
					</div>
					{ /** Sixth Project */ }
					<div className="w-full h-full  ">
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex pt-[20%] items-center">
							<div className=" w-[55%]">
								<img src="/images/image6.png" />
							</div>
							<div className="px-[5%] items-center space-y-2">
								<div className="text-neutral-500 font-Roboto tracking-[0.25rem]">
									Portfolio Website
								</div>
								<div className="text-6xl  w-[80%] text-white font-Poppins font-semibold">
									First portfolio to share works at intern
								</div>
								<Link href='/Joker' >
									<div className="pt-10">
										<button className=" flex rounded-full border bg-neutral-300 w-[30%] h-[3.5rem] space-x-[10%] justify-center items-center">
											<span className="text-black text-2xl  font-Roboto">
												Read More
											</span>
											<span className="">
												<img src="/images/arrow1.png" />
											</span>
												
										</button>
											
									</div>	
								</Link>
								
							</div>
						</motion.div>
					</div>
				</div>
			
		</div>
	)
};
  
  export default Landing;