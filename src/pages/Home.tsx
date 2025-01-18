import React from 'react';
import Header from '../components/Header/Header';

const Home: React.FC = () => {
  return (
    <div className="pageLayout">
      <Header />
      <div className="pageContent">
        <h2>League Name</h2>
        <div className="tableContainer">
          <p>Placeholder for table</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
