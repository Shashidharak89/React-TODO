import axios from "axios";
import { useEffect, useState } from "react";

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
                res.length==0?"Not found":<div>
                    <h1>{
                      res.slip.id
                    }
                    </h1>
                    <h1>{
                      res.slip.advice
                    }
                    </h1>
                </div>

            }

        </div>
    );
}
export default Quotes;