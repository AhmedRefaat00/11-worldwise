/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react"

const CitiesContext = createContext()
const BASE_URL = 'http://localhost:9000';

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setcurrentCity] = useState({})
    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data)
            }
            catch {
                alert('there is an error')
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchCities()
    }, [])

    async function getCity(id) {
        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/cities/${id}`)
            const data = await res.json()
            setcurrentCity(data)
        }
        catch {
            alert('there is an error')
        }
        finally {
            setIsLoading(false)
        }
    }


    async function createCity(newCity) {

        const res = await fetch(`${BASE_URL}/cities`, {
            method: "POST",
            body: JSON.stringify(newCity),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        setCities(cities => [...cities, data])

    }

    async function deleteCity(id) {

        await fetch(`${BASE_URL}/cities/${id}`, {
            method: "DELETE",
        });
        setCities(cities => cities.filter(city => city.id !== id))

    }

    return (
        <CitiesContext.Provider value={
            {
                cities,
                isLoading,
                currentCity,
                getCity,
                createCity,
                deleteCity

            }
        }>
            {children}
        </CitiesContext.Provider>
    )
}

function useCities() {
    const context = useContext(CitiesContext);
    return context
}


export { CitiesProvider, useCities }
