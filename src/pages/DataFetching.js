import React, {useState , useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../constants/appConstants';
import Loader from "../components/Loader";
import { useHistory } from 'react-router-dom';


function DataFetching() {
    const [loading, setloading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [post, setPost] = useState({});
    const history = useHistory();


    const fetchData=()=>{
        axios.get(API_URL)
        .then(({data})=>{
            setPosts(data);
            setloading(false);
        })
        .catch((e)=>{
            setloading(false);
            throw new Error('Data fetching couldnot happen!');
        })
    }




    useEffect(()=>{
        setloading(true);
        fetchData();
    },[])

    const handleEachPostClick=({id})=>{
        //navigate to route with an ID
        console.log(id)
        history.push('/dashboard/'+id);
    }
    
    return (
        <>
            {
                !!loading?<Loader />:
                <ul>
                {
                    posts.map(post=>{
                        return(<li key={post.id}>
                            {post.title}
                            &nbsp;<button onClick={()=>handleEachPostClick(post)}>View</button>
                            </li>)
                    })
                }
            </ul>
            }
           
        </>
    )
}

export default DataFetching
