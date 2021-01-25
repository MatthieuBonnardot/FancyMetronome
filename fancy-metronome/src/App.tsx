import { useState, useEffect } from "react";
import Metronome from "simple-beats";
import "./App.css";
import Button from "./Components/Button";
import ValueChanger from "./Components/ValueChanger";
interface Props {
  DefaultBPM: number;
  DefaultFreq: number;
  DefaultGain: number;
  SoundClip: string;
}
const App: React.FC<Props> = ({
  DefaultBPM,
  DefaultFreq,
  DefaultGain,
  SoundClip,
}) => {
  const [metronome, setMetronome] = useState<any>();
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [playButton, setPlayButton] = useState<string>("fas fa-play");
  const [BPM, setBPM] = useState<number>(DefaultBPM);
  const [frequency, setFrequency] = useState<number>(DefaultFreq);
  const [gain, setGain] = useState<number>(DefaultGain);

  useEffect(() => {
    const run = (): void => {
      const newMetronome = new Metronome(BPM, frequency);
      newMetronome.loadSamples([SoundClip]);
      setMetronome(newMetronome);
    };
    run();
  }, []);

  const HandlePlayingChange = (): void => {
    console.log(isPlaying);
    if (isPlaying) {
      metronome.stop();
      setPlayButton("fas fa-play");
      setPlaying(false);
    } else if (!isPlaying) {
      metronome.start();
      setPlayButton("fas fa-pause");
      setPlaying(true);
    }
  };

  const HandleBPMChange = (e: number): void => {
    metronome.BPM = e;

    setBPM(e);
  };

  const HandleFrequencyChange = (e: number): void => {
    metronome.frequency = frequency;
    setFrequency(e);
  };

  const HandleGainChange = (e: number): void => {
    console.log(e);
    metronome.gain = e;
    setGain(e);
  };

  return (
    <div className="App">
      <div className="main">
        <Button onChangeMethod={HandlePlayingChange} btn={playButton}></Button>
        <div className="changers">
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
          />
        </div>
      </div>
    </div>
  );
};

export default App;
