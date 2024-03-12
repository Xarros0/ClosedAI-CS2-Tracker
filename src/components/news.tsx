import React from 'react';
import Navbar from './mainNavbar';

const news: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#1C3144', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>

        <div style={{ backgroundColor: '#A2AEBB', borderRadius: 8, height: '800px', width: '1200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: 'black', marginTop: '-90px', marginLeft: '20px' }}>Live updates from Asia RMR 2024</h1>
         {/* <img src={null} alt="Harry Potter" style={{ width: '600px', height: '400px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} />*/}
          <div style={{ width: '80%', height: '300px', padding: '20px', border: '2px solid white', borderRadius: '8px', overflowY: 'auto' }}>
            <h1>LV coach: "It's dream to come true"</h1> <p>Date</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis diam id nisl dapibus bibendum. 
              Duis malesuada felis sit amet lacus fringilla hendrerit. Integer sed sagittis elit, et interdum est. 
              In hac habitasse platea dictumst. Sed vel vestibulum elit. Nullam tincidunt nibh et arcu fermentum, 
              vitae varius erat cursus. In nec fermentum mauris, a ultrices tortor. Integer feugiat justo libero, 
              eget feugiat orci vehicula et. Mauris congue tortor eu arcu tempor scelerisque. Donec at eleifend nisi. 
              Morbi nec tellus pharetra, hendrerit odio at, molestie leo. Aliquam in ex nibh. Vestibulum vitae ultricies urna.
            </p>
            {/* You can add more paragraphs of text here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default news;
