import React from "react";
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:5000';
const axiosBase_URL = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
});

export const getErrorMessage = (error) => {
    return error
        ? error.response
            ? error.response.data
                ? error.response.data.error_description
                    ? error.response.data.error_description
                    : error.response.data.errors.length > 0
                        ? error.response.data.errors[0].message
                        : error.message
                : error.message
            : error.message
        : 'Something went wrong';
};

export const predictDiabeties = async (requestBody) => {
    try {
        const responseData = await axiosBase_URL.post(`/predict_diabeties`, JSON.stringify(requestBody))
        console.log("Retunred value:", responseData);
        return responseData;
    } catch (error) {
        throw error
    }
}