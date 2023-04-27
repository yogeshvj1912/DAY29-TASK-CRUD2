import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import NavBar from "../NavBar";

const DataValidationSchema = yup.object({
  book: yup.string().required().min(4),
  author: yup.string().required().min(4),
  img: yup.string().url().required().min(8),
  isbn: yup.number().required().min(4),
});

const AddBook = () => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        book: "",
        author: "",
        img: "",
        isbn: "",
      },
      validationSchema: DataValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addData(values);
      },
    });
  const addData = (values) => {
    fetch("https://64100379864814e5b644b822.mockapi.io/books", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/books"));
  };

  return (
    <div>
      <NavBar />
      
      <section className="container my-5">
        <Form onSubmit={handleSubmit} className="add-student">
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
            label="author"
            variant="outlined"
            type="text"
            value={values.author}
            name="author"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.author && errors.author}
            helperText={touched.author && errors.author ? errors.author : null}
          />

          <TextField
          label="Image url"
            variant="outlined"
            type="url"
            value={values.img}
            name="img"
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.img && errors.img}
            helperText={touched.img && errors.img ? errors.img : null}
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

          <Button variant="contained" type="submit">
            Add New Book Details
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default AddBook;