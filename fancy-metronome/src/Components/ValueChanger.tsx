import "./ValueChanger.css";

interface Props {
  name: string;
  onChangeMethod: Function;
  value: number;
  minValue: number;
  maxValue: number;
}

const ValueChanger: React.FC<Props> = ({
  name,
  onChangeMethod,
  value,
  minValue,
  maxValue,
}) => {
  const increment = () => {
    switch (name) {
      case "GAIN":
        if (value < 1) onChangeMethod(Number((value + 0.1).toFixed(1)));
        break;

      default:
        if (!(value > maxValue)) onChangeMethod(value + 5);
        break;
    }
  };

  const decrement = () => {
    switch (name) {
      case "GAIN":
        if (value > 0) onChangeMethod(Number((value - 0.1).toFixed(1)));
        break;

      default:
        if (!(value < minValue)) onChangeMethod(value - 5);
        break;
    }
  };

  return (
    <div className="ValueChanger">
      <i className="arr-up" onClick={() => increment()}></i>
      <p>{name}</p>
      <p>{value}</p>
      <i className="arr-down" onClick={() => decrement()}></i>
    </div>
  );
};

export default ValueChanger;
