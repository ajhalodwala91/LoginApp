// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Toaster } from "react-hot-toast";

const Recovery = () => {
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
            Recovery
          </Typography>
          <Typography color="#6b7280">
            Enter OTP to recover password
          </Typography>
        </Stack>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "80%",
          }}
        >
          <Typography fontSize={14}>OTP sent to your email address</Typography>
          <TextField
            id="outlined-basic"
            label="OTP"
            variant="outlined"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: "12px" }}
          >
            Recover
          </Button>
          <Typography fontSize={14}>
            Didn't receive an OTP?{" "}
            <button style={{border: "none", outline: "none", cursor: "pointer", color: "#ef4444"}} >
              Resend
            </button>
          </Typography>
        </form>
      </Box>
    </>
  );
};

export default Recovery;
