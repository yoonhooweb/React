import { useState } from 'react';
import './App.css'

function App() {

	let [data, setData] = useState(['남자코드추천', '강남우동맛집', '파이썬독학']);
	let [count, setCount] = useState([0,0,0]);
	let [modal, setModal] = useState("open");

	return (
		<div className='app'>
			<div className='black-nav'>
				<h4>블로그</h4>
			</div>
			<ul className='list'>
				{
					data.map((item , index) => {
						return (
							<li key={index}>
								<h4 onClick={() => setModal ( modal == 'open' ? 'close' : 'open' )}>
									{item}
									{/* <span onClick={() => setCount(count + 1)}>👍</span> */}

									<button onClick={ () => {
										console.log(count);
										let newArray = count;
										newArray[index] = newArray[index] + 1; 
										console.log(newArray);
										setCount(newArray);
									}}>👍👍👍👍👍</button>

									<span>{count[index]}</span>
								</h4>
								<p>2월 17일 발행</p>
							</li>
						)
					})
				}
			</ul>
			<button onClick={() => {
				let dataCopy = [...data];
				dataCopy[0] = '여자코트추천';
				setData(dataCopy);
			}}>여자코트 추천</button>

			<button onClick={() => {
				let dataSort = [...data];
				dataSort = dataSort.sort();
				setData(dataSort)
			}
			}>가나순정렬</button>

			{
				modal == 'open' ? <Modal /> : null
			}


		</div>
	)
}

const Modal = () => {
	return (
		<div className='modal'>
			<h4>제목 : </h4>
			<p>날짜 : </p>
			<p>상세내용 : </p>
		</div>
	)
}

export default App
