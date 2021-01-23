import {useState} from 'react';
import './ValueChanger.css';

interface Props {
    name: string,
    onChangeMethod: Function,
    type: string,
    value: number
}



const ValueChanger: React.FC<Props> = ({name, onChangeMethod, type, value}) => {

    const increment = () => onChangeMethod(value+1);
    const decrement = () => onChangeMethod(value-1);

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => increment()}>:arrow-up</button>
            <p>{value}</p>
            <button onClick={() => decrement()}>:arrow-down</button>
        </div>
    )
}

export default ValueChanger
