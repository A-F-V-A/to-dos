import React from "react"

const  useLocalStorage = (itemName, initialValue = []) => {

    const localStorageData = name => {
        const localStorageItem = localStorage.getItem(name)
        if (!localStorageItem) {
            localStorage.setItem(name, `${initialValue}`)
            return initialValue
        }
        return JSON.parse(localStorageItem)
    }

    const [loading, setLoading] = React.useState(true)
    const [error, setError]     = React.useState(false)
    const [todos, setItem]      = React.useState(initialValue)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                setItem(localStorageData(itemName))
                setLoading(false)
            } catch (err) {
                setError(true)
            }

        },100)
    }, [loading, error])

    const saveItem = (newTodos) => {
        try {
            const data = JSON.stringify(newTodos)
            localStorage.setItem(itemName, data)
            setItem(newTodos)
        } catch (err) {
            setError(true)
        }

    }

    return {
        todos,
        saveItem,
        loading,
        error
    }

}

export { useLocalStorage }