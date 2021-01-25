interface Props {
    onChangeMethod: Function,
    btn: string
}
const Button: React.FC<Props> = ({onChangeMethod, btn}) => {
    return (
        <div className="playBTN">
        <i className={btn} id="playButton" onClick={() => onChangeMethod()}></i>
    </div>
  )
}

export default Button; 