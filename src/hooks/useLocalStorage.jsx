import {useEffect, useState} from 'react'

export function useLocalStorage (key, initialValue) {
    
    const [value, setValue] = useState();
    
      const setStoredValue = (newValue) => {
        setValue(newValue)
        const stringifiedValue = JSON.stringify(newValue)
        localStorage.setItem(key,stringifiedValue)
    }
    
    useEffect(() => {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            try {
                const parsed = JSON.parse(storedValue);
                setValue(parsed);
            } catch (e) {
                console.log(e);
                setValue(initialValue);
            }
        }
    }, [])

return [value, setStoredValue]
}