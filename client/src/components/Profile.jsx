// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

// Assets
import avatar from "../assets/profile.png";

// Files
import { validateProfile } from "../helpers/validate";
import convertImage from "../helpers/convert";

const Profile = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      mobileNum: "",
      lastName: "",
      email: "",
      address: "",
    },
    validate: validateProfile,
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
        width="500px"
        sx={{
          boxShadow: "0 4px 30px #4747470b",
          backdropFilter: "blur(7.1px)",
          border: "3px solid#f9fafb",
        }}
      >
        <Stack alignItems="center">
          <Typography fontSize={36} fontWeight={600}>
            Profile
          </Typography>
          <Typography color="#6b7280">Update your profile details</Typography>
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

          <Stack direction="row" gap={2}>
            <TextField
              {...formik.getFieldProps("firstName")}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              {...formik.getFieldProps("lastName")}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
            />
          </Stack>

          <Stack direction="row" gap={2}>
            <TextField
              {...formik.getFieldProps("mobileNum")}
              id="outlined-basic"
              label="Mobile No"
              variant="outlined"
            />
            <TextField
              {...formik.getFieldProps("email")}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Stack>

          <TextField
            {...formik.getFieldProps("address")}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: "12px" }}
          >
            Update Details
          </Button>
          <Typography fontSize={14}>
            Come back later?{" "}
            <Link
              to={"/"}
              style={{ color: "#ef4444", textDecoration: "none" }}
            >
              Logout
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default Profile;
