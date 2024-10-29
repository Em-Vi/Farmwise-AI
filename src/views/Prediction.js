import React from 'react';
import { useLocation } from 'react-router-dom';
import './prediction.css';


const PredictionPage = () => {
  const location = useLocation();
  console.log(location)
  const prediction = location.state;
  console.log(prediction)

  return (
    <div className="prediction-page">
     <div 
        dangerouslySetInnerHTML={{ __html: prediction }} 
      />
    </div>
  );
};

export default PredictionPage;