import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import './Single.css'
import DetailsDonation from "../DetailsDonation/DetailsDonation";

const SingleCard = () => {

    const [card,setCard] =useState({});

    const pearm = useParams();


    const donations = useLoaderData();

    useEffect(()=>{
        const findDonations = donations?.find(card=> card.id == pearm.id)
        // console.log(findDonations)
        setCard(findDonations)
    },[pearm,donations])
    console.log(card);





    return (
        <div>
            <DetailsDonation card={card}></DetailsDonation>
        </div>
    );
};

export default SingleCard;