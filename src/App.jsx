import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import { Container, Row, Col } from "react-grid-system";

import Input from "./components/Input";
import User from "./components/User";

import "./App.css";

function App() {
	const [currentUser, setCurrentUser] = useState(0);
	const [value, setValue] = useState("");
	const [users, setUsers] = useLocalStorage("users", []);

	useEffect(() => {
		console.log("currentUser", currentUser);
	}, [currentUser]);

	const handleChange = (e) => {
		const newValue = e.target.value;
		setValue(newValue);
	};

	const handleDelete = (id) => {
		if (!verifyDelete()) return;
		const newUsers = users.filter((user) => user.id !== id);
		setUsers(newUsers);
	};

	const verifyDelete = () => {
		const result = window.confirm("Are you sure?");
		return result;
	};
	const handleClear = () => {
		if (!verifyClear()) return;
		const updatedUsers = users.map((user) => ({ ...user, money: 0 }));
		setUsers(updatedUsers);
		console.log("cleared");
	};

	const verifyClear = () => {
		const result = window.confirm("Are you sure?");
		return result;
	};

	const generateId = () => {
		const id = users[users.length - 1].id + 1;
		console.log(id);
		return id;
	};

	const handleAddUser = (e) => {
		e.preventDefault();
		if (value.trim() === "") return;
		setValue("");
		const newUser = { id: generateId(), name: value, money: 0 };
		setUsers([...users, newUser]);
		console.log("Submitted");
	};

	const handleAddMoney = (fish) => {
		const userIndex = users.findIndex((user) => user.id === currentUser);
		const updatedMoney = users[userIndex].money + fish;
		const updatedUser = { ...users[userIndex], money: updatedMoney };
		const updatedUsers = [...users];
		updatedUsers[userIndex] = updatedUser;
		setUsers(updatedUsers);
	};

	const selectUser = (id) => {
		setCurrentUser(id);
	};

	return (
		<Container>
			<Row>
				<Col xs={8}>
					<Input
						name={"user"}
						value={value}
						onChange={(e) => handleChange(e)}
					/>
				</Col>
				<Col xs={4}>
					<button
						type="submit"
						className="p-2 border-2 rounded-md font-semibold bg-red-400 text-white border-red-400 hover:bg-red-500 "
						onClick={handleAddUser}
						style={{ width: "100%" }}
					>
						Add
					</button>
				</Col>
			</Row>
			<Row className="mt-10">
				<Col sm={12}>
					{users.map((user) => (
						<User
							key={user.id}
							user={user}
							onDelete={handleDelete}
							onClick={() => selectUser(user.id)}
							currentUser={currentUser}
						/>
					))}
					<div className="chips my-8">
						<div className="chip" data-value="+0.5">
							<img
								src="./img/10.png"
								alt=""
								onClick={() => handleAddMoney(0.5)}
							/>
						</div>
						<div className="chip" data-value="+1">
							<img
								src="./img/20.png"
								alt=""
								onClick={() => handleAddMoney(1)}
							/>
						</div>
						<div className="chip" data-value="+5">
							<img
								src="./img/50.png"
								alt=""
								onClick={() => handleAddMoney(5)}
							/>
						</div>
						<div className="chip" data-value="-0.5">
							<img
								src="./img/10.png"
								alt=""
								onClick={() => handleAddMoney(-0.5)}
							/>
						</div>
						<div className="chip" data-value="-1">
							<img
								src="./img/20.png"
								alt=""
								onClick={() => handleAddMoney(-1)}
							/>
						</div>
						<div className="chip" data-value="-5">
							<img
								src="./img/50.png"
								alt=""
								onClick={() => handleAddMoney(-5)}
							/>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12} style={{ textAlign: "center" }}>
					<button
						onClick={handleClear}
						className="p-2 border-2 rounded-md font-semibold bg-gray-400 text-white border-gray-400 hover:bg-gray-500"
					>
						Clear
					</button>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
