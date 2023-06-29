import React from 'react';

//components
import MyNavbar from './components/MyNavbar';
import Introduction from './components/Introduction';
import MyCarousel from './components/MyCarousel';
import ContactMe from './components/ContactMe';


const App = () => {
  return (
    <div className="App">
      <div style={{ "width": "100%", "backgroundColor": "orange", "textAlign": "center" }}>
        <span> !-- Where there is a will,there is a way --! </span>
      </div>
      <MyNavbar />
      <Introduction />
      <MyCarousel />
      <ContactMe />
    </div>
  );
}

export default App;
