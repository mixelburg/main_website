import {useEffect, useState} from "react";
import axios from "axios"

export const TestTest = () => {

    const [state, setState] = useState("sdfsd");

    useEffect(() => {

        const exec = async () => {

            try {
                const newData: any = await axios.get("vm")
                console.log("NEW DATA", newData.data)
                setState(newData.data)
            } catch {
                console.log("ERROR LOADING API")
            }
        }

        exec().then()
    }, [])

    return (
        <div>
            {
                state === "hello"
                    ? <div id="fuckyea">pip</div>
                    : <div>loading</div>
            }
        </div>
    )
}

