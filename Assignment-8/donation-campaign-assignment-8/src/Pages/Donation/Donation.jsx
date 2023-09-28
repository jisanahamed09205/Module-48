import { useEffect } from "react";
import { useState } from "react";
import DonateCard from "./DonateCard";

const Donation = () => {

    const [donation,setDonation] = useState([]);
    const [noDonate,setNoDonate] = useState(false);
    // const [showAll,setShowAll] = useState(false);
    const [showAll,setShowAll] = useState(4);

    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem('donates'));
        if(donateItem){
            setDonation(donateItem);
        }
        else{
            // console.log('No data found');
            setNoDonate('No Donation Please Donate to Us')
        }
    },[])
    // console.log(donation);

    // console.log(showAll);


    return (
        <div>
            {
                noDonate ? <p className="h-[80vh] text-2xl flex justify-center items-center">{noDonate}</p> 
                : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            donation?.slice(0,showAll).map(card=> <DonateCard key={card.id} card={card}></DonateCard>)
                        }
                    </div>

                    {donation.length > 4 && <div className={showAll === donation.length && 'hidden'}>
                        <button onClick={()=>setShowAll(donation.length)} className="px-5 py-2 rounded-lg text-white bg-green-600 block mx-auto" >See All</button>
                    </div>}
                </div>
            }
        </div>
    );
};

export default Donation;