import react, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { messageService } from '../messageService';



export default ({ clicked }) => {

  //alert(one)


  const randomData = () => {
    return [
      { title: 'One', value: (Math.round(Math.random() * 100)), color: '#E38627' },
      { title: 'Two', value: (Math.round(Math.random() * 100)), color: '#C13C37' },
      { title: 'Three', value: (Math.round(Math.random() * 100)), color: '#6A2135' },
    ];
  }
  
  
  useEffect(()=>{
    setData(randomData())
  },[clicked]) ;

  const [data, setData] = useState(randomData());


  const defaultLabelStyle = {
    fontSize: '4px',
    fontFamily: 'sans-serif',
  };


  return (
    <div>
      <PieChart
        data={data}
        label={({ dataEntry }) => `${dataEntry.title} ${dataEntry.value}`}
        labelStyle={{
          ...defaultLabelStyle,
        }}
        lineWidth={95}
        labelPosition={80}
      />

    </div>


  );

}