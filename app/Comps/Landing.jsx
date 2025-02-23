"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Bar from "../../public/bar-chart.png";
import Achieve from "../../public/band.png";
import Docs from "../../public/documents.png";
import { Separator } from '@/components/ui/separator';
import Target from "@/public/target.png";
import LineCharts from "@/public/trend.png";
import Trophy from "@/public/trophy.png";
import Done from "@/public/check.png";
import Pad from "@/public/notebook.png";
import Html_Img from "@/public/html-5.png";

import PopForm from './PopForm'; // Make sure to import PopForm
import { useFormData } from '../context';


import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { Progress } from "@/components/ui/progress"

import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';







export function valueFormatter(value) {
    return `${value}mm`;
}

const Landing = () => {

    const sites = [{ image: Bar, title: "Dashboard", link: "dashboard" }, { image: Achieve, title: "Skill Test", link: "" }, { image: Docs, title: "Internship", link: "internship" },];

    const { formData } = useFormData(); // Access form data from context
    const [openModal, setOpenModal] = useState(false); // State to control the modal visibility

    const OpenForm = () => {
        setOpenModal(true); // Open the modal when "Update" is clicked
    };

    const CloseForm = () => {
        setOpenModal(false); // Close the modal when "Cancel" is clicked in PopForm
    };


    const data2 = [
        { label: 'Group A', value: 2400 },
        { label: 'Group B', value: 4567 },
        { label: 'Group C', value: 1398 },
        { label: 'Group D', value: 7800 },

    ];

    const InfoData = [
        { title: 'HTML Tools, Forms, History', size: 33, percent: 40 },
        { title: 'Tags & Refernce in HTML', size: 88, percent: 95 },
        { title: 'Table & Refernces in HTML', size: 64, percent: 60 },
        { title: 'Table & Css Basics', size: 20, percent: 20 },
    ]

    const Stats = [
        { image: Trophy, data: formData.rank, description: "Your Rank" },
        { image: Pad, data: `${formData.percentile}%`, description: "Your Percentile" },
        { image: Done, data: formData.score, description: "Correct Answers" }
    ];

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: true, // Animation happens only once
            easing: "ease-in-out",
        });
    }, []);




    return (
        <>
            <div className="w-full h-auto grid grid-rows-1 md:grid-cols-4 lg:grid-cols-5 place-items-center px-2 lg:px-0 mb-14">

                {/* for screen bigger thean lg */}
                    
                <div className='md:hidden flex w-full h-full lg:flex'>
                    
                <div className='flex lg:self-start w-full lg:w-[60%] h-auto lg:flex'>
                    
                    <div className="lg:flex lg:self-start mt-10 w-full lg:w-full justify-evenly h-full lg:flex-col flex ">
                        
                        {sites.map((site, idx) => (
                             <Link key={idx} href={`${site.link}`}>
                                <div className=" w-auto flex lg:py-5 lg:gap-7 gap:2 lg:px-3 items-center lg:hover:bg-slate-300 lg:hover:border-b-2  hover:text-blue-300 hover:text-blue-800 lg:rounded-r-full" key={idx}>
                                <Image className="w-10" src={site.image} alt="Icons" />
                                <h1 className="text-lg">{site.title}</h1>
                            </div>
                             </Link>
                         
                        ))}

                       

                        


                    </div>
                </div>
                
                    <Separator className="hidden lg:block h-full mx-auto" orientation="vertical" />
                </div>


                <div className='w-full md:col-span-4 md:flex gap-x-3 mt-10 '>


                    <div data-aos="fade-up" className='w-full h-auto md:col-span-2 grid grid-cols-1 gap-9'>
                        <div className='text-2xl' >
                            <h1>Skill Test</h1>
                        </div>
                        {/* HYPERTEXT */}
                        <div className='w-full bg-white outline-none flex py-5 gap-x-4 border-2 rounded-lg items-center'>

                            <div className='w-[8rem]'>
                                <Image src={Html_Img} width={80} alt='HTML Icon' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h1>Hyper Text Markup Language</h1>
                                <p>Questions: 8 | Duration : 1hr | Submitted On: 5 June 2021</p>
                                <button onClick={OpenForm} className='w-28 p-2 bg-blue-500 text-white font-bold rounded-sm hover:bg-black'>
                                    Update
                                </button>

                            </div>
                        </div>

                        {/* Quick Statistics */}
                        <div className='w-full px-5 lg:px-0 py-5 space-y-5 border-2 rounded-xl bg-white'>
                            <h1 className='font-bold text-xl lg:px-5'>Quick Statistics</h1>

                            <div className='lg:w-full lg:flex'>

                                <div className='w-full flex flex-col lg:flex-row py-5 lg:py-0 gap-x-5 lg:gap-0 gap-y-6'>

                                    {Stats.map((stat, idx) => {
                                        return <div className='w-full h-auto lg:flex flex gap-x-12 lg:gap-x-0 items-center' key={idx}>
                                            <div className='w-[4rem] h-[4rem] bg-slate-100 rounded-full pt-5 lg:mx-2 lg:relative'>
                                                <Image src={stat.image} className='lg:absolute top-1 left-4 w-[90%] h-[80%] lg:w-[50%] object-contain mx-auto ' width={300} alt="ophy Percentile" />
                                            </div>


                                            <div>
                                                <h1 className='text-3xl '>{stat.data}</h1>
                                                <h1 className='text-gray-400'>{stat.description}</h1>
                                            </div>
                                        </div>
                                    }

                                    )}

                                </div>
                            </div>


                        </div>

                        {/* Comparison Graph */}
                        <div className=' bg-white flex flex-col gap-y-5 rounded-xl border-2 overflow-hidden'>
                            <h1 className='px-5 pt-5 font-bold text-xl'>Comparison Graph</h1>
                            <div className='flex gap-x-5 px-5'>
                                <p>
                                    <strong>{`You Scored ${formData.percentile} percentile`},</strong> which is lower than the average percentile of 72% of all the engineers who took the assignment.
                                </p>
                                <div className='hidden lg:block w-24 h-12 bg-slate-400 rounded-full '>
                                    <Image className='object-contain mx-auto pt-2' width={30} height={30} src={LineCharts} alt='line chart percenti' />
                                </div>

                            </div>
                            <LineChart className='lg:w-[70%] lg:h-auto'
                              xAxis={[
                                { 
                                  data: [1, 2, 3, 5, 8, 10], 
                                  label: "Test Attempts" // X-Axis Label
                                }
                              ]}
                              yAxis={[
                                { 
                                  
                                  label: "Percentile" // X-Axis Label
                                }
                              ]}
                              series={[
                                {
                                    data: [2, 5.5, 2, 5, formData.percentile, 8],
                                    color: "blue",
                                    showMark: true,
                                },
                            ]}
                           
                            

                            />
                        </div>

                       
                    </div>

                    <div data-aos="fade-up" className='w-full md:col-span-2 space-y-5 mt-10 lg:mt-16'>
                        <div className='w-full bg-white md:col-span-2 py-10 px-5 border-2 rounded-lg'>
                            <div className='flex flex-col gap-y-7'>
                                <h1 className='font-bold text-lg'>Syllabus Wise Analysis</h1>

                                {InfoData.map((data, idx) => {
                                    return (
                                        <div key={idx} className='w-full flex justify-between items-end'>
                                            <div className='w-[80%] flex- flex-col'>
                                                <h1 className='text-gray-600'>{data.title}</h1>
                                                <Progress className="w-full" value={data.size} />
                                            </div>
                                            <h1 className='font-bold'>{data.percent}%</h1>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Question Analysis */}
                        <div className='w-full px-5 flex flex-col gap-y-5 border-2 rounded-lg pt-10'>
                            <div className='w-full flex justify-between font-bold'>
                                <h1 className='text-lg'>Question Analysis</h1>
                                <h1>{formData.score}/15</h1>
                            </div>

                            <div>
                                <h1>
                                    <strong>{`You Scored ${formData.score} Questions Out of 15.`}</strong> However, it still needs some improvement.
                                </h1>
                                <div className="relative w-[20rem] h-[300px] mx-auto">
                                    <PieChart
                                        series={[
                                            {
                                                data: data2,
                                                innerRadius: 50,
                                                outerRadius: 100,
                                            },
                                        ]}
                                        height={300}
                                        slotProps={{
                                            legend: { hidden: true },
                                        }}
                                    />
                                    <div className="absolute md:top-[7.7rem] md:left-[5.5rem] top-[7.7rem] left-[5.5rem] ">
                                        <Image
                                            src={Target}
                                            alt="Target Icon"
                                            width={50}
                                            height={50}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Modal Popup */}
            {openModal && <PopForm CloseForm={CloseForm} />}
        </>
    );
};

export default Landing;






