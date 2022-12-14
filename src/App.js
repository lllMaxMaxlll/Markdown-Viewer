import React, { useState } from "react";
import "./App.css";
import { defaultPreview } from "./components/defaultPreview";
import Preview from "./components/Preview";
import TextArea from "./components/TextArea";

const App = () => {
	//State to save textarea
	const [markdown, setMarkdown] = useState({ text: defaultPreview });

	// Controlled input
	const handleChange = (e) => {
		setMarkdown({ text: e.target.value });
	};

	// Count words
	const countWords = markdown.text.split(" ").length;

	return (
		<div className='App'>
			{/* <div className='buttons'>
				<span></span>
				<span></span>
				<span></span>
			</div> */}
			<div className='countwords'>
				<span>{`${countWords} words`}</span>
			</div>
			<h1 className='mainTitle'>README.md</h1>
			<div className='containerText'>
				<TextArea markdown={markdown} handleChange={handleChange} />
				<Preview markdown={markdown} />
			</div>
		</div>
	);
};

export default App;
