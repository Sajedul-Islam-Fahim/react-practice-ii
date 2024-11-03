import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
import { BiSolidPurchaseTag } from "react-icons/bi";

const PriceOption = ({option}) => {
    const {name, price, features, currency} = option;
    
    return (
        <div className="bg-green-400 rounded p-4 m-4 flex flex-col">
            <h2 className="text-center">
                <span className="text-5xl font-extrabold">{`${price} ${currency}`}</span>
                <span className="text-2xl">/month</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
            <div className="pl-6 flex-grow">
                {
                    features.map((feature,index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className="flex items-center justify-center mt-12 bg-white w-full py-4 rounded-lg hover:bg-slate-500 font-bold"><BiSolidPurchaseTag></BiSolidPurchaseTag> Purchase</button>
        </div>
    );
};

PriceOption.propTypes = {
    option : PropTypes.object
}
export default PriceOption;