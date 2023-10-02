import heater1 from "./assets/Heater-1.mp3";
import heater2 from "./assets/Heater-2.mp3";
import heater3 from "./assets/Heater-3.mp3";
import heater4 from "./assets/Heater-4_1.mp3";
import heater6 from "./assets/Heater-6.mp3";
import kick_n_hat from "./assets/Kick_n_Hat.mp3";
import kick_1 from "./assets/RP4_KICK_1.mp3";
import Cev_H2 from "./assets/Cev_H2.mp3";
import Disc from "./assets/Dsc_Oh.mp3";
import "./App.css";
import Pad from "./components/Pad";
import { useState } from "react";

const pads = [
	{
		audioUrl: heater1,
		id: "heater1",
		keyButton: "Q",
	},
	{
		audioUrl: heater2,
		id: "heater2",
		keyButton: "W",
	},
	{
		audioUrl: heater3,
		id: "heater3",
		keyButton: "E",
	},
	{
		audioUrl: heater4,
		id: "heater4",
		keyButton: "A",
	},
	{
		audioUrl: heater6,
		id: "heater6",
		keyButton: "S",
	},
	{
		audioUrl: kick_n_hat,
		id: "kick_n_hat",
		keyButton: "D",
	},
	{
		audioUrl: kick_1,
		id: "kick_1",
		keyButton: "Z",
	},
	{
		audioUrl: Cev_H2,
		id: "Cev_H2",
		keyButton: "X",
	},
	{
		audioUrl: Disc,
		id: "Disc",
		keyButton: "C",
	},
];

function App() {
	const [display, setDisplay] = useState("");
	const [isOn, setIsOn] = useState(false);
	const [volume, setVolume] = useState(0.5);

	function changeDisplay(toDisplay: string) {
		setDisplay(toDisplay);
	}
	return (
		<div id="container">
			<div id="drum-machine">
				<div className="pad-bank">
					{pads.map((pad) => (
						<Pad
							volume={volume}
							isOn={isOn}
							changeDisplay={changeDisplay}
							key={pad.keyButton}
							{...pad}
						/>
					))}
				</div>
				<div className="controls-container">
					<div id="display">{display}</div>
					<div>
						<input
							type="range"
							min={0}
							max={100}
							onChange={(e) => setVolume(parseFloat(e.target.value) / 100)}
						/>
					</div>
					<div className={`control ${isOn ? "on" : "off"}`} onClick={() => setIsOn(!isOn)}>
						<div className="switch" style={isOn ? { right: 0 } : { right: "70%" }}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
