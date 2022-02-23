import React from 'react';
import Link from 'next/link'
import { motion } from "framer-motion"


const Header = () => {
	const list = {
		visible: { opacity: 1, x: 0 },
  		hidden: { opacity: 0, x: -100 },
	}
	const item = {
		visible: { opacity: 1, x: 0 },
  		hidden: { opacity: 0, x: 100 },
	}
	return(
		<div className=" fixed w-full z-10">
			<div className="flex pt-10 justify-around space-x-[35%] ">
				<Link href="/" >
					<motion.div initial="hidden" animate="visible" variants={item}  className="cursor-pointer">
						<img src="/images/logo_arisa.svg" alt="" />
					</motion.div>
				</Link>
				<Link href="/Ace">
					<motion.a  initial="hidden" animate="visible" variants={list}  className="text-neutral-300 pt-1 text-2xl ">
						About
					</motion.a>
				</Link>
			</div>
		</div>
	)
};
  
export default Header;