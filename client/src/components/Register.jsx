// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

// Assets
import avatar from "../assets/profile.png";

// Files
import { validateRegistration } from "../helpers/validate";
import convertImage from "../helpers/convert";

const Register = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: validateRegistration,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertImage(e.target.files[0]);
    setFile(base64);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
        bgcolor="#ffffff8c"
        borderRadius="15px"
        p="50px 20px"
        width="450px"
        sx={{
          boxShadow: "0 4px 30px #4747470b",
          backdropFilter: "blur(7.1px)",
          border: "3px solid#f9fafb",
        }}
      >
        <Stack alignItems="center">
          <Typography fontSize={36} fontWeight={600}>
            Register Now
          </Typography>
          <Typography color="#6b7280">
            More than happy to welcome you
          </Typography>
        </Stack>

        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "80%",
          }}
        >
          <label
            htmlFor="profile"
            style={{ display: "grid", placeItems: "center" }}
          >
            <img
              src={file || avatar}
              alt="Profile"
              height="120px"
              style={{
                border: "2px solid #f3f4f6",
                borderRadius: "50%",
              }}
            />
            <input
              onChange={onUpload}
              type="file"
              id="profile"
              style={{ display: "none" }}
            />
          </label>

          <TextField
            {...formik.getFieldProps("email")}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...formik.getFieldProps("username")}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...formik.getFieldProps("password")}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: "12px" }}
          >
            Sign Up
          </Button>
          <Typography fontSize={14}>
            Are you a member?{" "}
            <Link
              to={"/"}
              style={{ color: "#ef4444", textDecoration: "none" }}
            >
              Login here
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default Register;
