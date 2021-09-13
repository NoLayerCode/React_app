import React, { useState } from 'react';

import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Icon from './components/Icon';

const itemArray = new Array(9).fill("empty");

const App = () => {

	const [isCross, setIsCross] = useState(false);
	const [winMsg, setWinMsg] = useState("");

	const reloadGame = () => {
		setIsCross(false);
		setWinMsg("");
		itemArray.fill("empty", 0, 9);
	};

	const checkWinner = () => {

	};

	const changeItem = itemNumber => {
		if (winMsg) {
			return toast(winMsg, { type: "success" });
		}

		if (itemArray[itemNumber] === "empty") {
			itemArray[itemNumber] = isCross ? "cross" : "circle";
			setIsCross(!isCross);
		} else {
			return toast("already filled", { type: 'error' });
		}
		checkWinner();
	};

	return (
		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					{winMsg ? (
						<div className="mb-2 mt-2">
							<h1 className="text-primary text-uppercase text-center">
								{winMsg}
							</h1>
							<button color="success" block onClick={reloadGame} >Reload Game</button>
						</div>
					) : (
						<h1 className="text-center text-warning">
							{isCross ? "Cross" : "Circle"} turns
						</h1>
					)}
					<div className="grid">
						{itemArray.map((item, i) => (
							<Card>
								<CardBody className="box">
									<Icon name={item} />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
			{/* </ToastContainer> */}
		</Container>
	);
};

export default App;
