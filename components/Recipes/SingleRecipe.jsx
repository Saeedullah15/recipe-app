import HttpKit from "../../common/helpers/HttpKit";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

const SingleRecipe = ({ id, setIsOpen }) => {
    // console.log(id);

    const { data, isLoading, error } = useQuery({
        queryKey: ["recipe-details"],
        queryFn: () => HttpKit.getRecipeDetails(id),
    });
    // console.log(data);

    if (isLoading) return <p className="text-center my-5"><span className="loading loading-spinner text-info "></span></p>;
    if (error) return <div>Error loading recipes: {error.message}</div>;

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)} 
                className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                >
                    <span className="block text-yellow-900 font-semibold text-sm">
                        Close
                    </span>
                </button>
            </div>
            <div>
                <Image src={data?.strMealThumb} width={500} height={500} alt="Image" />
            </div>
            <h2 className="text2xl font-semibold">{data?.strMeal}</h2>
        </div>
    );
};

export default SingleRecipe;
