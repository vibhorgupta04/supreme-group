'use client';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import React from 'react';

interface FormValues {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  subject: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Message is required'),
});

const inputClasses =
  'text-white placeholder:text-white placeholder:text-opacity-90 border-b-2 border-white border-opacity-40 bg-transparent py-2 pr-2 w-full text-base lg:text-lg focus-visible:border-opacity-100 transition-all duration-200 tracking-wide outline-none';

const ContactUs = () => {
  const initialValues: FormValues = { fullName: '', email: '', subject: '', message: '' };

  const handleSubmit = (
    values: FormValues,
    { resetForm, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    setTimeout(() => {
      resetForm();
      setSubmitting(false);
      alert('Message sent!');
    }, 500);
  };

  return (
    <section className="bg-[#0067B1] min-h-screen flex md:justify-center">
      <div className="container flex md:flex-row flex-col gap-10 justify-center md:items-start text-white py-40 px-6">
        {/* Left Column */}
        <div className="min-w-[300px] flex flex-col 2xl:gap-9 xl:gap-4 gap-4">
          <h3 className="text-5xl">Get in touch</h3>
          <hr className="w-10 bg-white h-1" />
          <div className="flex flex-col gap-7">
            <p className="text-2xl">For general enquiries</p>
            <div>
              <p className="text-xl font-semibold">Address :</p>
              <p className="text-xl">110, 16th Road, Chembur, Mumbai - 400071</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Phone :</p>
              <p className="text-xl">+91 22 25208822</p>
            </div>
            <div>
              <p className="text-xl font-semibold">Email :</p>
              <p className="text-xl">info@supremegroup.co.in</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="text-white xl:w-1/4 lg:w-2/5 w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <Field
                    name="fullName"
                    placeholder="Full name"
                    type="text"
                    className={inputClasses}
                  />
                  <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    name="email"
                    placeholder="Email"
                    type="email"
                    className={inputClasses}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    name="subject"
                    placeholder="Subject"
                    type="text"
                    className={inputClasses}
                  />
                  <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    name="message"
                    placeholder="Message"
                    as="textarea"
                    rows={4}
                    className={inputClasses}
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto ring-2 ring-white text-white hover:text-black px-12 py-2 rounded-full hover:bg-white transition"
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
