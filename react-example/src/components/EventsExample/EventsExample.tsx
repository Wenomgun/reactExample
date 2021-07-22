import React, {FC, useRef, useState} from "react";

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [drag, setDrag] = useState<boolean>(false);
    const [dragOver, setDragOver] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const clickHandler = () => console.log(inputRef.current?.value);
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)}></input>
            <input ref={inputRef}></input>
            <button onClick={clickHandler}>Button</button>

            {!drag && <div draggable={true}
                           onDrag={(e) => setDrag(true)}
                           onDragExit={(e) => setDrag(false)}
                          style={{margin: '10px',width: '200px', height: '100px', background: '#000'}}
            ></div>}
            <div
                onDragLeave={() => setDragOver(false)}
                onDragOver={() => setDragOver(true)}
                style={{margin: '10px', width: '200px', height: '100px', background: dragOver ? 'red' : 'black'}}></div>
        </div>
    )
}

export default EventsExample;