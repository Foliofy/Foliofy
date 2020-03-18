import React from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
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
    .required("Required")
});

const Personal = (props) => {
  const {  handleChange, values, errors,handleSubmit } = useFormik({
    initialValues: {
      fullName: "",
      aboutMe: "",
      email: "",
      phoneNumber: "",
      country: "",
      state: "",
      city: "",
      githubUrl: "",
      linkedinUrl: ""
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    //   alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="fullName">Name</Form.Label>
        <Form.Control
          placeholder="Enter Your Name"
          id="fullName"
          name="fullName"
          type="text"
          onChange={handleChange}
          value={values.fullName}
        />
        {/* {errors.fullName ? errors.fullName : null} */}
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="aboutMe">About Me</Form.Label>
        <Form.Control
          placeholder="Tell me about yourself."
          id="aboutMe"
          name="aboutMe"
          type="textarea"
          onChange={handleChange}
          value={values.aboutMe}
        />
        <Form.Text className="text-muted">Maximum 1000 words.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email address"
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="phoneNum">Contact Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your phone number"
          id="phoneNum"
          name="phoneNum"
          onChange={handleChange}
          value={values.phoneNumber}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="country">Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your country"
          id="country"
          name="country"
          onChange={handleChange}
          value={values.country}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="state">State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your state"
          id="state"
          name="state"
          onChange={handleChange}
          value={values.state}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="city">City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your city"
          id="city"
          name="city"
          onChange={handleChange}
          value={values.city}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="githubUrl">Github URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your githubUrl"
          id="githubUrl"
          name="githubUrl"
          onChange={handleChange}
          value={values.githubUrl}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="linkedinUrl">LinkedIn URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your linkedInUrl"
          id="linkedinUrl"
          name="linkedinUrl"
          onChange={handleChange}
          value={values.linkedinUrl}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Personal;
