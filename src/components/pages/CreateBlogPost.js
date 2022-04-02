import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreateBlogPost() {
    const navigate = useNavigate();

    const [state, setState] = useState({
        title: "",
        content: "",
        keywords: ""
    });

    const handleFieldChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    
    const createBlog = (e) => {
        e.preventDefault();
        console.log(state);
        setTimeout(() => {
            alert("Blog Post Created!");
        }, 1000);
        navigate('/blog/'+Math.floor(Math.random() * 10));
    }

    return (
        <div>
            <h2>Create A Blog Post</h2>
            <form onSubmit={ createBlog }>
                <TextField name="title" value={state.title} onChange={handleFieldChange} label="Title" variant="standard" /><br/><br/>
                <TextField name="content" value={state.content} onChange={handleFieldChange} label="Content" variant="standard" /><br/><br/>
                <TextField name="keywords" value={state.keywords} onChange={handleFieldChange} label="Keywords" variant="standard" />
                <br/><br/>
                <Button type="submit" variant="contained" style={{display: state.keywords === "" ? "none" : ""}}>Create</Button>
            </form>
        </div>
    );
}

export default CreateBlogPost;