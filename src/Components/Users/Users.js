import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import "./Users.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Users = () => {
  const [studentData, setStudentData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://643247243e05ff8b372378dc.mockapi.io/students", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setStudentData(data));
  };
  useEffect(() => getData(), []);

  const DeleteUser = (id) => {
    fetch(`https://643247243e05ff8b372378dc.mockapi.io/students/${id}`, {
      method: "DELETE",
    }).then((data) => getData(data));
  };
// ******************************************************************************
const [mentorData, setMentorData] = useState([]);

const getDatas = () => {
  fetch("https://64100379864814e5b644b822.mockapi.io/mentors", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => setMentorData(data));
};
useEffect(() => getDatas(), []);

const DeleteUsers = (id) => {
  fetch(`https://64100379864814e5b644b822.mockapi.io/mentors/${id}`, {
    method: "DELETE",
  }).then((data) => getDatas(data));
};
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
       <div className="header d-flex my-3 ">
       <h1 className="px-3 m-2 fw-bold">Mentor Details</h1>
       <div className="btn mt-2">
       <Button variant="contained" onClick={()=>navigate("/addmentor")}>Add Mentor Detail</Button>

       </div>
       
       </div>
        <hr className="dropdown-divider"/>
        <div className="row row-cols-auto p-2 ">
          {mentorData.map((data, i) => (
            <div className="col p-2 m-2" key={i}>
              <div className="card shadow">
                <h4 className="card-title">
                  <b className="px-2">Name: </b>
                  {data.name}
                </h4>
                <hr className="dropdown-divider" />
                <div className="card-body">
                  <h6 className="card-text py-2">
                    <b className="px-2">Email: </b>
                    {data.email}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book Name: </b>
                    {data.book}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book ISBN no: </b>
                    {data.isbn}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book Issued date: </b>
                    {data.borrowed_date}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book Returned date: </b>
                    {data.returned_date}
                  </h6>
                </div>
                <div className="button1 p-3 d-flex">
                        <Button
                          variant="outlined"
                          startIcon={<EditIcon color="success"/>}
                          onClick={() => navigate(`/editmentor/${data.id}`)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon color="error"/>}
                          onClick={() => DeleteUsers(data.id)}
                        >
                          Delete
                        </Button>
                      </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
       <div className="header d-flex my-3 ">
       <h1 className="px-3 m-2 fw-bold">Students Details</h1>
       <div className="btn mt-2">
       <Button variant="contained" onClick={()=>navigate("/addStudent")}>Add Student Detail</Button>
       </div>
      
       </div>
        <hr className="dropdown-divider"/>
        <div className="row row-cols-auto p-2 ">
          {studentData.map((data, i) => (
            <div className="col p-2 m-2" key={i}>
              <div className="card shadow">
                <h4 className="card-title">
                  <b className="px-2">Name: </b>
                  {data.name}
                </h4>
                <hr className="dropdown-divider" />
                <div className="card-body">
                  <h6 className="card-text py-2">
                    <b className="px-2">Email: </b>
                    {data.email}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book Name: </b>
                    {data.book}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book ISBN no: </b>
                    {data.isbn}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book Issued date: </b>
                    {data.borrowed_date}
                  </h6>
                  <h6 className="card-text py-2">
                    <b className="px-2">Book Returned date: </b>
                    {data.returned_date}
                  </h6>
                </div>
                <div className="button1 p-3 d-flex">
                        <Button
                          variant="outlined"
                          startIcon={<EditIcon color="success"/>}
                          onClick={() => navigate(`/editstudent/${data.id}`)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon color="error"/>}
                          onClick={() => DeleteUser(data.id)}
                        >
                          Delete
                        </Button>
                      </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;