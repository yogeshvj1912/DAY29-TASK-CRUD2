import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import NavBar from "../NavBar";

const DataValidationSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required().min(8),
  book: yup.string().required().min(4),
  isbn: yup.number().required().min(4),
  borrowed_date: yup.date().required(),
  returned_date: yup.date().required(),
});

const AddMentor = () => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        book: "",
        isbn: "",
        borrowed_date: "",
        returned_date: "",
      },
      validationSchema: DataValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addData(values);
      },
    });
  const addData = (values) => {
    fetch("https://64100379864814e5b644b822.mockapi.io/mentors", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/user"));
  };

  return (
    <div>
      <NavBar />
      <section className="container my-5">
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
            helperText={
              touched.borrowed_date && errors.borrowed_date
                ? errors.borrowed_date
                : null
            }
          />
          <TextField
            variant="outlined"
            type="date"
            value={values.returned_date}
            name="returned_date"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.returned_date && errors.returned_date}
            helperText={
              touched.returned_date && errors.returned_date
                ? errors.returned_date
                : null
            }
          />
          <Button variant="contained" type="submit">
            Add Mentor Details
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default AddMentor;