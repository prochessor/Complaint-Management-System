# Complaint Management System 🎓📝

Consider a Complaint Management System for a university. A teacher can file a complaint if there is any problem, or if any service/equipment is required. The teacher shall forward her request to a particular supporting department such as IT, accounts or admin.

## System Workflow

- 👩‍🏫 **Teacher:** Files a complaint and forwards it to a department.
- 🏢 **Department:** Each department has many employees, and exactly one manager. The manager reviews the request and assigns the job to one or more employees. The date for each assignment is recorded.
- 👨‍💼 **Manager:** Reviews the request and assigns the job. After completion, declares the job done (may be after a review).
- 👨‍💻 **Employees:** Update the system when the job gets completed. The system notifies the manager.
- 🔔 **Notifications:** System notifies the teacher and manager about the status updates.
- 💬 **Feedback:** Teacher records feedback. If satisfied, the complaint is closed. Otherwise, it remains visible to the manager as an open issue.

## Complaint States

A complaint goes through different states during this cycle: new, assigned, resolved, or closed. The teacher or manager can view its status any time.

## Reports 📊

The system generates some reports as well. The campus director, for example, can view a summary of the complaints filed within a given period of time. For each department, the system shall show the number of complaints received, along with their status (closed, open, etc). The director then can ask for details about a specific complaint, including:

- 📅 Complaint date
- 🔖 Status and description
- 👩‍🏫 Teacher who initiated the request
- 👨‍💼 Relevant manager and employees
- 🗓️ Date of job assignment

## Administrator 👨‍💼

Besides the afore-mentioned users, there is an administrator who manages important information such as adding or removing employees, managers, and teachers.

## Implementation Details 🖥️

- The system is implemented using Java Spring Boot for the backend and React.js for the frontend.
- Data persistence is provided using files; no DBMS is used.
- The system uses a three-tier architecture. Data is loaded into objects before any display. Similarly, objects need to be populated before any writing to the files.
