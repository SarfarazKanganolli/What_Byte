'use client';
import React, { useEffect, useState } from 'react';
import { useFormData } from '../context/index'; // Import the custom hook to access form data
import { Input } from "../../components/ui/input";
import  HtmlImg  from "@/public/html-5.png";
import Image from 'next/image';

import AOS from "aos";
import "aos/dist/aos.css";




const PopForm = ({ CloseForm }) => {
    
    
        useEffect(() => {
            AOS.init({
              duration: 1000, // Animation duration in ms
              once: true, // Animation happens only once
              easing: "fade-in-out", //
            });
          }, []);
    

    const { formData, updateFormData } = useFormData(); // Access form data and update function from context

    const [formDetails, setFormDetails] = useState({
        rank: formData.rank,
        percentile: formData.percentile,
        score: formData.score
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));

        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateFormData(formDetails); // Update global form data on submit
        CloseForm(); // Close the modal after saving
        console.log(formDetails);
    };

    return (
        <div  className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            
            <div data-aos="flip-left" className='md:w-[50%] lg:w-[40%] max-md:w-[90%] mx-auto h-auto bg-white py-5 rounded-lg'>
            <div className='flex justify-between px-10 pt-2'>
                <h1 className='font-bold text-2xl'>Update Details</h1>
                <Image src={HtmlImg} width={50} alt='d'/>
            </div>

                <form className='flex flex-col gap-y-7 px-5 mt-10 lg:px-10' onSubmit={handleSubmit}>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="rank">Update Your Rank</label>
                        <Input
                           className="w-44"
                            type="text"
                            name="rank"
                            value={formDetails.rank}
                            onChange={handleInputChange}
                            placeholder="Rank"
                        />
                    </div>

                    <div className='flex justify-between items-center'>
                        <label htmlFor="percentile">Update Your Percentile</label>
                        <Input
                        className="w-44"
                            type="text"
                            name="percentile"
                            value={formDetails.percentile}
                            onChange={handleInputChange}
                            placeholder="Percentile"
                        />
                    </div>

                    <div className='flex justify-between items-center'>
                        <label htmlFor="score">Update Your Current Score</label>
                        <Input
                        className="w-44"
                            type="text"
                            name="score"
                            value={formDetails.score}
                            onChange={handleInputChange}
                            placeholder="Score"
                        />
                    </div>

                    <div data-aos="flip-left" className='flex mx-auto gap-x-5 mt-4 font-bold text-white '>
                        <button
                            className='hover:bg-slate-300 py-2 px-10 rounded-md bg-slate-900 hover:text-black'
                            type="button"
                            onClick={CloseForm}
                        >
                            Cancel
                        </button>
                        <button
                            className='bg-blue-300 hover:bg-blue-800 py-2 px-10 rounded-md'
                            type="submit"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopForm;
