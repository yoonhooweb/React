import axios from "axios";

export const orderBy = (shoes) => {
    return [...shoes].sort((a, b) => a.title.localeCompare(b.title));
    
};

// 더보기 (새 데이터 가져오기)
export const getData = async (shoes , count) => {
    try {
        const response = await axios.get(`https://codingapple1.github.io/shop/data${count}.json`)
        let newArray = response.data;
        return  [...shoes, ...newArray];
    } catch (e) {
        console.log("데이터 가져오기 실패");
    }
};