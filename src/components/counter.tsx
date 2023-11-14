import React, {useEffect, useState} from "react";

interface ICounter {
    seconds: number
}
export const Counter: React.FC<ICounter> = ({ seconds }) => {
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        let interval: number;
        if (isRunning) {
            interval = setInterval(() => {
                setCounter(x => x + seconds);
            }, seconds * 1000);
        }
        return () => { if (interval !== undefined) clearInterval(interval)};
    }, [isRunning, seconds]);

    return (
        <>
            <p>{counter}</p>
            <button onClick={() => { setIsRunning(x => !x) }}>{isRunning ? "Stop" : "Start"}</button>
        </>
    )
}

export default Counter;