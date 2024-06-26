import React from 'react'
import './NotificationBoxes.css'

const NotificationBoxes = ({ id, complaint, message, onClick }) => {
  return (
    <div onClick={() => {
      onClick(id);
    }}>
      <div className="notification ">
        <h4 className="ID"> <strong>ComplaintID:</strong> {complaint.id}</h4>
        <h4 className="ID"> <strong>Complaint Title:</strong> {complaint.title}</h4>
        <h4 className="ID"> <strong>Complaint Date:</strong> {complaint.dateOfArrival}</h4>
      </div>
    </div>
  )
}

export default NotificationBoxes