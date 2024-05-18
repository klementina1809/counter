import React from "react";
import { Row, Col } from "react-grid-system";

function User({ user, currentUser, onDelete, onClick }) {
	return (
		<Row style={{ borderBottom: "1px solid white" }}>
			<Col xs={7} className="flex items-center">
				<span
					onClick={() => onClick(user)}
					className={`font-semibold ${
						user.id === currentUser ? "text-red-500" : ""
					}`}
				>
					{user.name}
				</span>
			</Col>
			<Col xs={2} className="flex items-center">
				<span>{user.money}</span>
			</Col>
			<Col
				xs={3}
				className="flex items-center"
				style={{ textAlign: "right" }}
			>
				<button
					className="px-2 my-2 border-2 rounded-md bg-red-400 text-white border-red-400 hover:bg-red-500 focus:outline-none"
					onClick={() => onDelete(user.id)}
				>
					x
				</button>
			</Col>
			<Col md={2} />
		</Row>
	);
}

export default User;
