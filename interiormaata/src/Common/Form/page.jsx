"use client";
import { useFormik } from "formik";
import React, { useState } from "react";
import {ContactFormSchemas1} from "../../schema/Contact_form_schema";
import Image from "next/image";
import From_image from "@/images/Form_image.png";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@/Assets/Buttons/button4";
import styles from "@/Common/Form/Form.module.css";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./immx.css";
const Page = () => {
  const [formResponse, setFormResponse] = useState("");
  const initialValues = {
    Name: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
    select:"",
    Description: "",
   
  };

  const submitMessage = () => {
    toast.success("Form Submitted Successfully...");
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: ContactFormSchemas1,
    onSubmit: (value, action) => {
      console.log("value", value);
      emailjs
        .send(
          "service_s8jkgxd",
          "template_ld39jwp",
          values,
          "SCLviec62g3U8MFm4"
        )
        .then((response) => {
          console.log("Email sent successfully....", response);
          setFormResponse(response);
          action.resetForm();
        })
        .catch((error) => {
          console.error("Error", error);
        });
      submitMessage();
    },
  });

  console.log(values);
  console.log("response", formResponse.text);

  return (
    <div className={styles.Contact_form_section}>
      <div className={styles.contact_form}>
        <div className={styles.contact_form_wrapper}>
          <h1 className={styles.contact_form_title}>Reach out to us</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                type="text"
                name="Name"
                onChange={handleChange}
                value={values.Name}
              />
              {touched.Name && errors.Name && (
                <p className={styles.error}>{errors.Name}</p>
              )}
            </div>
            <div className={styles.field}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                type="text"
                name="LastName"
                onChange={handleChange}
                value={values.LastName}
              />
              {touched.LastName && errors.LastName && (
                <p className={styles.error}>{errors.LastName}</p>
              )}
            </div>

            <div className={styles.field}>
              <TextField
                id="outlined-basic"
                label="Email *"
                variant="outlined"
                type="email"
                name="Email"
                onChange={handleChange}
                value={values.Email}
              />
              {touched.Email && errors.Email && (
                <p className={styles.error}>{errors.Email}</p>
              )}
            </div>

            <div className={styles.field}>
              <TextField
                id="outlined-basic"
                label="Phone No"
                variant="outlined"
                type="tel"
                name="Phone"
                onChange={handleChange}
                value={values.Phone}
              />
              {touched.Phone && errors.Phone && (
                <p className={styles.error}>{errors.Phone}</p>
              )}
            </div>

            <div className={styles.field}>
              <FormControl fullWidth>
                <TextField
                  name="Address"
                  id="outlined-multiline-static"
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={4}
                  className={styles.field_Address}
                  onChange={handleChange}
                  value={values.Address}
                ></TextField>
              </FormControl>
              {touched.Address && errors.Address && (
                <p className={styles.error}>{errors.Address}</p>
              )}
            </div>

            <div className={styles.field}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  How many BHK ( Bedroom ) is your new home
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.select}
                  label="How many BHK ( Bedroom ) is your new home"
                  onChange={handleChange}
                  name="select"
                >
                  <MenuItem value={1}>One</MenuItem>
                  <MenuItem value={2}>Two</MenuItem>
                  <MenuItem value={3}>Three</MenuItem>
                </Select>
              </FormControl>
              {touched.select && errors.select && (
                <p className={styles.error}>{errors.select}</p>
              )}
            </div>

            <div className={styles.field}>
              <FormControl fullWidth>
                <TextField
                  name="Description"
                  id="outlined-multiline-static"
                  label="Brief description of your Project"
                  variant="outlined"
                  multiline
                  rows={4}
                  className={styles.field_Address}
                  value={values.Description}
                  onChange={handleChange}
                ></TextField>
              </FormControl>
              {touched.Description && errors.Description && (
                <p className={styles.error}>{errors.Description}</p>
              )}
            </div>

            <div className={styles.field}>
              <div className={styles.Submit_button_outer}>
                <Button button_text="Submit" />
                {formResponse.text === "OK" && (
                  <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={true}
                    theme="light"
                    transition={Slide}
                    className={"contactFormNotification"}
                  />
                )}
              </div>
            </div>
            
          </form>
        </div>
      </div>
      <div className={styles.contact_us_image}>
        <div className={styles.FormImage_outer}>
          <Image
            src={From_image}
            alt=""
            srcset=""
            className={styles.contact_img}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
