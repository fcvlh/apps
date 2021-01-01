import React, { Component } from 'react';
import Select from 'react-select';

export default function Home() {
    const options = [
        { value: '/music/Always_hopeful.mp3', label: 'Música 1' },
        { value: '/music/Chris_Zabriskie-01.mp3', label: 'Música 2' },
        { value: '/music/Fly-Away.mp3', label: '´Música 3' }
    ]
    
    function play() {
        var audio = document.getElementById("audio1");
        audio.play();
    }
    function pause() {
        var audio = document.getElementById("audio1");
        audio.pause();
    }
    function selecionarMusica(target) {
        console.log("Seleção de música");
    }
    return (
        <>
            <input type="text" placeholder="LIMITE DE TEMPO"></input><br />
            <Select
                options={options}
            >

            </Select><br />
            <button onClick={play}>Play</button>
            <button onClick={pause}>Pause</button>
            <audio id="audio1" src="/music/Always_hopeful.mp3"></audio>
        </>
    )
}