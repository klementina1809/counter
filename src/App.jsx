import { useState } from "react";
import useLocalStorage from "use-local-storage";
import Input from "./components/Input";
import User from "./components/User";

import "./App.css";

function App() {
	const [bet, setBet] = useState(0);
	const [value, setValue] = useState("");

	const [users, setUsers] = useLocalStorage("users", [
		{ name: "Davide", money: 0 },
		{ name: "Alessandro", money: 0 },
		{ name: "Federico", money: 0 },
		{ name: "Matteo", money: 0 },
	]);

	const handleChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
	};
  const handleDelete = (name) => {
    const newUsers = users.filter((user) => user.name !== name);
    setUsers(newUsers);
};

	const handleAdd = () => {
    if (value.trim() === "") return;
		setValue("");
		const newUser = { name: value, money: 0 };
		setUsers((prev) => [...prev, newUser]);
		console.log("Submitted");
	};

	return (
		<>
			<form onSubmit={(e) => e.preventDefault(handleAdd ())}>
				<div className="form">
					<Input
						name={"user"}
						value={value}
						onChange={(e) => handleChange(e)}
					/>
					<button
						type="submit"
						className="p-2 border-2 font-semibold bg-red-400 text-white border-red-400 hover:bg-red-500 focus:outline-none"
					>
						Add
					</button>
				</div>
			</form>
			<div className="users">
				{users.map((user) => (
					<User
						key={user.name}
						name={user.name}
						money={user.money}
						onDelete={handleDelete}
					/>
				))}
			</div>
			<div className="chips">
				<div className="chip" data-value="0.5">
					<img
						src="./img/10.png"
						alt=""
						onClick={() => setBet(0.5)}
					/>
				</div>
				<div className="chip" data-value="1">
					<img src="./img/20.png" alt="" onClick={() => setBet(1)} />
				</div>
				<div className="chip" data-value="5">
					<img src="./img/50.png" alt="" onClick={() => setBet(5)} />
				</div>
				<div className="chip" data-value="-0.5">
					<img
						src="./img/10.png"
						alt=""
						onClick={() => setBet(0.5)}
					/>
				</div>
				<div className="chip" data-value="-1">
					<img src="./img/20.png" alt="" onClick={() => setBet(1)} />
				</div>
				<div className="chip" data-value="-5">
					<img src="./img/50.png" alt="" onClick={() => setBet(5)} />
				</div>
			</div>
		</>
	);
}

export default App;
