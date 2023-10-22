import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 20) {
    errors.firstName = "Must be 20 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  }
  // else if()

  return errors;
};

const Login = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="field">
          <label htmlFor="firstName">First Name : </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && (
            <div className="error">{formik.errors.firstName}</div>
          )}
        </div>

        <div className="field">
          <label htmlFor="lastName">Last Name : </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && (
            <div className="error">{formik.errors.lastName}</div>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email Address : </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
};

export default Login;
