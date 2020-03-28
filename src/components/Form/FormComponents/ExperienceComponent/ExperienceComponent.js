import React from "react";
import { useFormik } from "formik";
import { Form, Button, Container, Col } from "react-bootstrap";
import styles from "./ExperienceComponent.module.css"
import * as Yup from "yup";
import {connect} from "react-redux";

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(1,"Too Short")
        .max(25, "Too long")
        .required("Required"),
    orgName: Yup.string()
        .min(2, "Too Short")
        .max(50, "Too Long")
        .required("Required"),
    startDate: Yup.date()
        .max(new Date(), "Invalid Date"),
    endDate: Yup.date()
        .max(new Date(), "Invalid Date"),
    tasks: Yup.string()
        .min(10, "Too Short")
        .max(1000, "Too Long")
});

const Experience = (props) => {
    const { handleChange, values, errors, handleSubmit, handleBlur, touched } = useFormik({
        initialValues:{
            title: "",
            orgName: "",
            startDate: "",
            endDate: "",
            tasks: "",
            present: false
        },
<<<<<<< HEAD
        validationSchema,
        onSubmit: (values) => {
            props.onAddButton(values);
            
=======
        // validationSchema,
        onSubmit: () => {
            props.onAddButton(values);
>>>>>>> 2dec3eacc5414311507db21425d18826dff61e81
        }
    });


    return(
    <Container>
        <h3 className={styles.heading}>Experience</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
            <Form.Group as={Col} lg="6">
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
                    placeholder="Enter your Title at the organisation"
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    value={values.title}
                    isInvalid={errors.title && touched.title}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.title && touched.title && errors.title}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} lg="6">
                <Form.Label htmlFor="orgName">Organisation Name</Form.Label>
                <Form.Control
                    placeholder="Enter your Organisation Name"
                    id="orgName"
                    name="orgName"
                    type="text"
                    onChange={handleChange}
                    value={values.orgName}
                    isInvalid={errors.orgName && touched.orgName}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.orgName && touched.orgName && errors.orgName}
                </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>

            <Form.Group >
                <Form.Label htmlFor="startDate">Start Date</Form.Label>
                <Form.Control
                    id="startDate"
                    name="startDate"
                    type="date"
                    onChange={handleChange}
                    value={values.startDate}
                    isInvalid={errors.startDate && touched.endDate}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.startDate && touched.startDate && errors.startDate}
                </Form.Control.Feedback>
            </Form.Group>
            {values.present === false ? (
            <Form.Group >
                <Form.Label htmlFor="endDate">End Date</Form.Label>
                <Form.Control
                    id="endDate"
                    name="endDate"
                    type="date"
                    onChange={handleChange}
                    value={values.endDate}
                    isInvalid={errors.endDate && touched.endDate}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.endDate && touched.endDate && errors.endDate}
                </Form.Control.Feedback>
            </Form.Group>
            ) : null}
            <Form.Group >
            <Form.Check
              type="checkbox"
              label="Present"
              id="present"
              value={values.present}
              onChange={handleChange}
            />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor="tasks">Tasks</Form.Label>
                <Form.Control
                    placeholder="Enter your responsibilities"
                    id="tasks"
                    name="tasks"
                    type="textarea"
                    onChange={handleChange}
                    value={values.tasks}
                    isInvalid={errors.tasks && touched.tasks}
                    onBlur={handleBlur}
                />
                <Form.Control.Feedback type="invalid">
                    {errors.tasks && touched.tasks && errors.tasks}
                </Form.Control.Feedback>
            </Form.Group>
<<<<<<< HEAD
            <Button type="submit">Add Experience</Button>
=======
            <Button  size="lg" type="submit">Add Experience</Button>
>>>>>>> 2dec3eacc5414311507db21425d18826dff61e81
            <Button onClick={() => props.onNextButton()}>NEXT</Button>
        </Form>
       
    </Container>
    );
};
const mapDispatchToProps = dispatch => {
    return {
      onAddButton: values => dispatch({ type: "ADD_EXPERIENCE", payload: values }),
      onNextButton: () => dispatch({type: "GO_ABILITIES"})
    };
  };

export default connect(null, mapDispatchToProps)(Experience);