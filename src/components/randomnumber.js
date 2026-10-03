import { useState } from "react";

const RamdomNumber = () => {
    const [number, setnumber] = useState(null)
    const Generatenunber = () => {
        const rNumber = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        setnumber(rNumber);
    }
    const Reset=()=>{
        setnumber(null)
    }

    return (
        <>
            <h1>Ramdom Number</h1>
            {number == null ? (
                <p>No number generated yet</p>) : (<h1 className="random-number ">{number}</h1>)

                
            }
            <button onClick={Generatenunber}>change</button>
            <button onClick= {Reset}> reset</button>
        </>


    )

}

export default RamdomNumber;