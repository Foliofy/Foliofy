import React from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
<<<<<<< HEAD
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  aboutMe: Yup.string()
    .min(10, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
    phoneNum: Yup.number()
    .min(12, "Invalid Number")
    .positive("Enter a valid Number")
    .required("Required"),
    country: Yup.string()
    .required("Required"),
    state: Yup.string()
    .required("Required"),
    city: Yup.string()
    .required("Required"),
    githubUrl: Yup.string()
    .url("Enter a valid Url")
    .required("Required"),
    linkedinUrl: Yup.string()
    .url("Enter a valid Url")
    .required("Required")
});

const Personal = () => {
  const {  handleChange, values, errors,handleSubmit } = useFormik({
=======
const Personal = (props) => {
  const formik = useFormik({
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
    initialValues: {
      fullName: "",
      aboutMe: "",
      email: "",
<<<<<<< HEAD
      phoneNum: "",
=======
      phoneNumber: "",
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      country: "",
      state: "",
      city: "",
      githubUrl: "",
      linkedinUrl: ""
    },
<<<<<<< HEAD
    validationSchema,
    onSubmit: values => {
      console.log(values);
      console.log(validationSchema);
    //   alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Form onSubmit={handleSubmit}>
=======
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      <Form.Group>
        <Form.Label htmlFor="fullName">Name</Form.Label>
        <Form.Control
          placeholder="Enter Your Name"
          id="fullName"
          name="fullName"
          type="text"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.fullName}
          isInvalid={!!errors.fullName}
        />
        <Form.Control.Feedback type="invalid">
          {errors.fullName} 
        </Form.Control.Feedback>
          
         
=======
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="aboutMe">About Me</Form.Label>
        <Form.Control
          placeholder="Tell me about yourself."
          id="aboutMe"
          name="aboutMe"
          type="textarea"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.aboutMe}
        />
        
        <Form.Text className="text-muted">Maximum 1000 words.</Form.Text>
        {errors.aboutMe ? errors.aboutMe : null}
=======
          onChange={formik.handleChange}
          value={formik.values.aboutMe}
        />
        <Form.Text className="text-muted">Maximum 1000 words.</Form.Text>
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email address"
          id="email"
          name="email"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.email}
        />
        {errors.email ? errors.email : null}
=======
          onChange={formik.handleChange}
          value={formik.values.email}
        />
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="phoneNum">Contact Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your phone number"
          id="phoneNum"
          name="phoneNum"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.phoneNum}
        />
        {errors.phoneNum ? errors.phoneNum : null}
=======
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="country">Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your country"
          id="country"
          name="country"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.country}
        />
        {errors.country ? errors.country : null}
=======
          onChange={formik.handleChange}
          value={formik.values.country}
        />
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="state">State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your state"
          id="state"
          name="state"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.state}
        />
        {errors.state ? errors.state : null}
=======
          onChange={formik.handleChange}
          value={formik.values.state}
        />
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="city">City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your city"
          id="city"
          name="city"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.city}
        />
        {errors.city ? errors.city : null}
=======
          onChange={formik.handleChange}
          value={formik.values.city}
        />
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="githubUrl">Github URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your githubUrl"
          id="githubUrl"
          name="githubUrl"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.githubUrl}
        />
        {errors.githubUrl ? errors.githubUrl : null}
=======
          onChange={formik.handleChange}
          value={formik.values.githubUrl}
        />
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="linkedinUrl">LinkedIn URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your linkedInUrl"
          id="linkedinUrl"
          name="linkedinUrl"
<<<<<<< HEAD
          onChange={handleChange}
          value={values.linkedinUrl}
        />
        {errors.linkedinUrl ? errors.linkedinUrl : null}
      </Form.Group>
      <Button type="submit">Submit</Button>
=======
          onChange={formik.handleChange}
          value={formik.values.linkedinUrl}
        />
      </Form.Group>
      <Button type="submit">
        Submit
      </Button>
>>>>>>> 9ce23483ab422b31291fa84ea91cfb750bd0fb10
    </Form>
  );
};

export default Personal;
