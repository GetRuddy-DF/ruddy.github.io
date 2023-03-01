import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectIntro from '../components/ProjectIntro';

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <ProjectIntro heading="Контакты" text="Тут текст"/>
      <Footer />
    </div>
  );
}

export default Contacts;