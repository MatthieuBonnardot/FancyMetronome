import { useState, useEffect } from "react";
import Metronome from "simple-beats";
import "./App.css";
import ValueChanger from "./Components/ValueChanger.tsx";
import OscillatorChanger from "./Components/OscillatorChanger.tsx";

function App() {
  const [metronome, setMetronome] = useState();
  const [isPlaying, setPlaying] = useState(false);
  const [BPM, setBPM] = useState(90);
  const [frequency, setFrequency] = useState(220);
  const [gain, setGain] = useState(0);
  const [oscillatorType, setOscillatorType] = useState("sine");

  useEffect(() => {
    const run = () => {
      setMetronome(new Metronome(BPM, frequency));
    };
    run();
  }, []);

  const HandlePlayingChange = () => {
    console.log(isPlaying);
    if (isPlaying) {
      metronome.stop();
      setPlaying(false);
    } else if (!isPlaying) {
      metronome.start();
      setPlaying(true);
    }
  };

  const HandleBPMChange = (e) => {
    metronome.BPM = e;
    console.log(metronome._BPM);
    setBPM(e);
  };

  const HandleFrequencyChange = (e) => {
    metronome.frequency = frequency;
    setFrequency(e);
    console.log(metronome._frequency);
  };

  const HandleOscillatorTypeChange = (e) => {
    metronome.oscillatorType = e.target.value;
    setOscillatorType(metronome._oscillatorType);
    console.log(metronome._oscillatorType);
  };
  const HandleGainChange = (e) => {
    console.log(e);
    metronome.gain = e;
    console.log(metronome._noteVolumes);
    setGain(e);
  };

  return (
    <div className="App">
      <div className="metronome_player">
        <button onClick={HandlePlayingChange}>play</button>
        <ValueChanger
          onChangeMethod={HandleBPMChange}
          name={"BPM"}
          value={BPM}
          maxValue={270}
          minValue={10}
        />
        <ValueChanger
          onChangeMethod={HandleFrequencyChange}
          name={"FREQ"}
          value={frequency}
          maxValue={500}
          minValue={40}
        />
        <ValueChanger
          onChangeMethod={HandleGainChange}
          name={"GAIN"}
          value={gain}
          maxValue={1}
          minValue={0}
        ></ValueChanger>
        <OscillatorChanger
          name="Oscillator Type"
          value={oscillatorType}
          onChangeMethod={HandleOscillatorTypeChange}
        />
      </div>
    </div>
  );
}

export default App;
