import { useState } from "react"

const divisionForm = () => {
    const [dTitle, setdTitle] = useState('')
    const [iCount, setiCount] = useState('')
    const [hCount, sethCount] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const division = {dTitle, iCount, hCount}

        const response = await fetch('/api/divisions', {
            method: "POST", 
            body: JSON.stringify(division), 
            headers: {
                "Content-Type": "application/json"
            }
        })

        const json = await response.json()
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Division</h3>

            <label>Division Title: </label>
            <input 
                type="text"
                onChange={(e) => setdTitle(e.target.value)}
                value={dTitle}
            />

            <label>Infantry Count: </label>
            <input 
                type="number"
                onChange={(e) => setiCount(e.target.value)}
                value={iCount}
            />

            <label>Horse Count: </label>
            <input 
                type="number"
                onChange={(e) => sethCount(e.target.value)}
                value={hCount}
            />

            <button>Add Division</button>
        </form>
    )
}