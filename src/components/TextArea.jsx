import React from "react";
import styles from "./css/TextArea.module.css";

export const TextArea = (props) => {
	return (
		<div className={styles.textarea}>
			<textarea
				className={styles.editor}
				onChange={props.handleChange}
				value={props.markdown.text}
			/>
		</div>
	);
};

export default TextArea;
