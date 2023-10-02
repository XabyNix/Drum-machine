import { useEffect, useState } from "react";

interface prop {
	keyButton: string;
	id: string;
	audioUrl: string;
	changeDisplay(audioName: string): void;
	isOn: boolean;
	volume: number;
}

export default function Pad({ keyButton, audioUrl, id, changeDisplay, isOn, volume }: prop) {
	const [isPlaying, setIsPlaying] = useState(false);
	function playAudio() {
		if (isOn) {
			const audioTag = document.getElementById(keyButton) as HTMLAudioElement;
			changeDisplay(id);
			audioTag.currentTime = 0;
			audioTag.volume = volume;
			audioTag.play();
			setIsPlaying(true);

			setTimeout(() => {
				setIsPlaying(false);
			}, 150);
		}
	}
	function handleKeydown(event: globalThis.KeyboardEvent) {
		event.key.toLowerCase() === keyButton.toLowerCase() && playAudio();
	}

	useEffect(() => {
		document.addEventListener("keypress", handleKeydown);
		return () => document.removeEventListener("keypress", handleKeydown);
	});

	return (
		<button
			className={`drum-pad ${isPlaying ? "playing" : ""}`}
			id={id}
			onClick={() => playAudio()}
		>
			{keyButton}
			<audio preload="none" className="clip" id={keyButton} src={audioUrl}></audio>
		</button>
	);
}
