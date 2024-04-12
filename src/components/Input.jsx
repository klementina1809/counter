import React from "react";


function Input({ value, onChange }) {
	return (
		<div className="form">
			<label>New user</label>
			<input
				placeholder="Inserisci il nome"
				type="text"
				onChange={onChange}
				value={value}
				className="input border-stone-400 p-2 mt-2 mb-2 mr-1 border-2 text-stone-900 rounded-md focus:outline-none focus:border-stone-600 bg-white w-3/6"
			/>
		</div>
	);
}

export default Input;
