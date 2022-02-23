import React from 'react';
import Link from 'next/link'


const Header = () => (
	<div className=" fixed w-full z-10">
		<div className="flex pt-10 justify-around space-x-[35%] ">
			<Link href="/" >
				<div className="cursor-pointer">
					<img src="/images/logo_arisa.svg" />
				</div>
			</Link>
			<Link href="/Ace">
				<a  className="text-neutral-300 pt-1 text-2xl ">
					About
				</a>
			</Link>
		</div>
      </div>
);
  
export default Header;