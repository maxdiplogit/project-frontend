// React Hooks
import axios from "axios";
import { useState, useEffect, useRef } from "react";


// Styles
import classes from './Home.module.css';


const Home = () => {
    const ourRef = useRef();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.post('http://localhost:8081/books/return/1001', {
                memberID: 2001
            });
            console.log(res);
        };

        fetchData();
    }, []);

    return (
        <>
            {/* <ul>
                { books.map((book) => 
                    <li key={ book.BookID }>
                        <h1>{ book.BookName }</h1>
                        <h3>{ book.NumberOfCopies }</h3>
                    </li>
                ) }
            </ul> */}
        </>
    );
};


export default Home