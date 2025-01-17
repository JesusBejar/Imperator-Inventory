import { useEffect, useState } from "react"
import { useDivisionsContext } from "../hooks/useDivisionHooks"

import DivisionDetails from "../components/DivisionDetails"
import DivisionForm from "../components/DivisionForm"


const Home = () => {
    const [divisions, setDivisions] = useState(null)

    useEffect(() => {
        const fetchDivisions = async () => {
            const response = await fetch('/api/divisions')
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
                {divisions && divisions.map((division) => (
                    <DivisionDetails key={division._id} division={division}/>
                ))}
            </div>
            <DivisionForm />
        </div>
    )
}

export default Home 