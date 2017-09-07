import React, { Component } from 'react';
import { connect } from 'react-redux';
import './about.css';

const About = () => {
    return (
      <div className='aboutParagraph'>
        <h3>Welome to Get_Connected</h3>
        <p>
          Your one stop for tech news, Bay Area Jobs, and keeping in touch with your Galvanize Alums.
        </p>

        <p>
          The Bay Area Jobs columns features JavaScript jobs from Dice.com.  It updates the component with the latest jobs posted every day.
        </p>

        <p>
          The Tech News columns features news from Thenextweb.com, I am rendering the top 10 daily articles.
        </p>

        <p>
          The feed component is fully CRUD. Currently users can add posts, and share links.
        </p>

        <p>
          This place is constantly improving. New features are being added weekly, while other features are being refactored. If you have any questions, or suggestions, email me at Gurdipsingh1990@gmail.com
        </p>
      </div>
    )
}

export default About;
