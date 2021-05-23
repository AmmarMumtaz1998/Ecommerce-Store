import axios from "axios";
import {useState, useEffect} from "react";


function useFetchProducts() {
 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            let products = await axios.get('https://fakestoreapi.com/products');
            setProducts(products.data);
        } catch(err) {
            console.log("error", err);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect (()=>{
        fetchProducts()
    },[])

    return [products, loading]
}

export default useFetchProducts;