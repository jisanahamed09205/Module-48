import { Link } from "react-router-dom";

const DonateCard = ({card}) => {

    const {id,picture,title,text_button_bg,description,price,category,category_bg,card_bg} = card || {}


    return (
        <div className="mb-10">
            <div style={{backgroundColor:card_bg}} className="card card-side shadow-xl h-[200px]">
                <figure><img className="h-[200px] w-[200px]" src={picture} alt="Movie"/></figure>
                <div className="card-body">
                    <p ><small style={{color:text_button_bg,backgroundColor:category_bg}}>{category}</small></p>
                    <h2 className="font-bold">{title}</h2>
                    <p style={{color:text_button_bg}}>${price}</p>
                    <Link to={`/donations/${id}`}>
                        <div className="card-actions justify-start">
                            <button style={{backgroundColor:text_button_bg}} className="px-5 py-2 bg-green-600 text-white rounded">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonateCard;