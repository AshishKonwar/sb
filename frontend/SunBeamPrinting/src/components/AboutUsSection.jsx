import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

const promos = [
  {
    title: "Get 20 free holiday cards when you buy 50",
    subtitle: "Seasonal Savings Bonus",
    desc: "Check “gorgeous cards for absolutely everyone” off your list – without breaking the bank.",
    endDate: "Ends Nov. 9",
    btnText: "Shop holiday cards",
    img: "https://images.unsplash.com/photo-1608889175184-6fddfcb17eb1", // replace with your card image
  },
  {
    title: "Up to 50% off wall calendars",
    subtitle: "Seasonal Savings Bonus",
    desc: "Keep track of the year ahead – and remember every great moment.",
    endDate: "Ends Nov. 9",
    btnText: "Shop wall calendars",
    img: "https://images.unsplash.com/photo-1606761568499-6f5b3e1c34c7", // replace with your calendar image
  },
];

export default function AboutUsSection() {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={2}>
        {promos.map((promo, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 2,
                overflow: "hidden",
                height: 360,
                backgroundImage: `url(${promo.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Overlay Text Box */}
              <Box
                sx={{
                  backgroundColor: "rgba(0, 51, 33, 0.95)",
                  color: "#fff",
                  borderRadius: 2,
                  p: 4,
                  maxWidth: 340,
                  ml: 4,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#b8e6c2", textTransform: "uppercase", mb: 1 }}
                >
                  {promo.subtitle}
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{ mb: 1, lineHeight: 1.3 }}
                >
                  {promo.title}
                </Typography>

                <Typography variant="body2" sx={{ mb: 2 }}>
                  {promo.desc}
                </Typography>

                <Typography variant="caption" display="block" sx={{ mb: 2 }}>
                  {promo.endDate}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#003321",
                    textTransform: "none",
                    fontWeight: 600,
                    "&:hover": { backgroundColor: "#f4f4f4" },
                  }}
                >
                  {promo.btnText}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
