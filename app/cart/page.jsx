"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getCart } from "../../common/helpers/CartUtils";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    // console.log(cartItems);

    useEffect(() => {
        const items = getCart();
        setCartItems(items);
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen flex">
            <div className="container mx-auto my-10 w-5/6">
                {
                    cartItems.length > 0 ?
                        <p className="text-center text-2xl font-semibold mt-20">
                            You have <span className="text-yellow-600">{cartItems.length}</span> items in your cart.
                        </p>
                        :
                        ""
                }
                {
                    cartItems.length > 0 ?
                        (
                            <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
                                {
                                    cartItems.map(item =>
                                    (
                                        <div key={item.idMeal}
                                            className="w-96 group space-y-6 border border-gray-100 rounded-3xl bg-white px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10"
                                        >
                                            <Image
                                                priority={true}
                                                className="mx-auto rounded-2xl h-60"
                                                src={item?.strMealThumb}
                                                alt="Web Development"
                                                // loading="lazy"
                                                width={500}
                                                height={500}
                                            />
                                            <h3 className="text-2xl font-semibold text-gray-800">
                                                {item?.strMeal}
                                            </h3>
                                            <p>
                                                Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
                                                consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
                                                animi officiis.
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                        :
                        (
                            <p className="text-center text-2xl font-semibold mt-20">Your cart is empty.</p>
                        )
                }
            </div>
        </div>

    );
};

export default Cart;
