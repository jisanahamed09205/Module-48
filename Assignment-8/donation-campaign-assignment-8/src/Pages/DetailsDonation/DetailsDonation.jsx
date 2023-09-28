import swal from "sweetalert";

const DetailsDonation = ({card}) => {

    const {id,picture,title,text_button_bg,description,price} = card || {}

    const handleAddDonation = () =>{
        // console.log(card);

        const addDonatesArray = [];

        const donateItem = JSON.parse(localStorage.getItem('donates'));

        if(!donateItem){
            addDonatesArray.push(card)
            swal("Good job!", "Your Donation Successfully!", "success");
            localStorage.setItem('donates',JSON.stringify(addDonatesArray));
        }
        else{
            swal("Good job!", "Your Donation Successfully!", "success");
            const isExits = donateItem.find((card)=>card.id === id)
            // console.log(isExits);
            if(!isExits){
                addDonatesArray.push(...donateItem,card)
                localStorage.setItem('donates',JSON.stringify(addDonatesArray));
                
            }
            else{
                swal("Error!", "Already Exist!", "warning");
            }

            
        }
    }
                {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div>
                        <img className="lg:h-[700px] w-full rounded-lg" src="https://i.ibb.co/nmpdDHL/water-1.jpg" alt="" />
                        <h2 className="text-3xl font-bold">Child-Friendly Clean Water Solutions</h2>
                        <p>Child-Friendly Clean Water Solutions refer to initiatives and strategies designed specifically to ensure that children have access to safe, potable water. These solutions focus on implementing practices and technologies that are not only effective in purifying water but also tailored to the unique needs and vulnerabilities of young individuals. This can involve the installation of child-friendly water facilities, such as low-height taps and filtration systems that are easy for children to use. Additionally, education programs may be implemented to teach children about the importance of clean water and proper hygiene practices. These solutions aim to safeguard the health and well-being of children, recognizing their particular susceptibility to waterborne diseases and the critical role that clean water plays in their growth, development, and overall quality of life.</p>
                    </div >
                    <div className="hudai" className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello there</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

            {/* <ul>
                <li className="image_wrapper">
                    <img src="https://i.ibb.co/nmpdDHL/water-1.jpg" alt="" />
                    <div className="overlay overlay_1">
                        <button className=" btn btn-primary ">Click me</button> 
                    </div>
                </li>
            </ul> */}

    return (
        <div>
            <div className="image_wrapper hero h-96 md:min-h-screen" style={{backgroundImage:`url(${picture})`}}>
                <div className="overlay overlay_1 text-neutral-content">
                    <button onClick={handleAddDonation} style={{backgroundColor:text_button_bg}} className="btn normal-case text-white border-none">Donate ${price}</button>
                </div>
            </div>
            <h1 className="mt-14 text-2xl md:text-5xl font-bold">{title}</h1>
            <p className="mt-6 mb-32">{description}</p>
        </div>
    );
};

export default DetailsDonation;