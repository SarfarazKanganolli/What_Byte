'use client'
import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();


export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        rank: '10',
        percentile: '60',
        score: '13'
    });

    const updateFormData = (newData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...newData
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};

// Custom hook to use the FormContext
export const useFormData = () => {
    return useContext(FormContext);
};
