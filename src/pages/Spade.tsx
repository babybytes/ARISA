import React from 'react';
import Project4 from '../components/screens/projects/Project4'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Spade = () => (
	<div className="w-full h-screen flex flex-col ">
		<div className="flex">
			<Header />
		</div>
		<div className="flex grow ">
			<Project4 />
		</div>
		<div className="flex">
			<Footer />
		</div>
      	</div>
      
      
  );
  
  export default Spade;