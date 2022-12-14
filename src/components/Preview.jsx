import React from "react";
import { marked } from "marked";
import styles from "./css/Preview.module.css";

// Add <br> in break line
marked.setOptions({
	breaks: true,
});

const Preview = (props) => {
	// Create html element with textarea content
	let preview = marked.parse(props.markdown.text);

	// innerHTML from React, inserted in div
	function createMarkup() {
		return { __html: preview };
	}

	return (
		<div
			dangerouslySetInnerHTML={createMarkup()}
			className={styles.preview}></div>
	);
};

export default Preview;
