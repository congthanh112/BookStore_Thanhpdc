import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosClient from '../../../config/axiosClient';

axios.interceptors.request.use(
    (config) => {
        config.headers.authorization = `Bearer ${localStorage.getItem("jwtToken")}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const CategoryBar = () => {

    const [listCategory, setListCategory] = useState([]);

    useEffect(() => {
        console.log("CCCCCCCCCCCCCCC");
        const fetchRequest = async () => {
            await axiosClient
                .get('/category')
                .then((response) => {
                    console.log("RRRRRRRRRRRRRRR", response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        fetchRequest();
    }, []);

    return (
        <div>
            NNNNNNNNNNNNNN
        </div>
    )
}

export default CategoryBar;