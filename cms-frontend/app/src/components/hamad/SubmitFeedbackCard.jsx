import React, { useState } from 'react'
import './SubmitFeedbackCard.css'
import { Label, TextInput, Textarea, Radio, ToggleSwitch } from 'flowbite-react';
import { Button } from 'flowbite-react';


const SubmitFeedbackCard = ({ notification, deleteNotification }) => {
    let [form, setForm] = useState({

        description: "",
        isSatisfied: "satisfied",
    })
    function controlForm(e) {
        setForm(curr => { return { ...curr, [e.target.name]: e.target.value } });
    }
    return (

        <div className='feedback-container'>
            <div className='complainIdAndMessage'>

                <div className='complainIdAndTitle'>
                    <p><strong>Complaint ID:</strong> {notification.complaint.id} </p>
                    <p>{notification.complaint.title}</p>
                </div>
                <br />

                <div className='Message'>
                    <p> <strong>Notification:</strong> {notification.message}</p>
                </div>
                <br />
                <br />

                <h2 className='font-bold '>Submit Feedback</h2>

                <div>
                    <Textarea id="description" placeholder="Add a description..." required rows={4} style={{ width: '300px' }} onChange={controlForm} name="description" value={form.description} />
                </div>

                <div className='AllRadios'>
                    <fieldset className="Billo_bgga flex max-w-md flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Radio
                                id="Satisfied"
                                name="isSatisfied"
                                value="satisfied"
                                onChange={controlForm}
                                defaultChecked
                            />
                            <Label htmlFor="itDepartment">Satisfied</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <Radio
                                onChange={controlForm}

                                id="Unsatisfied"
                                name="isSatisfied"
                                value="unSatisfied"
                            />
                            <Label htmlFor="civilDepartment">Unsatisfied</Label>
                        </div>

                    </fieldset>
                </div>

                <div className='SumbitButton'>


                    <div className="flex flex-wrap gap-2">

                        <Button color="dark" pill onClick={() => {

                            async function controller() {
                                const url = "http://localhost:8080/submitFeedback";

                                // Data to be sent in the body of the request
                                const postData = {
                                    complaintID: notification.complaint.id,
                                    description: form.description,
                                    isSatisfied: form.isSatisfied,
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
                                console.log(responseData);
                            }
                            controller();
                            deleteNotification();
                        }}>
                            Submit Feedback
                        </Button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SubmitFeedbackCard