import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main.js"
import Schedule from "./components/Schedule.js"
import TodoList from "./components/TodoList.js"
import MenuList from "./components/Menu.js"

function App() {

    return (
        <div className="text-white">
			<div className="relative isolate flex min-h-svh w-full bg-white bg-gray-500">
				<div className="fixed inset-y-0 left-0 w-64 max-lg:hidden text-black border-white shadow-xl/30">
					<div className="p-30 rounded-md border border-solid shadow-xl/30">
						<div className=" flex items-center bg-blue w-[100%] h-[200px] justify-center bg-white">	
							<span className="item-center bg-green-200 w-[60%] h-[150px] rounded-full">
								<img src="" alt="" />
							</span>
						</div>
						<nav className="p-3 bg-white min-h-svh ">
							<MenuList />
						</nav>
					</div>
				</div>
				<div className="flex flex-1 flex-col pb-2 lg:min-w-0 lg:pt-2 lg:pr-2 lg:pl-64 bg-gray">
					<div className="pl-3">
						<div className="h-[50px] w-full bg-white">
							<div className="relative">
								<input type="text" className="w-full"/>
								<button className="absolute text-blue right-0 bottom-0 z-999">검색</button>
							</div>
						</div>
						<Routes>
							<Route path="/" element={<Main/>}/>
							<Route path="/Schedule" element={<Schedule/>}/>
							<Route path="/TodoList" element={<TodoList/>}/>
						</Routes>
					</div>
				</div>
			</div>
        </div>
    );
}

export default App;
