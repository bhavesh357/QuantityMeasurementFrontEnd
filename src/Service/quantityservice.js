import axios from 'axios';

let baseURL= 'http://localhost:8080';



async function getMainUnits(){
    console.log("in get");
    return await axios.get(baseURL+'/').then(res => {
        console.log(res.data.object);
        return res.data.object;
      });
}

async function getSubUnits(element){
    console.log(element);
    return await axios.get(baseURL+'/unit?mainUnit='+element).then(res => {
        console.log(res.data.object);
        return res.data.object;
      });
}

async function getConversion(element){
    console.log(element);
    return await axios.post('/unit',element).then( res => {
        return res.data.object;
    });
}

export {getMainUnits,getSubUnits,getConversion};


    
    