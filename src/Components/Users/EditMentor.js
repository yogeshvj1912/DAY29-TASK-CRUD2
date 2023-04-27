import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import NavBar from "../NavBar";

const DataValidationSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required().min(4),
 email: yup.string().email().required().min(8),
 book: yup.string().required().min(4),
 isbn: yup.number().required().min(4),
 borrowed_date: yup.date().required(),
 returned_date: yup.date().required(),
});
export const EditMentor = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://64100379864814e5b644b822.mockapi.io/mentors/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return <div>{data ? <EditMentorForm data={data} /> : "Loading"}</div>;
};

const EditMentorForm = ({ data }) => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        id: data.id,
        name: data.name,
        email: data.email,
       book: data.book,
       isbn:data.isbn,
       borrowed_date:data.borrowed_date,
       returned_date:data.returned_date,
      },
      validationSchema: DataValidationSchema,
      onSubmit: (updateValues) => {
        EditData(updateValues);
      },
    });
  const EditData = (updateValues) => {
    fetch(`https://64100379864814e5b644b822.mockapi.io/mentors/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(updateValues),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/user"));
  };

  return (
   <div>
    <NavBar/>
    <section className="container my-5">
      <h2 className="text-center mt-3">Edit Mentor Details</h2>
      <Form onSubmit={handleSubmit} className="add-student">
     
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email ? errors.email : null}
        />
         <TextField
        label="Book Name"
        variant="outlined"
        type="text"
        value={values.book}
        name="book"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.book && errors.book}
        helperText={touched.book && errors.book ? errors.book : null}
      />
       <TextField
        label="ISBN no"
        variant="outlined"
        type="number"
        value={values.isbn}
        name="isbn"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.isbn && errors.isbn}
        helperText={touched.isbn && errors.isbn ? errors.isbn : null}
      />
       <TextField
      
        variant="outlined"
        type="date"
        value={values.borrowed_date}
        name="borrowed_date"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.borrowed_date && errors.borrowed_date}
        helperText={touched.borrowed_date && errors.borrowed_date ? errors.borrowed_date : null}
      />
       <TextField
       
        variant="outlined"
        type="date"
        value={values.returned_date}
        name="returned_date"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.returned_date && errors.returned_date}
        helperText={touched.returned_date && errors.returned_date ? errors.returned_date : null}
      />
        <Button variant="contained" type="submit">
          Update Mentor Details
        </Button>
      </Form>
      <button className="btn btn-primary mt-3" onClick={() => navigate(-1)}>
        Back
      </button>
    </section>
   </div>
  );
};