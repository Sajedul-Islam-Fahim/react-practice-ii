import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const [priceOptions, setPriceOptions] =  useState([]);

    useEffect(()=>{
        fetch('priceOptions.json')
        .then(res => res.json())
        .then(data =>  setPriceOptions(data))

    },[])
    return (
        <div className="m-12">
            <h2 className="text-7xl mb-10 text-center">Best Prices in the town</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;