import { useEffect, useState } from "react";
import Header from './components/Header'
import Main from "./components/Main";
import Detail from "./components/Detail";
import moiveAPI from './services/movieApI'
import { Route, Routes } from "react-router-dom";

function App() {

   const [data, setData] = useState([]);
   const [search, setSearch] = useState('');

    useEffect ( () => {
        const axiosData = async () => {
            try {
                const res = await moiveAPI();
                setData(res.data);
            }catch(err) {
                console.log(' axios 에러' , err);
            }
        }
        axiosData();
    }, [])

    let filterData = [];

    if ( search ) {
        filterData = data?.products?.filter( (item) => {
           return item.title.toLowerCase().includes(search.toLowerCase())
        });
    } else {
        filterData = data?.products;
    }

    return (
        <div className="movie-app">
            <Header onSearch={setSearch}/>
            <Routes>
                <Route path="/" element={<Main data={filterData}/>}/>
                <Route path="/detail/:id" element={<Detail data={data}/>}/>
            </Routes>
        </div>
    );
}

export default App;
