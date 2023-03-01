import React, { Component } from 'react';

import './ProjectIntro.css';

class ProjectIntro extends Component {
render () {
    return (
        <div className='project-intro'>
            <div className="heading">
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
            </div>    
        </div>
    );
  }
}

export default ProjectIntro;