import axios from 'axios';

const api=axios.create({
    baseURL: 'http://localhost:8080'
    
})

export async function getMainUnits(element){
    await api.get('/');
    
}


export default api;
    
    