import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import axios from 'axios';

const baseUrl = "https://simpleliving.herokuapp.com/";

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((response) => {
            setPosts(response.data)
        })
    }, []);

    return <div className='home'>
        {posts.map((post, index) => (
            <Post
                key={index}
                post={post}
                index={index}
            />
        ))}
    </div>;
}

export default Home;
