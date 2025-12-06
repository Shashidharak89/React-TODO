// 3
import axios from "axios";
import { useEffect, useState } from "react";
import './styles/ListApi.css';

const ListApi = () => {
    const [res, setRes] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/");

                console.log(response.data);
                setRes(response.data);
            } catch (error) {
                console.log("Error is found")
            }
        };
        getProducts();
    }, []);

    return (
        <div>

            {res.length === 0 ? "Loading" :
                <div>
                    {res.map(prod => {
                        return <div className="list-container">
                            <div className="List-response">
                                <p>{prod.id}</p>
                                <ul>
                                    <li>ID: {prod.id}</li>
                                    <li>Title :{prod.title}</li>
                                    <li>Category: {prod.category}</li>
                                    <li>Rating :{prod.rating.rate} {prod.rating.count}</li>
                                    <li>Description :{prod.description}</li>
                                    <li>Image: {prod.image}</li>
                                    <li></li>
                                </ul>

                            </div>
                        </div>
                    })}
                </div>
            }

        </div>
    );
}
export default ListApi;