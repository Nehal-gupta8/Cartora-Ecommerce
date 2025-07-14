import axios from "axios";
import { createContext, useContext, useState, useMemo, useCallback } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState();

    const fetchAllProducts = useCallback(async () => {
        try {
            const res = await axios.get('https://fakestoreapi.in/api/products?limit=150');
            const productsData = res.data.products;
            setData(productsData);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => curElem[property]);
        newVal = ["All", ...new Set(newVal)];
        return newVal;
    };

    const categoryOnlyData = useMemo(() => getUniqueCategory(data, "category"), [data]);
    const brandOnlyData = useMemo(() => getUniqueCategory(data, "brand"), [data]);

    const value = useMemo(() => ({
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData
    }), [data, fetchAllProducts, categoryOnlyData, brandOnlyData]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};

export const getData = () => useContext(DataContext);
