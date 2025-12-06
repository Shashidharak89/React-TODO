// 2
import axios from "axios";
import { useEffect, useState } from "react";
const ApiTesting = () => {
    const [resp, setResp] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/1");
                setResp(res.data);
            } catch (error) {
                console.log("Error found");
            }
        };
        getProducts();
    }, []);
    console.log(resp);

    return (
        <div>
            <h1>Ecommerce Data</h1>

            <p>{!resp ? "Error" :
                <div>
                    <ul>
                        <li>ID: {resp.id}</li>
                        <li>Title :{resp.title}</li>
                        <li>Category: {resp.category}</li>
                        <li>Rating :{resp.rating.rate} {resp.rating.count}</li>
                        <li>Description :{resp.description}</li>
                        <li>Image: {resp.image}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            }</p>
        </div>
    );
}

export default ApiTesting;