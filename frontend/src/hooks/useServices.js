import React,{useEffect,useState} from 'react';
import axios from 'axios';
const useServices = () => {

   
    const [servicesData,setServicesData] = useState([]);

    const [sloading, setLoading] = useState(true);
   

    useEffect(() => {

        // fetch('./services.json')
        //     .then(res =>  res = res.json())
        //     .then(data => {
        //         // console.log(data);
        //         setServicesData(data);
        //     })
        axios.get('services').then(res=>{
            console.log(res.data);
            setServicesData(res.data);
            setLoading(false);
        })

},[])

return [servicesData,sloading];

}   

export default useServices;