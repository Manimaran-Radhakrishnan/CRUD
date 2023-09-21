import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

export function AddUser() {
  const navigate = useNavigate();

  const formValidationSchema = yup.object({
    image: yup.string().required().url(),
    name: yup.string().required(),
    age: yup.number().required(),
    email: yup.string().required().email(),
    phone: yup.number().required().min(10),
    work: yup.string().required(),
    experiance: yup.string().required(),
  });
  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        image: "",
        name: "",
        age: "",
        email: "",
        phone: "",
        work: "",
        experiance: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (newuser) => {
        Adduser(newuser);
      },
    });
  const Adduser = async (newuser) => {
    await fetch("https://63f456b355677ef68bb9fd26.mockapi.io/user", {
      method: "POST",
      body: JSON.stringify(newuser),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/userlist");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <TextField
          name="image"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.image}
          label="Image url"
          variant="outlined"
          placeholder="Image"
          error={touched.image && errors.image}
          helperText={touched.image && errors.image ? errors.image : null}
        />
        <TextField
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          label="Name"
          variant="outlined"
          placeholder="Name"
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />
        <TextField
          name="age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
          label="Age"
          variant="outlined"
          placeholder="Age"
          error={touched.age && errors.age}
          helperText={touched.age && errors.age ? errors.age : null}
        />
        <TextField
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          label="Email"
          variant="outlined"
          placeholder="Email"
          error={touched.email && errors.email}
          helperText={touched.email && errors.email ? errors.email : null}
        />
        <TextField
          name="phone"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phone}
          label="Phone"
          variant="outlined"
          placeholder="Phone"
          error={touched.phone && errors.phone}
          helperText={touched.phone && errors.phone ? errors.phone : null}
        />
        <TextField
          name="work"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.work}
          label="Work"
          variant="outlined"
          placeholder="Work"
          error={touched.work && errors.work}
          helperText={touched.work && errors.work ? errors.work : null}
        />
        <TextField
          name="experience"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.experiance}
          label="Experience"
          variant="outlined"
          placeholder="Experience"
          error={touched.experience && errors.experience}
          helperText={
            touched.experience && errors.experience ? errors.experience : null
          }
        />

        <Button type="submit" variant="contained" color="primary">
          ADD USER
        </Button>
      </div>
    </form>
  );
}
