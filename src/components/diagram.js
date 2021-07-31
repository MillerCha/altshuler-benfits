import react, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { messageService } from '../messageService';



export default () => {

  //alert(one)


  const randomData = () => {
    return [
      { title: 'One', value: (Math.round(Math.random() * 100)), color: '#E38627' },
      { title: 'Two', value: (Math.round(Math.random() * 100)), color: '#C13C37' },
      { title: 'Three', value: (Math.round(Math.random() * 100)), color: '#6A2135' },
    ];
  }

  const [data, setData] = useState(randomData());
  const handleClick = () => {
    setData(randomData());

    // send message to subscribers via observable subject
    messageService.sendMessage();

  }

  const defaultLabelStyle = {
    fontSize: '4px',
    fontFamily: 'sans-serif',
  };


  return (
    <div>
      <PieChart
        data={data} onClick={handleClick}
        label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value}`}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        lineWidth={95}
        labelPosition={80}
        style={{ height: '25rem' }}
      />

    </div>


  );

}