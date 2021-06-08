import React from "react";
import { Fragment} from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
	return (
		<div
			className={classes.backdrop}
			id="Backdrop"
			onClick={props.onBackClose}
		/>
	);
};
const ModalOverlay = (props) => {
	return (
		<div className={classes.modal} id="Modal">
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onBackClose={props.onBackClose} />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
				>
					{props.children}
				</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};
export default Modal;
