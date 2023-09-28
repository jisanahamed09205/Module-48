import Cards from "./Cards";

const CardDonations = ({searched}) => {

    // console.log(donation);
    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 px-5">
                {
                    searched?.map(donation => <Cards key={donation.id} donation={donation}></Cards>)
                }
            </div>
            
        </div>
    );
};

export default CardDonations;