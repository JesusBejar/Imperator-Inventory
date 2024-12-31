import { useEffect, useState } from "react"

const Home = () => {
    const [divisions, setDivisions] = useState(null)

    useEffect(() => {
        const fetchDivisions = async () => {
            const response = await fetch('http://localhost:4000/api/divisions')
            const json = await response.json()

            if (response.ok) {
                setDivisions(json)
            }
        }

        fetchDivisions()
    }, [])

    return (
        <div className="home">
            <div className='divisions'>
                {divisions && divisions.map(() => (
                    <p key={divisions._id}>{division.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Home 