import React from 'react';
import Project2 from '../components/screens/projects/Project2'
import Header from './Header'
import Footer from '../components/footer/Footer'

const Club = () => (
	<div className="w-full h-screen flex flex-col ">
		<div className="flex">
			<Header />
		</div>
		<div className="flex grow ">
			<Project2 />
		</div>
		<div className="flex">
			<Footer />
		</div>
      	</div>
      
  );
  
  export default Club;