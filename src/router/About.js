import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectIntro from '../components/ProjectIntro';

const About = () => {
  return (
    <div>
      <Navbar />
      <ProjectIntro heading="Обо Мне." text="Тут текст." />
      <Footer />
    </div>
  );
}

export default About;