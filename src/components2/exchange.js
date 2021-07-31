import react, { useEffect, useState } from 'react';
import axios from 'axios';
import { messageService } from '../messageService.js';


export default ({clicked}) => {

    const getData = async () => {
        let apiUrl = 'https://api.coingecko.com/api/v3/exchange_rates';

        let res = await axios.get(apiUrl);
        if (res && res.status === 200) {
            let resData = await res.data;
            console.log(resData);
            console.log(resData.rates.ils);

            setData(resData.rates.ils );
        }
    }

    const [data, setData] = useState(null);

    useEffect(() => { getData() }, [clicked]);


    return (
        <div>
            {data && `ils: ${data.value}`}
        </div>
    )


}