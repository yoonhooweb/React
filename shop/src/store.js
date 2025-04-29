import { configureStore, createSlice } from "@reduxjs/toolkit";

let cartData = createSlice( {
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2, title : 'White and Black'},
        {id : 2, name : 'Grey Yordan', count : 1, title : 'Grey Yordan'}
    ],
    reducers : {
        countPlus ( state, action ) {
            let id = action.payload; //오브젝트에서 보낸 값 저장됨
            let items = state.find( (v) => {return v.id == id }) //스테이트를 돌리면 initialState 값이 돌음음
            if (items) {
                items.count += 1;
            }
        },
        addItems( state, action ) {
            let item = action.payload;
            let found = state.find((v) => item.id == v.id )

            if (found) {
                found.count += 1;
            } else {
                state.push({...item , count : 1});
            }
        },
        removeItem( state, action) {
            let item = action.payload;
            let remove = state.findIndex((v) => item == v.id )
            let remov1e = state.findIndex(function(v) {
                console.log(v);
            } )
            
            
            if (state[remove].count > 1) {
                state[remove].count -= 1;
            } else {
                let countDown = state.findIndex((v) => item == v.id )
                if (countDown > -1 ) {
                    state.splice(remove, 1)
                }
            }

        },
    }
})

let userName = createSlice( {
    name : 'user',
    initialState : {name : 'kim', age : 20},
    reducers : {
        changeName( state, action ) {  //기존 스테이트 kim 이 들어가있음
            return {name : 'park', age : 20}
        },

    }
}) 

let watched = createSlice ({
    name : 'detailItem',
    initialState : JSON.parse(localStorage.getItem('watched')),
    reducers : {
        detailItems(state, action) {
            console.log(state);
            return state
        }
    }
})

//userName 안에 들어있는 스테이트 변경 방법  및 밖으로 꺼내서 사용하는법
export let { changeName } = userName.actions  //이걸 사용하면 변경함수들이 여기에 남음
export let { countPlus } = cartData.actions  //이걸 사용하면 변경함수들이 여기에 남음
export let { addItems } = cartData.actions  //이걸 사용하면 변경함수들이 여기에 남음
export let { removeItem } = cartData.actions  //이걸 사용하면 변경함수들이 여기에 남음
export let { detailItems } = watched.actions

export default configureStore({
    reducer: {
        cartData : cartData.reducer,
        userName : userName.reducer,
        detailItems : watched.reducer
    },
});
