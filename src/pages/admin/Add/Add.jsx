import axios from 'axios'
import { Formik } from 'formik';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
const Add = () => {
  return (
    <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ title: '', image: '',price:'', }}
     
      onSubmit={(values, { setSubmitting }) => {
       axios.post("http://localhost:3000/products",{
        id: uuidv4 (),
        title: values.title,
        image:values.image,
        price:values.price,

       }).then(res=>{
        console.log(res)
       })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder='title'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <input
            type="text"
            name="image"
            placeholder='image'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          />
          <input
            type="number"
            name="price"
            placeholder='price'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
  )
}

export default Add