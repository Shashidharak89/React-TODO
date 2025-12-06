import axios from "axios";
import { useEffect, useState } from "react";
import './styles/Quotes.css';

const Quotes = () => {
    const [res, setRes] = useState([]);

    useEffect(() => {
        const getQuotes = async () => {
            try {
                const response = await axios.get("https://api.adviceslip.com/advice");
                setRes(response.data);
            } catch (error) {
                console.log(error);
            }

        };
        getQuotes();
    }, [])
    console.log(res);
    return (
        <div>
            <h1>Quotes</h1>
            {
                res.length == 0 ? "Not found" : <div className="quote-container"><div >
                    <p className="quote-id">{
                        res.slip.id
                    }
                    </p>
                    <p className="advice">{
                        res.slip.advice
                    }
                    </p>
                </div>
                </div>

            }

        </div>
    );
}
export default Quotes;