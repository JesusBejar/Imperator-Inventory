const DivisionDetails = ({ division }) => {
    return (
        <div className="division-details">
            <h4>{division.dTitle}</h4>
            <p><strong>Infantry count: </strong> {division.iCount}</p>
            <p><strong>Horse count: </strong> {division.hCount}</p>
            <p>{division.createdAt}</p>
        </div>
    )
}

export default DivisionDetails