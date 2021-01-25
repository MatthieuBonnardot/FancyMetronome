import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App DefaultBPM={90} DefaultFreq={200} DefaultGain={0} SoundClip="https://oramics.github.io/sampled/DM/LM-2/samples/cowb.wav"/>
    <App DefaultBPM={90} DefaultFreq={200} DefaultGain={0} />
    <App DefaultBPM={90} DefaultFreq={200} DefaultGain={0} SoundClip="https://oramics.github.io/sampled/DRUMS/pearl-master-studio/samples/kick-01.wav"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
