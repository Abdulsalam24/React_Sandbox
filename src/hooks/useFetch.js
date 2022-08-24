import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()

                setData(data)
                setLoading(false)

            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    return { data, loading, error }
}

export default useFetch