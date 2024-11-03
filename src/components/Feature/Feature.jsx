import PropTypes from "prop-types";
import { TiInputChecked } from "react-icons/ti";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><TiInputChecked className="mr-2 text-3xl"></TiInputChecked>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;