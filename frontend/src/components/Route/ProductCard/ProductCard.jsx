import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import {
    AiFillHeart,
    AiFillStar,
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineStar,
} from "react-icons/ai";
import { backend_url } from "../../../server";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, removeFromWishlist } from '../../../redux/actions/wishlist';
import { addTocart } from '../../../redux/actions/cart';
import { toast } from 'react-toastify';
import Ratings from "../../Products/Ratings";

const ProductCard = ({ data, isEvent }) => {
    const { wishlist } = useSelector((state) => state.wishlist);
    const { cart } = useSelector((state) => state.cart);
    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();



    useEffect(() => {
        if (wishlist && wishlist.find((i) => i._id === data._id)) {
            setClick(true);
        } else {
            setClick(false);
        }
    }, [wishlist]);

    // Remove from wish list 
    const removeFromWishlistHandler = (data) => {
        setClick(!click);
        dispatch(removeFromWishlist(data));
    }

    // add to wish list
    const addToWishlistHandler = (data) => {
        setClick(!click);
        dispatch(addToWishlist(data))
    }

    // Add to cart
    const addToCartHandler = (id) => {
        const isItemExists = cart && cart.find((i) => i._id === id);

        if (isItemExists) {
            toast.error("item already in cart!")
        } else {
            if (data.stock < 1) {
                toast.error("Product stock limited!");
            } else {
                const cartData = { ...data, qty: 1 };
                dispatch(addTocart(cartData));
                toast.success("Item added to cart Successfully!")
            }
        }
    }


    return (
        <>
            <div className="w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer group">
                <div className="flex justify-end"></div>

                <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
                    <img
                        src={`${backend_url}${data.images && data.images[0]}`}
                        alt="prd"
                        className="w-[99%] h-[170px] object-cover mx-auto"
                    />
                </Link>

                <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
                    <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
                </Link>

                <Link to={`/product/${data._id}`}>
                    <h4 className="pb-3 font-[500]">
                        {data.name.length > 40 ? data.name.slice(0, 40) + '...' : data.name}
                    </h4>

                    <div className="py-2 flex items-center justify-between">
                        <div className="flex">
                            <h5 className={`${styles.productDiscountPrice}`}>
                                {data.originalPrice === 0 ? data.originalPrice : data.discountPrice}৳
                            </h5>
                            <h4 className={`${styles.price}`}>
                                {data.originalPrice ? data.originalPrice + "৳" : null}
                            </h4>
                        </div>
                        <span className="font-[400] text-[17px] text-[#68d284]">
                            {data?.sold_out} sold
                        </span>
                    </div>
                </Link>

                {/* Icons Container */}
                <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {
                        click ? (
                            <div className="rounded-full bg-white shadow p-2 absolute right-5 top-5">
                                <AiFillHeart
                                    size={22}
                                    className="cursor-pointer"
                                    onClick={() => removeFromWishlistHandler(data)}
                                    color={click ? "red" : "#333"}
                                    title="Remove from wishlist"
                                />
                            </div>
                        ) : (
                            <div className="rounded-full bg-white shadow p-2 absolute right-5 top-5">
                                <AiOutlineHeart
                                    size={22}
                                    className="cursor-pointer"
                                    onClick={() => addToWishlistHandler(data)}
                                    color={click ? "red" : "#333"}
                                    title="Add to wishlist"
                                />
                            </div>
                        )}
                    <div className="rounded-full bg-white shadow p-2 absolute right-5 top-[70px]">
                        <AiOutlineEye
                            size={22}
                            className="cursor-pointer"
                            onClick={() => setOpen(!open)}
                            color="#333"
                            title="Quick view"
                        />
                    </div>
                    <div className="rounded-full bg-white shadow p-2 absolute right-5 top-[120px]">
                        <AiOutlineShoppingCart
                            size={25}
                            className="cursor-pointer"
                            onClick={() => addToCartHandler(data._id)}
                            color="#444"
                            title="Add to cart"
                        />
                    </div>
                </div>

                {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
            </div>
        </>
    )
}

export default ProductCard