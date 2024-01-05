"use client"
import { useFormik } from "formik";
import React, { useState } from "react";
import ContactFormSchemas from "@/schema/Contact_form_schema"
import Image from "next/image";
import From_image from "@/images/Form_image.png";
import { Dropdown } from 'primereact/dropdown';
import Button from "@/Assets/Buttons/button4"
import styles  from "@/Common/Form/Form.module.css"
const Page = () => {
  const initialValues = {
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
    checkbox: false,
  };
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: ContactFormSchemas,
    onSubmit: (value, action) => {
      action.resetForm();
      console.log("value", value);
    },
  });

  console.log(values);

  return (
    <div className={styles.Contact_form_section}>
      <div className={styles.contact_form}>
        <div className={styles.contact_form_wrapper}>
          <h1 className={styles.contact_form_title}>Reach out to us</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="fullName">Full Name</label>
              <input
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
              <label htmlFor="LastName">Last Name</label>
              <input
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
              <label htmlFor="email">Email</label>
              <input
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
              <label htmlFor="phone">Phone No</label>
              <input
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
              <label htmlFor="Address">Address</label>
              <textarea
                name=""
                id=""
                cols="10"
                rows="3"
                className={styles.field_Address}
              ></textarea>
              {touched.Address && errors.Address && (
                <p className={styles.error}>{errors.Address}</p>
              )}
            </div>
            <div className={styles.field}>
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="How many BHK ( Bedroom ) is your new home" className={styles.dropdown_menu} />
              {touched.Address && errors.Address && (
                <p className={styles.error}>{errors.Address}</p>
              )}
            </div>

            
            <div className={styles.field}>
              <label htmlFor="Intro">Brief description of your Project</label>
              <textarea
                name="Intro"
                id="intro"
                cols="10"
                rows="3"
                className={styles.field_Address}
              ></textarea>
              {touched.Intro && errors.Intro && (
                <p className={styles.error}>{errors.Intro}</p>
              )}
            </div>

            <div className={styles.field}>
              <div className={styles.Submit_button_outer}>
              <Button button_text="Submit"/>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.contact_us_image}>
       <div className={styles.FormImage_outer}>
       <Image src={From_image} alt="" srcset="" className={styles.contact_img} />
       </div>
      </div>
    </div>
  );
};

export default Page;
