import React from 'react';
import Project1 from '../components/screens/projects/Project1'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Night = () => (
	<div className="w-full h-screen flex flex-col ">
		<div className="flex">
			<Header />
		</div>
		<div className="flex grow ">
			<Project1 />
		</div>
		<div className="flex">
			<Footer />
		</div>
      	</div>
      
  );
  
  export default Night;