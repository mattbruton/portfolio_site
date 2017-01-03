import React from 'react';
import SectionHeader from '../common/section-header-component.jsx';

import '../../styles/about-component.scss';

export default class About extends React.Component {
  render () {
    return(
      <div id="about" className="about__container">
        <SectionHeader header="about" />
        <div className="col-md-8 offset-md-2 about__content-container">
          <p>When I was little, I fell in love with information. I would spend hours reading about dinosaurs, lizards, rocks (yes, I was that kid), and just about any topic the Audubon Society released books on. Except spiders. I was, and still am terrified of those, even in their printed form. You can only imagine my excitement when my mom caved and allowed me to install AOL on our family computer.</p>

          <p>Eventually, I figured out that I could make my own websites, full of the animal/mineral data I'd found. One day while messing around with Angelfire, I clicked a button that converted my website from their template-based interface to a mess of HTML files. HTML I didn't understand. Many allowances were saved to buy a book that would help me make sense of it all.</p>

          <p>Long story short, over a couple weeks I had learned enough to do things beyond what I could do with the templates and that was an amazing feeling. Taking an idea and willing it into existence. Unfortunately, I became a teenager and found other interests.</p>

          <p>One night, a friend and I were joking around about a business idea and I wanted to create a parody website for it. I figured out pretty quickly that everything had changed, and HTML alone could not save me. Over time, I picked up some basic JavaScript and learned whatever else I could, but wanted more guidance instead of learning things in a seemingly random order. Ultimately, this lead to me enrolling at Nashville Software School.</p>

          <p>It's been an incredibly rewarding experience being surrounded by people who are equally excited to learn new concepts, taking problems and creating solutions for them.</p>
        </div>
      </div>
    );
  }
}
