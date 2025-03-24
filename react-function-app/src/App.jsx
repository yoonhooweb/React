import { useState } from "react";
import "./App.css";

/*
	1. 제목데이터 뿌리기 o
	2. 좋아요 기능 만들기 o
	3. 모달창 만들기 -> 각 모달별로 제목 다르게 뜨게하기
	4. 버튼누르면 글자 변경 o
	5. 정렬기능능 o
*/

function App() {
    //제목데이터
    let [fruitName, setFruitName] = useState(["d", "w", "a", "c"]);
    // 좋아요 카운팅
    let [like, setLike] = useState([0, 0, 0, 0]);
    let [isModal, setIsModal] = useState(false);
    let [modalTitle, setModalTitle] = useState("");

    function likeBtn(i) {
        let newLike = [...like];
        newLike[i]++;
        setLike(newLike);
        console.log(newLike);
    }

    function fruitNameReset() {
        let newName = [...fruitName];
        newName[0] = "딸기";
        setFruitName(newName);
    }

    function fruitSort() {
        let newSort = [...fruitName];
        newSort = newSort.sort();
        setFruitName(newSort);
    }

    const modalOpen = (i) => {
        setIsModal(true);
        setModalTitle(fruitName[i]);
    };

    const arrayPush = () => {
        let fruitInput = document.querySelector("#fruitInput");

        let pushArray = [...fruitName];
		if (fruitInput.value == '' && fruitInput.value == null) {
			alert("값이 비어있습니다.");
			return false;
		} else {
			pushArray.push(fruitInput.value);
			fruitInput.value = "";
			console.log(pushArray);
			setFruitName(pushArray);
		}
		let newLike = [...like];
        newLike.push(0);
        setLike(newLike);
    };

    const arrayRemove = (i) => {
		console.log(i);
        let removeArray = [...fruitName];
        removeArray.splice(i, 1);
        setFruitName(removeArray);

        let newLike = [...like];
        newLike.splice(i, 1);
        setLike(newLike);
    };

	const currentDate = new Date();
	const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    return (
        <>
            <h3 className="title">fruit</h3>
            <ul className="list">
                {fruitName.map((v, i) => {
                    return (
                        <li key={i}>


                            <span>{v}</span>
                            <button className="like" onClick={() => likeBtn(i)}>
                                👍
                            </button>
                            <span className="like-count"> {like[i]} </span>
                            <button onClick={() => modalOpen(i)}>모달</button>
                            <button onClick={() => arrayRemove(i)}>삭제</button>
                        </li>
                    );
                })}
            </ul>
            <button onClick={() => fruitNameReset()}>
                배열 첫번째 글자변경
            </button>
            <button onClick={fruitSort}>배열 정렬</button>
            <input type="text" id="fruitInput" />
            <button onClick={arrayPush}>배열추가</button>

            {isModal ? <Modal modalTitle={modalTitle} date={formattedDate}/> : null}
        </>
    );
}

function Modal(props) {
    return (
        <>
            <ul>
                <li className="title">{props.modalTitle}</li>
				<li>{props.date}</li>
            </ul>
        </>
    );
}

export default App;
