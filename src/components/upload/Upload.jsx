import React, { useState } from 'react';
import './upload.css'
import { Link } from "react-router-dom";
import axios from "axios";

const baseUrl = "https://simpleliving.herokuapp.com/newpost";

function Upload() {

    const [post, setPost] = useState({
        title: "",
        description: ""
    });

    function onUpload() {
        axios.post(baseUrl, post);
    }

    function handleChange(event) {
        const { name, value } = event.target;

        setPost((preValue) => {
            if (name === "title") {
                return {
                    title: value,
                    description: preValue.description
                }
            } else if (name === "description") {
                return {
                    title: preValue.title,
                    description: value
                }
            }
        })
    }

    return <div className='upload'>
        <div className='form'>
            <form>
                Title:
                <br></br>
                <br></br>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={post.title}
                    autoComplete="off"
                >
                </input>
                <br></br>
                <br></br>
                Content:
                <br></br>
                <br></br>
                <textarea
                    name="description"
                    onChange={handleChange}
                    rows="4" cols="40"
                    value={post.description}
                >
                </textarea>
                <br></br>
                <br></br>
                <div>
                    <Link to="/thanks">
                        <button
                            name="button"
                            className="curve"
                            onClick={onUpload}
                        >
                            Upload
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    </div>;
}

export default Upload;
