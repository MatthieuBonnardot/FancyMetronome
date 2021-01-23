import { useState, useEffect } from "react";
import Metronome from "simple-beats";
import "./App.css";
import ValueChanger from "./Components/ValueChanger.tsx";

function App() {
  const [metronome, setMetronome] = useState();
  const [isPlaying, setPlaying] = useState(false);
  const [BPM, setBPM] = useState(90);
  const [frequency, setFrequency] = useState(220);
  const [oscillatorType, setOscillatorType] = useState("sine");

  useEffect(() => {
    const run = () => {
      setMetronome(new Metronome(BPM, frequency));
    }

    run();
  }, [] );
  

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
    setOscillatorType(e);
    metronome.OscillatorType = oscillatorType;
  };

  return (
    <div className="App">
      <div className="metronome_player">
        <button onClick={HandlePlayingChange}>play</button>
        <ValueChanger
          onChangeMethod={HandleBPMChange}
          name={"BPM"}
          value={BPM}
        />
        <ValueChanger
          onChangeMethod={HandleFrequencyChange}
          name={"Frequency"}
          value={frequency}
        />
        <ValueChanger
          onChangeMethod={HandleOscillatorTypeChange}
          name={"OscillatorType"}
          value={oscillatorType}
        ></ValueChanger>
      </div>
    </div>
  );
}

export default App;
