import React from "react";
import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
const Personal = (props) => {
  const formik = useFormik({
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
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Label htmlFor="fullName">Name</Form.Label>
        <Form.Control
          placeholder="Enter Your Name"
          id="fullName"
          name="fullName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.fullName}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="aboutMe">About Me</Form.Label>
        <Form.Control
          placeholder="Tell me about yourself."
          id="aboutMe"
          name="aboutMe"
          type="textarea"
          onChange={formik.handleChange}
          value={formik.values.aboutMe}
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
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="phoneNum">Contact Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your phone number"
          id="phoneNum"
          name="phoneNum"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="country">Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your country"
          id="country"
          name="country"
          onChange={formik.handleChange}
          value={formik.values.country}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="state">State</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your state"
          id="state"
          name="state"
          onChange={formik.handleChange}
          value={formik.values.state}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="city">City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your city"
          id="city"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="githubUrl">Github URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your githubUrl"
          id="githubUrl"
          name="githubUrl"
          onChange={formik.handleChange}
          value={formik.values.githubUrl}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="linkedinUrl">LinkedIn URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your linkedInUrl"
          id="linkedinUrl"
          name="linkedinUrl"
          onChange={formik.handleChange}
          value={formik.values.linkedinUrl}
        />
      </Form.Group>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Personal;
