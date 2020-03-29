import React from "react";
import * as Yup from "yup";
import { Form, Button, Container, Col } from "react-bootstrap";
import { useFormik } from "formik";
import styles from "./EducationComponent.module.css";
import { connect } from "react-redux";

const validationSchema = Yup.object().shape({
  instituteName: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  degree: Yup.string()
    .required("Degree is Required"),
  speacialization: Yup.string()
    .min(2, "Too Short!")
    .required("Speacialization is Required"),
  other: Yup.string()
    .min(2, "Too Short"),
  graduationStart: Yup.date().max(new Date(), "Invalid Date"),
  graduationEnd: Yup.date().max(new Date(), "Invalid Date"),
  percentage: Yup.number().positive("Invalid Percentage")
});

const Education = (props) => {
  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    handleBlur,
    touched
  } = useFormik({
    initialValues: {
      instituteName: "",
      degree: "B.Tech",
      other: "",
      speacialization: "",
      graduationStart: "",
      present: false,
      graduationEnd: "",
      percentage: ""
    },
    // validationSchema,
    onSubmit: () => {
      props.onAddButton(values);
    }
  });
  return (
    <Container>
      <h3 className={styles.heading}>Education Details</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="instituteName">Institute Name</Form.Label>
          <Form.Control
            id="instituteName"
            type="text"
            placeholder="Enter your institute name"
            name="instituteName"
            onChange={handleChange}
            value={values.instituteName}
            onBlur={handleBlur}
            isInvalid={errors.instituteName && touched.instituteName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.instituteName &&
              touched.instituteName &&
              errors.instituteName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label htmlFor="degree">Degree</Form.Label>
            <Form.Control
              id="degree"
              as="select"
              value={values.degree}
              isInvalid={!!errors.degree}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              <option value="B.Tech">B.Tech/B.S</option>
              <option value="M.Tech">M.Tech/M.S</option>
              <option value="PhD">PhD</option>
              <option value="highSchool">High School</option>
              <option value="other">Other</option>
            </Form.Control>
          </Form.Group>
          {values.degree === "other" ? (
            <Form.Group as={Col} md="6">
              <Form.Label htmlFor="other">
                Please mention your degree
              </Form.Label>
              <Form.Control
                id="other"
                type="text"
                placeholder="Mention your degree"
                name="other"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.other}
                isInvalid={errors.other && touched.other}
              />
              <Form.Control.Feedback type="invalid">
                {errors.other && touched.other && errors.other}
              </Form.Control.Feedback>
            </Form.Group>
          ) : null}
        </Form.Row>

        <Form.Group>
          <Form.Label htmlFor="speacialization">Speacialization</Form.Label>
          <Form.Control
            id="speacialization"
            onBlur={handleBlur}
            type="text"
            placeholder="Enter your Specialization"
            name="speacialization"
            onChange={handleChange}
            value={values.speacialization}
            isInvalid={errors.speacialization && touched.speacialization}
          />
          <Form.Control.Feedback type="invalid">
            {errors.speacialization &&
              touched.speacialization &&
              errors.speacialization}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="graduationStart">Start Year</Form.Label>
          <Form.Control
            id="graduationStart"
            placeholder="Enter Graduation Start Year"
            onBlur={handleBlur}
            name="graduationStart"
            type="date"
            onChange={handleChange}
            value={values.graduationStart}
            isInvalid={!!errors.graduationStart}
          />
          <Form.Control.Feedback type="invalid">
            {errors.graduationStart &&
              touched.graduationStart &&
              errors.graduationStart}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Present"
            id="present"
            value={values.present}
            onChange={handleChange}
          />
        </Form.Group>
        {values.present === false ? (
          <Form.Group>
            <Form.Label htmlFor="graduationEnd">End Year</Form.Label>
            <Form.Control
              id="graduationEnd"
              placeholder="Enter Graduation End Year"
              onBlur={handleBlur}
              name="graduationEnd"
              type="date"
              onChange={handleChange}
              value={values.graduationEnd}
              isInvalid={!!errors.graduationEnd}
            />
            <Form.Control.Feedback type="invalid">
              {errors.graduationEnd &&
                touched.graduationEnd &&
                errors.graduationEnd}
            </Form.Control.Feedback>
          </Form.Group>
        ) : null}

        <Form.Group>
          <Form.Label htmlFor="percentage">Percentage/CGPA</Form.Label>
          <Form.Control
            id="percentage"
            type="number"
            placeholder="Enter Percentage"
            onBlur={handleBlur}
            name="percentage"
            onChange={handleChange}
            value={values.percentage}
            isInvalid={errors.percentage && touched.percentage}
          />
          <Form.Control.Feedback type="invalid">
            {errors.percentage && touched.percentage && errors.percentage}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Add Education</Button>
      </Form>
      <Button onClick={() => props.onNextButton()}>NEXT</Button>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddButton: values => dispatch({ type: "ADD_EDUCATION", payload: values }),
    onNextButton: () => dispatch({type: "GO_EXPERIENCE"})
  };
};

export default connect(null, mapDispatchToProps)(Education);
