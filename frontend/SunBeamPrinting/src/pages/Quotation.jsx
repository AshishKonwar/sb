import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Breadcrumbs,
  Link,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RequestQuotation() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setStatus("Sending your request...");

    try {
      const response = await axios.post("http://localhost:8000/request-quotation/", data);

      if (response.data.success) {
        setStatus("✅ Quotation request sent successfully!");
        console.log("Quotation sent successfully:", response.data);
        reset();
      } else {
        setStatus("❌ Failed to send request. Please try again.");
        console.error("Error response:", response.data.error);
      }
    } catch (error) {
      console.error("Error sending quotation request:", error);
      setStatus("❌ Unable to send request. Check console for details.");
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: "#061727", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 6 }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            color: "#fbfbf9e8",
            fontSize: "0.85rem",
            "& a, & p": { fontSize: "0.85rem" },
          }}
        >
          <Link
            underline="hover"
            color="#fbfbf9e8"
            sx={{
              cursor: "pointer",
              transition: "color 0.3s ease",
              "&:hover": { color: "#01A9D8" },
            }}
            onClick={() => navigate("/")}
          >
            Home
          </Link>
          <Typography color="#fbfbf9e8">Request Quotation</Typography>
        </Breadcrumbs>
      </Box>

      {/* Main Layout */}
      <Grid container spacing={10} justifyContent="center" mt={1}>
        {/* Left Side Info */}
        <Grid item xs={12} md={5}>
          <Box sx={{ lineHeight: 1.8, color: "#fbfbf9e8" }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              - Feel free to explain your needs.
              <br />
              - Fill out the form with your requirement details to get a quotation.
              <br />
              - Not sure what you need? Our experts will help via phone or email.
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontWeight: 600, color: "#01A9D8", mt: 3 }}
            >
              For Sales Related Enquiry:
            </Typography>

            <Typography variant="body1" sx={{ mt: 1 }}>
              Email:{" "}
              <Link
                href="mailto:info@sunbeampress.com"
                sx={{
                  color: "#fbfbf9e8",
                  "&:hover": { color: "#01A9D8" },
                }}
              >
                info@sunbeampress.com
              </Link>
              <br />
              Ph:{" "}
              <Typography
                component="span"
                sx={{ fontWeight: 600, color: "#01A9D8" }}
              >
                +91-98540-36874 / +91-98540-73076
              </Typography>
            </Typography>
          </Box>
        </Grid>

        {/* Right Side - Form */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: "#ffffff",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.45)",
              },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              fontWeight={600}
              sx={{ color: "#061727", mb: 2 }}
            >
              Fill the form to get a quotation
            </Typography>

            <Box
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Name */}
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Your name is required ✍️" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name*"
                    fullWidth
                    margin="normal"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />

              {/* Email */}
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required 📧",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message:
                      "Please enter a valid email — e.g. you@example.com ✉️",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email ID*"
                    fullWidth
                    margin="normal"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />

              {/* Mobile */}
              <Controller
                name="mobile"
                control={control}
                defaultValue=""
                rules={{
                  required: "Mobile number is required 📱",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit number 🔢",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile No.*"
                    fullWidth
                    margin="normal"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />
                )}
              />

              {/* Address */}
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={2}
                  />
                )}
              />

              {/* Requirement Details */}
              <Controller
                name="requirements"
                control={control}
                defaultValue=""
                rules={{
                  required: "Please mention your requirements 📝",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Requirement Details*"
                    fullWidth
                    margin="normal"
                    multiline
                    rows={3}
                    error={!!errors.requirements}
                    helperText={errors.requirements?.message}
                  />
                )}
              />

              {/* Delivery Date */}
              <Controller
                name="deliveryDate"
                control={control}
                defaultValue=""
                rules={{
                  required: "Please select a preferred delivery date 📅",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Delivery Date (On/Before)*"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    margin="normal"
                    error={!!errors.deliveryDate}
                    helperText={errors.deliveryDate?.message}
                  />
                )}
              />

              {/* Submit */}
              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  py: 1.2,
                  mt: 3,
                  backgroundColor: "#01A9D8",
                  "&:hover": { backgroundColor: "#0192BE" },
                }}
              >
                Send Request
              </Button>

              {status && (
                <Typography
                  sx={{ mt: 2, fontSize: "0.9rem", textAlign: "center" }}
                  color={
                    status.startsWith("✅")
                      ? "success.main"
                      : status.startsWith("❌")
                      ? "error.main"
                      : "text.secondary"
                  }
                >
                  {status}
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
