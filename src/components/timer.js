import { useState, useEffect } from "react"

const Timer = () => {
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        console.log("component did mount")
        const id = setInterval(() => {
            setSeconds(state => {
                if(state === 1000){
                    return state;
                }
                return state + 1;
            });
        }, 1000);
        
        //returned callback se va executa inainte de demontarea componentei
        return () => {
            console.log("component will unmount");
            clearInterval(id);
        }
    }, [])

    return (
        <div id="timer"
        style={{
            margin: '1rem',
            fontSize: 24,
            fontWeight: 'bold'
        }}
        >
            {seconds}
        </div>
    )
}

export default Timer;


// function add(a, b){
//     return a + b;
// }

// const add = (a, b) => a + b;