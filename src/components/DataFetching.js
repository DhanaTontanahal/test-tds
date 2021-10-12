import React, {useState , useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../constants/appConstants';
import Loader from "./Loader";

function DataFetching() {
    const [loading, setloading] = useState(false);
    const [posts , setPosts] = useState([]);
    const [post, setPost] = useState({})

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

    const fetchDataById=(id)=>{
        axios.get(`${API_URL}${id}`)
        .then(({data})=>{
            setloading(false);
            setPost(data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }


    useEffect(()=>{
        setloading(true);
        fetchData();
    },[])

    const handleEachPostClick=({id})=>{
        fetchDataById(id)
    }
    
    return (
        <>
            {
                !!loading?<Loader />:
                <ul>
                {
                    posts.map(post=>{
                        return(<li onClick={()=>handleEachPostClick(post)} key={post.id}>{post.title}</li>)
                    })
                }
            </ul>
            }
           
        </>
    )
}

export default DataFetching
