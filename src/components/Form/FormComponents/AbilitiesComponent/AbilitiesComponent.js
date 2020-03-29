import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./AbilitiesComponent.module.css";
import {connect} from "react-redux";

const validationSchema = Yup.object().shape({
  skills: Yup.string().required("Atleast one skill is required"),
  achievements: Yup.string().min(10, "Too Short!")
});

const Abilities = (props) => {
  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    handleBlur,
    touched
  } = useFormik({
    initialValues: {
      skills: "",
      languages: "",
      certifications: "",
      hobbies: "",
      achievements: ""
    },
    validationSchema,
    onSubmit: () => {
      props.onNextButton(values);
    }
  });

  return (
    <Container>
      <h3 className={styles.heading}>Abilities Details</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="skills">Skills</Form.Label>
          <Form.Control
            type="text"
            id="skills"
            name="skills"
            value={values.skills}
            onBlur={handleBlur}
            isInvalid={errors.skills && touched.skills}
            onChange={handleChange}
            placeholder="Enter your skills seperated by comma(,)"
          />
          <Form.Control.Feedback type="invalid">
            {errors.skills && touched.skills && errors.skills}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="languages">Languages</Form.Label>
          <Form.Control
            type="text"
            id="languages"
            name="languages"
            value={values.languages}
            onChange={handleChange}
            placeholder="Enter your languages seperated by comma(,)"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="achievements">Achievements</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            value={values.achievements}
            isInvalid={errors.achievements && touched.achievements}
            onBlur={handleBlur}
            onChange={handleChange}
            id="achievements"
            name="achievements"
          />
          <Form.Control.Feedback type="invalid">
            {errors.achievements && touched.achievements && errors.achievements}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="hobbies">Hobbies</Form.Label>
          <Form.Control
            type="text"
            id="hobbies"
            name="hobbies"
            value={values.hobbies}
            onChange={handleChange}
            placeholder="Enter your hobbies seperated by comma(,)"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onNextButton: values => dispatch({ type: "ADD_ABILITIES", payload: values })
  };
};


export default connect(null,mapDispatchToProps)(Abilities);
