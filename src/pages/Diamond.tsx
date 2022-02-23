import React from 'react';
import Project5 from '../components/screens/projects/Project5'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Diamond = () => (
	<div className="w-full h-screen flex flex-col ">
		<div className="flex">
			<Header />
		</div>
		<div className="flex grow ">
			<Project5 />
		</div>
		<div className="flex">
			<Footer />
		</div>
      	</div>
      
  );
  
  export default Diamond;