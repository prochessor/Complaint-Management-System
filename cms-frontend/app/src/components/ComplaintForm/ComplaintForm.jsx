import React, { useEffect, useState } from 'react';
import { Label, TextInput, Textarea, Radio, ToggleSwitch, Button } from 'flowbite-react';
import './ComplaintForm.css';
import StyledInput from '../StyledInput/StyledInput';
import DepartmentItem from '../DepartmentItem/DepartmentItem';

const ComplaintForm = ({ user, setShowRequestForm }) => {

  let [departmentList, setDepartmentList] = useState(undefined);
  let [radioList, setRadioList] = useState(undefined);
  const [equipmentName, setEquipmentName] = useState('');
  const [equipmentDetails, setEquipmentDetails] = useState('');
  const [consequences, setConsequences] = useState('');
  const [switch1, setSwitch1] = useState(false);
  const [selectedComplaintType, setSelectedComplaintType] = useState('problem');
  let [form, setForm] = useState({
    title: "", description: "", departmentID: "", desiredOutcome: ""
  })

  useEffect(() => {
    async function controller() {
      const url = "http://localhost:8080/getDepartments";

      let response = await fetch(url);
      let responseData = await response.json();
      setDepartmentList(responseData.departments);
    }
    controller();
  }, [])

  if (departmentList && !radioList) {
    let temp = departmentList.map(dept => {
      return <DepartmentItem id={dept.departmentId} name={dept.departmentName} onChange={controlForm} />
    });
    setRadioList(temp);
  }





  const handleComplaintTypeChange = (type) => {
    setSelectedComplaintType(type);
  };

  function controlForm(e) {
    setForm(curr => { return { ...curr, [e.target.name]: e.target.value } });
  }




  return (
    <div className='form-container' >
      <div className="form ">
        <div>
          <div className='TitleAndDescription'>
            <div className="">
              <Label htmlFor="input-gray" color="gray" value="Title" />
              <StyledInput placeholder={"Complaint title....."} type={"text"} name="title" value={form.title} onChange={controlForm} />
            </div>
            <div className="">
              <Label htmlFor="description" value="Description" />
              <Textarea id="description" placeholder="Add a description..." required rows={4} style={{ width: '100%' }} name='description' value={form.description} onChange={controlForm} />
            </div>
            <div className="">
              <Label htmlFor="outcome" value="Desired Outcome" />
              <Textarea id="outcome" placeholder="Add a desired outcome..." required rows={4} style={{ width: '100%' }} name='desiredOutcome' value={form.desiredOutcome} onChange={controlForm} />
            </div>
          </div >
        </div >

        <div className='DandT'>
          <div className='DepartmentNameList'>
            <fieldset className="Billo_bgga flex max-w-md flex-col gap-4">
              <h2>Choose the department to complain </h2>

              {radioList && [radioList]}

            </fieldset>
          </div>

          <div className='Toggle'>
            <ToggleSwitch checked={switch1} label="Uregncy" onChange={() => setSwitch1(!switch1)} />

            <div className='TypeOfComplaint'>
              <fieldset className="Billo_bgga flex max-w-md flex-col gap-4">
                <h2 className="mb-4">Select type of complaint</h2>
                <div className="flex items-center gap-2">
                  <Radio
                    id="problem"
                    name="complaintType"
                    value="Problem"
                    checked={selectedComplaintType === 'problem'}
                    onChange={() => handleComplaintTypeChange('problem')}
                  />
                  <Label htmlFor="problem">Problem</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="service"
                    name="complaintType"
                    value="Service"
                    checked={selectedComplaintType === 'service'}
                    onChange={() => handleComplaintTypeChange('service')}
                  />
                  <Label htmlFor="service">Service</Label>
                </div>
              </fieldset>
            </div>
            {selectedComplaintType === 'problem' && (
              <div className="ConsequencesInput">
                <Label htmlFor="consequences" value="Consequences" />
                <TextInput
                  id="consequences"
                  placeholder="Enter Consequences"
                  value={consequences}
                  onChange={(e) => setConsequences(e.target.value)}
                  required
                />
              </div>
            )}
            {selectedComplaintType === 'service' && (
              <div className="EquipmentDetailsInput">
                <Label htmlFor="equipmentName" value="Equipment Name" />
                <TextInput
                  id="equipmentName"
                  placeholder="Enter Equipment Name"
                  value={equipmentName}
                  onChange={(e) => setEquipmentName(e.target.value)}
                  required
                />

                <Label htmlFor="equipmentDetails" value="Equipment Details" />
                <Textarea
                  id="equipmentDetails"
                  placeholder="Enter Equipment Details"
                  value={equipmentDetails}
                  onChange={(e) => setEquipmentDetails(e.target.value)}
                  required
                  rows={4}
                />
              </div>
            )}
          </div>
          <Button onClick={() => {

            async function controller() {
              const url = "http://localhost:8080/addComplaint";

              let date = new Date();
              let year = date.getFullYear();
              let month = date.getMonth() + 1;
              let day = date.getDate();

              month = month < 10 ? '0' + month : month;
              day = day < 10 ? '0' + day : day;
              let formattedDate = `${year}-${month}-${day}`;

              console.log(user)
              // Data to be sent in the body of the request
              const postData = {
                title: form.title,
                description: form.description,
                desiredOutcome: form.desiredOutcome,
                type: selectedComplaintType,
                teacherID: user.id,
                departmentID: form.departmentID,
                urgency: switch1 ? "high" : "low",
                DateOfArrival: formattedDate,
              };
              if (selectedComplaintType == "service") {
                postData.equipmentName = equipmentName;
                postData.equipmentDetails = equipmentDetails;
              }
              else {
                postData.consequences = consequences;
              }

              console.log(postData)
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
              setForm({
                title: "", description: "", departmentID: "", desiredOutcome: ""
              });
              setConsequences("");
              setEquipmentDetails("");
              setEquipmentName("");

              setShowRequestForm(false);
            }
            controller();
          }} >Submit</Button>
        </div>
      </div >
    </div >
  );
}

export default ComplaintForm;
