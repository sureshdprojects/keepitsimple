import React from 'react';
import { Link } from 'react-router-dom'

function Post(props) {

    return <div className='post'>
        <h1>{props.post.title.charAt(0).toUpperCase() + props.post.title.slice(1)}</h1>
        <p>{props.post.description.slice(0, 455)}
            <Link to={'posts/' + props.post._id} >...Read more </Link>
        </p>
    </div>;
}

export default Post;
