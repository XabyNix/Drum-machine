import { useEffect } from "react";

interface prop {
	keyButton: string;
	id: string;
	audioUrl: string;
	changeDisplay(audioName: string): void;
}

export default function Pad({ keyButton, audioUrl, id, changeDisplay }: prop) {
	function playAudio() {
		const audioTag = document.getElementById(keyButton) as HTMLAudioElement;
		console.log(audioTag);
		changeDisplay(id);
		audioTag.currentTime = 0;
		audioTag.play();
	}
	function handleKeydown(event: globalThis.KeyboardEvent) {
		event.key === keyButton.toLowerCase() && playAudio();
	}

	useEffect(() => {
		document.getElementById(id).addEventListener("keydown", handleKeydown);
		return () => document.getElementById(id).removeEventListener("keydown", handleKeydown);
	});

	return (
		<button className="drum-pad" id={id} onClick={() => playAudio()}>
			{keyButton}
			<audio preload="none" className="clip" id={keyButton} src={audioUrl}></audio>
		</button>
	);
}
