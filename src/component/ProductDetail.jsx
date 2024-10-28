import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import './productdetail.css'
import { useAuth } from "./AuthContext";
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const {isLoggedIn} = useAuth();


    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };


    useEffect(() => {
        if (isLoggedIn) {
            fetchProduct();
        }
    }, [id, isLoggedIn]);

    if (!product) return <div>Loading...</div>;

    if (!isLoggedIn) return <Navigate to="/login" />;

    return (
        <div className="product-detail">
            <h2 className="title">{product.title}</h2>
            <div className="content">
                <img src={product.images[0]} alt={product.title} className="large-image" />
                <div className="details">
                    <p>{product.description}</p>
                    <p className="price">Price: ${product.price}</p>
                    <p className="rating">Rating: {product.rating}</p>
                    <p className="category">Category: {product.category}</p>
                    <p className="brand">Brand: {product.brand}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
