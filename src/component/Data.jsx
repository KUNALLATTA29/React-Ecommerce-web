
import { useState, useEffect } from "react"
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import './data.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

export default function Data() {
    const [products, setproducts] = useState([]);
    const [search, setsearch] = useState('');
    const [sortdata, setsortdata] = useState('')
    const [rating,setrating] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const fetch = async()=>{
        let response = await axios.get('https://dummyjson.com/products')
        setproducts(response.data.products); 
    }

    const filterData = () => {
        return products
            .filter((elem) => 
                elem.title.toLowerCase().includes(search.toLowerCase())
            )
            .filter((elem)=> rating === 0 || Math.round(elem.rating)=== rating)
            .sort(sortproducts);
    };

    const sortproducts = (a,b) => {
        if(sortdata === "ace"){
            return a.price - b.price;
        }else if(sortdata === "dec"){
            return b.price - a.price;
        }
        return 0;
    }


    const handleRating = (e) => {
        setrating(Number(e.target.value))
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
        alert(`Product has been added to the cart! `);
    };

    useEffect(()=>{
        fetch();
    },[]);
  return (
    <div className="container data">
        <input
            type="text"
            placeholder="search the text"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
        />
        <div>
            <button onClick={()=>setsortdata("ace")}>low to high</button>
            <button onClick={()=>setsortdata("dec")}>high to low</button>
        </div>
        <div className="rating-dropdown">
                <label htmlFor="rating">Select Rating: </label>
                <select id="rating" value={rating} onChange={handleRating}>
                    <option value={0}>All Ratings</option>
                    <option value={1}>1 Star</option>
                    <option value={2}>2 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={5}>5 Stars</option>
                </select>
        </div>
            <ul className="list">
                {filterData().map(product => (
                    <li key={product.id} className="list-item">
                        <LazyLoadImage
                        className="image"
                        src={product.images[0]}
                        effect="blur"
                        />
                        <h2 className="title">{product.title}</h2>
                        <p className="description">{product.description}</p>
                        <p className="price">Price: ${product.price}</p>
                        <p className="rating">Rating: {product.rating}</p>
                        <Link to={`/product/${product.id}`}>
                            <button>Show Detail</button>
                        </Link>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
  )
}