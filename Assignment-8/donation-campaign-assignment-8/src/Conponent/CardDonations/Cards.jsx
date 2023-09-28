import { Link } from "react-router-dom";

const Cards = ({donation}) => {
    // console.log(donation);

    const {id,picture,title,category,category_bg,card_bg,text_button_bg} = donation || {}


    return (
        <div>
            <Link to={`/donations/${id}`}>
            <div style={{backgroundColor:card_bg}} className="card card-compact w-[500px] md:w-full h-[283px] bg-base-100 shadow-xl">
                <figure><img className="h-[194px]" src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <p><small style={{color:text_button_bg,backgroundColor:category_bg}}>{category}</small></p>
                    <h2 style={{color:text_button_bg}} className="card-title">{title}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default Cards;