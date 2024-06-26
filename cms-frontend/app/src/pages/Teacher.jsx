import React, { useEffect, useState } from 'react';
import "./Teacher.css"
import ComplaintCard from "../components/ComplaintCard/ComplaintCard";
import ComplaintForm from "../components/ComplaintForm/ComplaintForm"; // Import the RequestForm component
import { Button } from 'flowbite-react';
import Header from '../components/Header/Header';
import NotificationBoxes from '../components/hamad/NotificationBoxes';
import SubmitFeedbackCard from '../components/hamad/SubmitFeedbackCard';

const Teacher = ({ user }) => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [complaints, setComplaints] = useState(undefined);
  const [complaintCards, setComplaintCards] = useState(undefined);
  const [notifications, setNotifications] = useState(undefined);
  const [notificationCards, setNotificationCards] = useState(undefined);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackNotification, setFeedbackNotification] = useState(false);


  const handleAddComplain = () => {
    setShowRequestForm(true);
  };


  function controlClickNotification(index) {
    setFeedbackNotification(notifications[index]);
  }

  function controlDeleteNotification() {
    let index;
    for (let i = 0; i < notifications.length; ++i) {
      if (notifications[i].complaint.id == feedbackNotification.complaint.id) {
        index = i;
      }
    }
    setNotifications(notifications.filter((_, i) => i !== index));
    setNotificationCards(notificationCards.filter((_, i) => i !== index));
    setFeedbackNotification(false);
  }


  useEffect(() => {


    async function controller() {
      let url = "http://localhost:8080/getComplaintsByTeacherId";

      // Data to be sent in the body of the request
      const postData = {
        teacherID: 1
      };

      // Options for the fetch request
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      };

      let response = await fetch(url, options);
      let responseData = await response.json();
      setComplaints(responseData.complaints);

      url = "http://localhost:8080/getTeacherNotifications"
      response = await fetch(url, options);
      responseData = await response.json();
      console.log(responseData)
      setNotifications(responseData.notifications);
    }
    controller();
  }, [])



  if (complaints && !complaintCards) {

    let temp = complaints.map((complaint, key) => <ComplaintCard key={key}  {...complaint} />)
    setComplaintCards(temp);

  }


  if (notifications && !notificationCards) {
    let temp = notifications.map((notification, key) => <NotificationBoxes onClick={controlClickNotification} key={key} id={key} {...notification} />)
    setNotificationCards(temp);
  }



  return (
    <div className="Teacher">
      <Header user={user} />

      <div className="w-full justify-end wrapper-btn flex flex-wrap gap-2">
        <Button className="AddNewReq" gradientDuoTone="tealToLime" onClick={handleAddComplain}>
          Add New Request
        </Button>
      </div>

      {showRequestForm && <ComplaintForm user={user} setShowRequestForm={setShowRequestForm} />}


      <div className="OpenAndClose">
        <h1 className="OpenComp">Complaints</h1>
        <div className="Lists">
          {complaintCards && [complaintCards]}

        </div>
      </div>

      <div className="OpenAndClose">
        <h1 className="OpenComp">Notifications</h1>
        <div className="Lists">
          {notificationCards && [notificationCards]}
        </div>
      </div>

      {feedbackNotification && <SubmitFeedbackCard notification={feedbackNotification} deleteNotification={controlDeleteNotification} />}

    </div>
  );
};

export default Teacher;
