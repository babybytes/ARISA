import React from 'react';
import About from '../components/screens/about/About'
import Header2 from '../components/screens/about/Header2'
import Footer from '../components/footer/Footer'

const Joker = () => (
	<div className="w-full h-screen flex flex-col ">
		<div className="flex">
			<Header2 />
		</div>
		<div className="flex grow ">
			<About />
		</div>
		<div className="flex">
			<Footer />
		</div>
      	</div>
      
  );
  
  export default Joker;