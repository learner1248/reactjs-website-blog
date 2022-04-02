import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

function Home() {
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
            <h5>Home Page</h5>
        </div> 
        }
        </>
    );
}

export default Home;