// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

// Assets
import avatar from "../assets/profile.png";

// Files
import { validatePassword } from "../helpers/validate";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "admin@123",
    },
    validate: validatePassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
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
        width="400px"
        sx={{
          boxShadow: "0 4px 30px #4747470b",
          backdropFilter: "blur(7.1px)",
          border: "3px solid#f9fafb",
        }}
      >
        <Stack alignItems="center">
          <Typography fontSize={36} fontWeight={600}>
            Hello Again!
          </Typography>
          <Typography color="#6b7280">
            Explore more by connecting with us
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
          <img
            src={avatar}
            alt="Profile"
            height="120px"
            style={{ border: "2px solid #f3f4f6", borderRadius: "50%" }}
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
            Sign In
          </Button>
          <Typography fontSize={14}>
            Forgot Password?{" "}
            <Link
              to={"/recovery"}
              style={{ color: "#ef4444", textDecoration: "none" }}
            >
              Recover Now
            </Link>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default Password;
