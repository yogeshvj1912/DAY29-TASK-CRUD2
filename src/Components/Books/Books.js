import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import "./Books.css";

const Books = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://64100379864814e5b644b822.mockapi.io/books", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setTableData(data));
  };
  useEffect(() => getData(), []);
  const DeleteUser = (id) => {
    fetch(`https://64100379864814e5b644b822.mockapi.io/books/${id}`, {
      method: "DELETE",
    }).then((data) => getData(data));
  };

  return (
    <div>
      <NavBar />
      <div className="container my-3">
        <div className="header d-flex my-3 ">
          <h1 className="px-3 m-2 fw-bold">Books Details</h1>
          <div className="btn mt-2"><Button variant="contained" onClick={() => navigate("/addbook")}>
            Add New Book
          </Button></div>
        </div>
        <div className="row my-4 d-flex button1">
          {tableData.map((data, index) => (
            <div className="card m-2" style={{ width: "18rem" }} key={index}>
              <div className="card-img mt-2">
                <img
                  src={data.img}
                  className="card-img-top img-card "
                  alt={data.name}
                />
              </div>

              <div className="card-body">
                <div className="card-content">
                  <div className="card-body  ">
                    <div className="card-content1">
                      <p className="card-text p-1">
                        <b>Book Name:</b> {data.book}
                      </p>
                      <p className="card-text p-1">
                        <b>Author Name:</b> {data.author}
                      </p>
                      <p className="card-text p-1">
                        <b>ISBN:</b> {data.isbn}
                      </p>
                    </div>
                    <div className="mt-2">
                      <div className="button1 d-flex">
                        <Button
                          variant="outlined"
                          startIcon={<EditIcon color="success" />}
                          onClick={() => navigate(`/editbook/${data.id}`)}
                        >
                          Edit
                        </Button>

                        <Button
                          variant="outlined"
                          startIcon={<DeleteIcon color="error" />}
                          onClick={() => DeleteUser(data.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button d-flex my-5">
          <Button
            variant="contained"
            className="col-md-8"
            onClick={() => navigate("/addbook")}
          >
            Add New Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Books;