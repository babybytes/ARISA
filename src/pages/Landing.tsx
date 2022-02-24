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
						<motion.div initial="hidden" animate="visible" variants={sentence} className="absolute pt-[30%] text-3xl md:pt-[35%] md:text-6xl lg:pt-[30%] lg:text-8xl 2xl:pt-[20%] 2xl:text-8xl text-neutral-300">
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
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex flex-col md:flex-row pt-[10%] items-center">
							<div className="md:w-[75%] lg:w-[60%]">
								<img src="/images/image1.png" />
							</div>
							<div className=" px-[5%] flex-col flex  space-y-2 lg:space-y-5 pt-5 md:pt-0">
								<div className="text-neutral-500 font-Roboto tracking-[0.15rem] text-sm">
									Portfolio Website
								</div>
								<div className="text-4xl md:text-3xl w-[95%] lg:text-5xl text-white font-Poppins font-semibold lg:leading-tight">
									Self-introduction and guinea pig
								</div>
								<Link href='/Night' >
									<div className="pt-5">
										<button className=" flex rounded-full border bg-neutral-300 w-[45%] lg:w-[35%] h-[2.5rem] lg:h-[3rem] space-x-[5%]  justify-center items-center">
											<span className="text-black text-lg lg:text-xl font-Roboto">
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
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex flex-col md:flex-row pt-[20%] items-center">
							<div className="lg:w-[96%]">
								<img src="/images/image2.png" />
							</div>
							<div className="px-[5%] flex-col flex  space-y-2 lg:space-y-5 pt-5 md:pt-0">
								<div className="text-neutral-500 font-Roboto tracking-[0.15rem] text-sm">
									Corporate Website & Blog
								</div>
								<div className="md:text-3xl text-4xl lg:text-5xl w-[85%] text-white font-Poppins font-semibold lg:leading-tight">
									Website rebranding for an industrial waste disposer
								</div>
								<Link href='/Club' >
									<div className="pt-5">
										<button className=" flex rounded-full border bg-neutral-300 w-[45%] lg:w-[35%] h-[2.5rem] lg:h-[3rem] space-x-[5%]  justify-center items-center">
											<span className="text-black text-lg lg:text-xl font-Roboto">
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
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex flex-col pt-[20%] md:flex-row items-center">
							<div className=" md:w-[95%] lg:w-[79%]">
								<img src="/images/image3.png" />
							</div>
							<div className="px-[5%] flex-col flex  space-y-2 lg:space-y-5 pt-5 md:pt-0">
								<div className="text-neutral-500 font-Roboto tracking-[0.15rem] text-sm">
									Product Website
								</div>
								<div className="md:text-3xl text-4xl  lg:text-5xl text-white font-Poppins font-semibold lg:leading-tight">
									Designed, coded, and deployed in 3 weeks
								</div>
								<Link href='/Heart' >
									<div className="pt-5">
										<button className=" flex rounded-full border bg-neutral-300 w-[45%] lg:w-[35%] h-[2.5rem] lg:h-[3rem] space-x-[5%]  justify-center items-center">
											<span className="text-black text-lg lg:text-xl font-Roboto">
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
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex flex-col md:flex-row pt-[20%]  items-center">
							<div className="md:w-[120%] lg:w-[95%] ">
								<img src="/images/image4.png" className="lg:w-[90%] " />
							</div>
							<div className="px-[5%] flex-col flex  space-y-2 lg:space-y-5 pt-5 md:pt-0">
								<div className="text-neutral-500 font-Roboto tracking-[0.15rem] text-sm">
									B2B Streaming Product
								</div>
								<div className="md:text-3xl text-4xl w-[80%] lg:text-5xl text-white font-Poppins font-semibold lg:leading-tight">
									Designed app, web admin, and marketing website
								</div>
								<Link href='/Spade' >
									<div className="pt-5">
										<button className=" flex rounded-full border bg-neutral-300 w-[45%] lg:w-[35%] h-[2.5rem] lg:h-[3rem] space-x-[5%]  justify-center items-center">
											<span className="text-black text-lg lg:text-xl font-Roboto">
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
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex flex-col md:flex-row pt-[20%] items-center">
							<div className="md:w-[90%] lg:w-[74%]">
								<img src="/images/image5.png" className="lg:w-[85%]"/>
							</div>
							<div className="px-[5%] flex-col flex  space-y-2 lg:space-y-5 pt-5 md:pt-0">
								<div className="text-neutral-500 font-Roboto tracking-[0.15rem] text-sm">
									Corporate Website & Blog
								</div>
								<div className="md:text-3xl text-4xl  lg:text-5xl text-white font-Poppins font-semibold lg:leading-tight">
									From data analysis to implementation
								</div>
								<Link href='/Diamond' >
									<div className="pt-5">
										<button className=" flex rounded-full border bg-neutral-300 w-[45%] lg:w-[35%] h-[2.5rem] lg:h-[3rem] space-x-[5%]  justify-center items-center">
											<span className="text-black text-lg lg:text-xl font-Roboto">
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
						<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2}} className="w-full h-full flex flex-col md:flex-row pt-[20%] items-center">
							<div className="md:w-[90%] lg:w-[75%]">
								<img src="/images/image6.png" className="lg:w-[85%]" />
							</div>
							<div className="px-[5%] flex-col flex  space-y-2 lg:space-y-5 pt-5 md:pt-0">
								<div className="text-neutral-500 font-Roboto tracking-[0.15rem] text-sm">
									Portfolio Website
								</div>
								<div className="md:text-3xl text-4xl  lg:text-5xl text-white font-Poppins font-semibold lg:leading-tight">
									First portfolio to share works at intern
								</div>
								<Link href='/Joker' >
									<div className="pt-5">
										<button className=" flex rounded-full border bg-neutral-300 w-[45%] lg:w-[35%] h-[2.5rem] lg:h-[3rem] space-x-[5%]  justify-center items-center">
											<span className="text-black text-lg lg:text-xl font-Roboto">
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