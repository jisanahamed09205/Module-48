import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const donation = useLoaderData();
    // console.log(donation);

    const totalDonates = donation;
    const mineDonates = JSON.parse(localStorage.getItem('donates'));
    //  console.log(mineDonates);
    let remaining = 0;
    let donates;
    if(mineDonates){
        donates = mineDonates.length;
        remaining = totalDonates.length - donates;
    }
    else{
        remaining = totalDonates.length;
    }

    const data = [
        { name: 'Total Donation', value: remaining },
        { name: 'Your Donation', value: donates },
    ];
    const COLORS = ['#FF444A','#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
    };

    return (
        <div className='py-16 mx-auto md:w-[660px] md:h-[660px]'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex gap-5 justify-center items-center'>
                <p>Your Donations</p>
                <p className='bg-[#00C49F] text-[#00C49F] rounded'>-------------</p>
                <p>Total Donations</p>
                <p className='bg-[#FF444A] text-[#FF444A] rounded'>-------------</p>
            </div>
            
        </div>
    );
};

export default Statistics;
