import { useLoaderData } from "react-router-dom";
import CardDonations from "../../Conponent/CardDonations/CardDonations";
import { useState } from "react";

const Home = () => {
    const donations = useLoaderData();
    // console.log(donation);
    const [allCards, setAllCards] = useState(donations);
    const [searched,setSearched] = useState(donations);
    const handleCategorySearch = (e) => {
        const search = document.getElementById("searchedText").value;
        // console.log(search);
        e.preventDefault();
        if(search.length) {
            const filterCard = allCards.filter(
                (card) => card.category.toLowerCase() === search.toLowerCase()
            );
            if(filterCard){
                setSearched(filterCard);
            }
        }
        else{
            setSearched(allCards);
        }
        // console.log('Hi ami handle search e cap dece');
    };





    return (
        <div>
            <div className="lg:h-[600px]">
                <div className="hero h-[30vh] md:h-[50vh] lg:h-[70vh]" style={{backgroundImage: 'url(https://i.ibb.co/nPktXDp/banner.png)'}}>
                    <div className="hero-overlay bg-opacity-80 bg-white"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md text-black">
                            <h1 className="mt-5 text-xl md:text-2xl font-semibold">I Grow By Helping People In Need</h1>
                            <div  className="w-full max-w-xl flex mx-auto p-20 text-xl">
                                <input
                                    id='searchedText'
                                    type="text"
                                    className="w-full outline-none shadow-2xl md:w-96 placeholder-gray-400 text-gray-900 rounded-l-lg p-4"
                                    placeholder="Search here"
                                />
                                <button onClick={handleCategorySearch} className="bg-[#FF444A] text-white rounded-r-lg p-4">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardDonations searched={searched}></CardDonations>
        </div>
    );
};

export default Home;