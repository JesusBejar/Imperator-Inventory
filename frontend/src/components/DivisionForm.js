import { useState } from "react"

const divisionForm = () => {

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