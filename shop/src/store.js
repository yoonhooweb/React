import { configureStore, createSlice } from "@reduxjs/toolkit";

let cartData = createSlice( {
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        countPlus ( state ) {
            console.log(state);
        }
    }
    
})

let userName = createSlice( {
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName( state, action ) {  //기존 스테이트 kim 이 들어가있음
            return 'john' + state;
        }
    }
}) 

//userName 안에 들어있는 스테이트 변경 방법  및 밖으로 꺼내서 사용하는법
export let { changeName } = userName.actions  //이걸 사용하면 변경함수들이 여기에 남음
export let { countPlus } = cartData.actions  //이걸 사용하면 변경함수들이 여기에 남음

export default configureStore({
    reducer: {
        cartData : cartData.reducer,
        userName : userName.reducer
    },
});
