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
    book: yup.string().required().min(4),
    author: yup.string().required().min(4),
    img: yup.string().url().required().min(8),
    isbn: yup.number().required().min(4),
});
export const EditBook = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://64100379864814e5b644b822.mockapi.io/books/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return <div>{data ? <EditBookForm data={data} /> : "Loading"}</div>;
};

const EditBookForm = ({ data }) => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        id: data.id,
       book: data.book,
       author:data.author,
       img:data.img,
       isbn:data.isbn,
      },
      validationSchema: DataValidationSchema,
      onSubmit: (updateValues) => {
        EditData(updateValues);
      },
    });
  const EditData = (updateValues) => {
    fetch(`https://64100379864814e5b644b822.mockapi.io/books/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(updateValues),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/books"));
  };

  return (
   <div>
    <NavBar/>
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
           Update Book Details
          </Button>
        </Form>
      </section>
   </div>
  );
};