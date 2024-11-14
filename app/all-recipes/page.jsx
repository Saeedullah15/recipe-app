"use client"
import HttpKit from "../../common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { addToCart } from "../../common/helpers/CartUtils";

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    // console.log(recipes);

    const { data, isLoading, error } = useQuery({
        queryKey: ["allRecipes"],
        queryFn: HttpKit.getAllRecipes,
    });

    useEffect(() => {
        if (data) {
            setRecipes(data);
        }
    }, [data]);

    const handleAddToCart = (recipe) => {
        addToCart(recipe);
        Swal.fire("Recipe added to cart!");
    };

    if (isLoading) return <p className="text-center my-5"><span className="loading loading-spinner text-info"></span></p>;
    if (error) return <div>Error loading recipes: {error.message}</div>;

    return (
        <div className="bg-gray-50 min-h-screen flex items-center">
            <div className="container mx-auto my-10 w-5/6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-20">
                    {
                        recipes.map((recipe) => (
                            <div key={recipe?.idMeal}
                                className="group space-y-6 border border-gray-100  rounded-3xl bg-white  px-4 py-4 text-center shadow hover:cursor-pointer hover:shadow-xl transition duration-200 shadow-gray-600/10"
                            >
                                <Image
                                    priority={true}
                                    className="mx-auto rounded-2xl"
                                    src={recipe?.strMealThumb}
                                    alt="Web Development"
                                    width={500}
                                    height={500}
                                />
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {recipe?.strMeal}
                                </h3>
                                <p>
                                    Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum,
                                    consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea
                                    animi officiis.
                                </p>
                                <button onClick={() => handleAddToCart(recipe)}
                                    className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12">
                                    <span className="text-yellow-900 font-semibold">
                                        Add to Cart
                                    </span>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default AllRecipes;
