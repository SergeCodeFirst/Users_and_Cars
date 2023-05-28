import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'


const Second = (props) => {
    const [grettings, setGrettings] = useState({});
    useEffect((req, res) => {
        axios.get("http://localhost:8000/api")
            .then(res => {
                console.log(res.data);
                setGrettings(res.data);
            })
            .catch(err => {
                console.log({ error: err });
            })
    }, [])

    return <div>
        <h1>Hellow from Second</h1>
        <h1>Deploy</h1>
        <h2>My App: {grettings.msg}</h2>
        <h2>My App: {grettings.results}</h2>
        <Link to="/">Home</Link>
    </div>
}

export default Second