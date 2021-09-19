import {useEffect, useState} from "react";

type checkDataType<T> = (value: T) => T

const useInputChecker = <T, >(defaultUserData: T, checkData: checkDataType<T>) => {
    const [userData, setUserData] = useState<T>(defaultUserData)
    const [userDataErrors, setUserDataErrors] = useState<T>(defaultUserData)
    const [touched, setTouched] = useState(false)

    const handleChange = (e: any) => {
        setTouched(true)
        setUserData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    useEffect(() => {
        if (touched) {
            setUserDataErrors(checkData(userData))
        }
    }, [userData, touched, setUserDataErrors, checkData]);

    const clearData = () => {
        setUserData(defaultUserData)
    }

    const resetTouched = () => {
        setTouched(false)
    }

    return {
        handleChange,
        userData,
        userDataErrors,
        touched,
        clearData,
        resetTouched
    }
}

export default useInputChecker

export type {checkDataType}
