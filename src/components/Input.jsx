import React from "react";

function Input({ value, onChange }) {
	return (
		<input
			placeholder="Inserisci il nome"
			type="text"
			onChange={onChange}
			value={value}
			style={{ width: "100%" }}
			className="input border-stone-400 p-2 border-2 text-stone-900 rounded-md focus:outline-none focus:border-stone-600 bg-white w-3/6"
		/>
	);
}

export default Input;
