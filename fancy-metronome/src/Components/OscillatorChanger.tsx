interface Props {
  name: string;
  value: string;
  onChangeMethod: Function;
}

const OscillatorChanger: React.FC<Props> = ({
  name,
  value,
  onChangeMethod,
}) => {
  const handleSelect = (e: any) => onChangeMethod(e);
  return (
    <>
      <label>{name}</label>
      <select name={name} id="oscillator" value={value} onChange={handleSelect}>
        <option>sine</option>
        <option>square</option>
        <option>triangle</option>
      </select>
    </>
  );
};
export default OscillatorChanger;
