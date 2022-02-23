import React from 'react';
import Project6 from '../components/screens/projects/Project6'
import Header from './Header'
import Footer from '../components/footer/Footer'

const Joker = () => (
	<div className="w-full h-screen flex flex-col ">
		<div className="flex">
			<Header />
		</div>
		<div className="flex grow ">
			<Project6 />
		</div>
		<div className="flex">
			<Footer />
		</div>
      	</div>
      
  );
  
  export default Joker;