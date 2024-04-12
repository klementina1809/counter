import React from "react";
import { Row, Col } from "react-grid-system";

function User({ user, currentUser, onDelete, onClick }) {
	return (
		<Row className="user">
			<Col sm={2}/>
			<Col sm={3}>
				<span
					onClick={() => onClick(user)}
					className={`flex text-left font-semibold ${
						user.id === currentUser ? "text-red-500" : ""
					}`}
				>
					{user.name}
				</span>
			</Col>
			<Col sm={2}>
				<span>{user.money}</span>
        
			</Col>
			<Col sm={2}>
				<button
					className="px-2 my-2 border-2 rounded-md bg-red-400 text-white border-red-400 hover:bg-red-500 focus:outline-none"
					onClick={() => onDelete(user.id)}
				>
					x
				</button>
			</Col>
			<Col sm={2} />
		</Row>
	);
}

export default User;
