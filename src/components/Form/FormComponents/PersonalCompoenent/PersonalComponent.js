import React from "react";
import { useFormik } from "formik";
import { Form, Button, Col, Container } from "react-bootstrap";
import * as Yup from "yup";
import styles from "./PersonalComponent.module.css";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import Education from "../EducationComponent/EducationComponent";
import { connect } from "react-redux";

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
  country: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  githubUrl: Yup.string()
    .url("Enter a valid Url")
    .required("Required"),
  linkedinUrl: Yup.string()
    .url("Enter a valid Url")
    .required("Required")
});

const Personal = props => {
  const {
    handleChange,
    values,
    errors,
    handleSubmit,
    handleBlur,
    touched
  } = useFormik({
    initialValues: {
      fullName: "",
      aboutMe: "",
      email: "",
      phoneNum: "",
      country: "",
      state: "",
      city: "",
      githubUrl: "",
      linkedinUrl: ""
    },
    validationSchema,
    onSubmit: () => {
      props.onNextButton(values);
    }
  });
  return (
    <BrowserRouter>
      <Container>
        <h3 className={styles.heading}>Personal Details</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="fullName">Name</Form.Label>
            <Form.Control
              placeholder="Enter Your Name"
              id="fullName"
              name="fullName"
              type="text"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullName}
              isInvalid={errors.fullName && touched.fullName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.fullName && touched.fullName && errors.fullName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="aboutMe">About Me</Form.Label>
            <Form.Control
              placeholder="Tell me about yourself."
              id="aboutMe"
              name="aboutMe"
              type="textarea"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.aboutMe}
              isInvalid={errors.aboutMe && touched.aboutMe}
            />
            <Form.Control.Feedback type="invalid">
              {errors.aboutMe && touched.aboutMe && errors.aboutMe}
            </Form.Control.Feedback>
            <Form.Text className="text-muted">Maximum 1000 words.</Form.Text>
            {errors.aboutMe ? errors.aboutMe : null}
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                id="email"
                onBlur={handleBlur}
                name="email"
                onChange={handleChange}
                value={values.email}
                isInvalid={errors.email && touched.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email && touched.email && errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label htmlFor="phoneNum">Contact Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your phone number"
                id="phoneNum"
                name="phoneNum"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNum}
                isInvalid={errors.phoneNum && touched.phoneNum}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phoneNum && touched.phoneNum && errors.phoneNum}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label htmlFor="country">Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your country"
              id="country"
              name="country"
              onChange={handleChange}
              value={values.country}
              onBlur={handleBlur}
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
              onBlur={handleBlur}
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
              onBlur={handleBlur}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label htmlFor="githubUrl">Github URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your githubUrl"
                id="githubUrl"
                name="githubUrl"
                onChange={handleChange}
                value={values.githubUrl}
                onBlur={handleBlur}
                isInvalid={errors.githubUrl && touched.githubUrl}
              />
              <Form.Control.Feedback type="invalid">
                {errors.githubUrl && touched.githubUrl && errors.githubUrl}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label htmlFor="linkedinUrl">LinkedIn URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your linkedInUrl"
                id="linkedinUrl"
                name="linkedinUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.linkedinUrl}
                isInvalid={errors.linkedinUrl && touched.linkedinUrl}
              />
              <Form.Control.Feedback type="invalid">
                {errors.linkedinUrl &&
                  touched.linkedinUrl &&
                  errors.linkedinUrl}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          {/* <Link to="/education" onClick={props.onNextButton}>Next</Link> */}
          <Button type="submit">NEXT</Button>
        </Form>
      </Container>
      <Switch>
        <Route path="/education" exact component={Education} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    prsnl: state.personal
  };
};

const mapDispacthToPros = dispatch => {
  return {
    onNextButton: values => dispatch({ type: "ADD_PERSONAL", payload: values })
  };
};

export default connect(mapStateToProps, mapDispacthToPros)(Personal);
