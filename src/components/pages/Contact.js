import React, { useState, useEffect } from "react";

function Contact() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (<>{isLoading === true ? <p>Loading..</p> : <h5>Contact Page</h5> }</>);
}

export default Contact;