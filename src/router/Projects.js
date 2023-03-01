import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectIntro from '../components/ProjectIntro';
import PriceCard from '../components/PriceCard';
import { WorkCard } from '../components/WorkCard';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectIntro heading="ПРОЕКТЫ." text="Тут текст."/>
      <WorkCard />
      <PriceCard />
      <Footer />
    </div>
  );
}

export default Projects;