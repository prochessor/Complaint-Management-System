import React from 'react'
import './ComplaintCard.css'

const ComplaintCard = ({ title, dateOfArrival, status, setShowComplaintModel, id, description, desiredOutcome, type, urgency, consequences, equipmentName, equipmentDetails }) => {
    return (
        <div onClick={() => { () => { setShowComplaintModel(id) } }}>
            <div className="content-of-complaint">
                <h4 className="name"><strong>Title:</strong> {title}</h4>
                <h4 className="date"> <strong>Date:</strong> {dateOfArrival}</h4>
                <h4 className="status"> <strong>Status: </strong> {status}</h4>
                <div className="description"> <strong>Description:</strong> {description} </div>
                <div className="desiredOutcome"> <strong>Desired Outcome:</strong> {desiredOutcome} </div>
                <div className="type"> <strong>Type:</strong> {type} </div>
                <div className="urgency"> <strong>Urgency:</strong> {urgency} </div>

                {(type == 'service') ? (<div className="consequences"> <strong> Consequences:</strong> {consequences} </div>) : (<div><div className="e-name"> <strong> Equipment Name:</strong> {equipmentName} </div> <div className="e-details"> <strong> Equipment Details:</strong> {equipmentDetails} </div> </div>)}
            </div>
        </div>
    )
}

export default ComplaintCard