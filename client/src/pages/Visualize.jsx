import React from 'react';
import BarChart from '../components/BarChart';

const DataVisualization = ({ data }) => {
  
  return (
    <div>
      <h1>Visualize</h1>
      {data.message.map((element, index) => (
        <BarChart key={index} data={element} />
      ))}
    </div>
  );
};

export default DataVisualization;
