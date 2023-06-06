import Block from './Block';
import './BarCharts.css'
const transformData = (resData) => {
  const labels = resData.data.map((entry) => entry.atribute);
  const dataset = resData.data.map((entry) => entry.value);
 
  return {
    labels,
    dataset,
  };
};

const BarChart = ({ data }) => {

  const newData = transformData(data);


  return (
    <div className='charts'>
      <h2>{data.metric}</h2>
      <Block data={newData} />
      <div className='insights'>
        <h3>Insights</h3>
      <h4>
        Average: {Math.floor(data.mean)}
      </h4>
      <h4>

        Maximum Value: {data.max}
      </h4>
      <h4>

        Minimum Value: {data.min}
      </h4>
      </div>
    </div>
  );
};

export default BarChart;
