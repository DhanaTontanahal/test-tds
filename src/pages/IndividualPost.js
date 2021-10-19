import React , {useEffect,useState} from 'react';
import axios from 'axios';
import { API_URL } from '../constants/appConstants';
import Table from '../components/Table';
import {columns} from "../constants/columns";
import { useHistory } from 'react-router-dom';

function IndividualPost({match}, props) {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const history = useHistory();

    const fetchDataById=(id)=>{
        axios.get(`${API_URL}${id}`)
        .then(({data})=>{
            setData(data);
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    const handleBack=()=>{
        history.push('/');
    }

    useEffect(() => {
        fetchDataById(match.params.postId)
    }, [match.params.postId]);

    useEffect(() => {
        //stop the loader
        setIsLoaded(true);
    }, [data]);

    return (
        <div>
            {
                !!isLoaded?
                <>
                <Table id="id" columns={columns} idata={data} />
                <button onClick={handleBack}>Back</button>
                </>
                :<div>Loading...</div>
            }
        </div>
    )
}

export default IndividualPost
