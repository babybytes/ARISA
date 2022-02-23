import React from 'react';
import Project3 from '../components/screens/projects/Project3'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const Heart = () => (
	<div className="w-full h-screen flex flex-col ">
		<div className="flex">
			<Header />
		</div>
		<div className="flex grow ">
			<Project3 />
		</div>
		<div className="flex">
			<Footer />
		</div>
      	</div>
      
  );
  
  export default Heart;