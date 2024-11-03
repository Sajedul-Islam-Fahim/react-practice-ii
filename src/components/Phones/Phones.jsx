import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const withFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(withFakeData);
            
        })
    },[])
    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="green" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;