import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createBlogPost(
    id,
    title,
    content,
    keywords
    ) {
    return { id, title, content, keywords };
}

const rows = [
    createBlogPost(1, 'Abc', 'defg', 'hi'),
    createBlogPost(2, 'jkl', 'prs', 'hi'),
    createBlogPost(3, 'mno', 't', 'hi'),
];

function Blog() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
        { isLoading === true ?
            <p>Loading..</p>
        : 
        <div>
            <h5>Blog Page</h5>
            <Link to="/blog/create"><Button variant="contained">Create a blog post</Button></Link>
            <p>Blog posts:</p>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Post ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Content</TableCell>
                            <TableCell>Keywords</TableCell>
                            <TableCell>Read</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { rows.map((row) => (
                            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0} }}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.title}</TableCell>
                                <TableCell>{row.content}</TableCell>
                                <TableCell>{row.keywords}</TableCell>
                                <TableCell><Link to={`/blog/${row.id}`}>Click</Link></TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </div> 
        }
        </>
    );
}

export default Blog;