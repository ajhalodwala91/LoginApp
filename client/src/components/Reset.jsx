// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

// Assets
import avatar from "../assets/profile.png";

// Files
import { validatePassword, validateResetPassword } from "../helpers/validate";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: validateResetPassword,
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
            Reset Password
          </Typography>
          <Typography color="#6b7280">Enter new password</Typography>
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
          <TextField
            {...formik.getFieldProps("password")}
            id="outlined-basic"
            label="New Password"
            variant="outlined"
            fullWidth
          />
          <TextField
            {...formik.getFieldProps("confirmPassword")}
            id="outlined-basic"
            label="Re-enter Password"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: "12px" }}
          >
            Reset
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Reset;
