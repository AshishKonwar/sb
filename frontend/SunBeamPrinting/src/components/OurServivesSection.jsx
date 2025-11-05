import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Multicolor Offset Printing",
    // subtitle: "Prum Cum Mono",
    description:
      "Four color or offset printing handled to attract the audience and offer consistency.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Digital Printing (Color & Mono)",
    // subtitle: "Mono",
    description:
      "With state-of-the-art digital printing for modern and small-scale runs.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Complete Press Solutions",
    // subtitle: "Solutions",
    description:
      "The solution for maintaining efficiency across production channels.",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Finishing & Binding",
    // subtitle: "Printing",
    description:
      "From folding to binding, ensuring professional finishing and appeal.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Corporate & Commercial Printing",
    // subtitle: "Printing",
    description:
      "Delivering consistent, high-quality prints for business materials and reports.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Event & Promotional Materials",
    // subtitle: "Marketing",
    description:
      "The go-to for banners, flyers, posters, and promotional marketing materials.",
    image:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Custom Printing Solutions",
    // subtitle: "Solutions",
    description:
      "Specialized printing solutions tailored to your unique requirements.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop",
  },
];

export default function OurServicesSection() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&h=900&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(6, 23, 39, 0.9)",
        }}
      />

      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "white",
            mb: 5,
          }}
        >
          Our Services
        </Typography>

        {/* Grid Layout */}
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {services.map((service, index) => (
            <Grid
              item
              xs={2}
              sm={4}
              md={4}
              key={service.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>

        {/* Button */}
        <Box textAlign="center" mt={6}>
          <Button
            component={RouterLink}
            to="/quotation"
            variant="contained"
            size="large"
            sx={{
              px: 4,
              py: 1.2,
              borderRadius: 2,
              boxShadow: 3,
              textTransform: "none",
              fontWeight: 700,
              letterSpacing: 0.3,
              color: "#fff",
              background: "linear-gradient(135deg, #01A9D8 0%, #01A9D8 100%)",
              transition:
                "transform 200ms ease, box-shadow 200ms ease, background 200ms ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: 6,
                background:
                  "linear-gradient(135deg, #019AC4 0%, #019AC4 100%)",
                color: "#fff",
              },
            }}
          >
            Get a Custom Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

function ServiceCard({ service }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        bgcolor: "rgba(255, 255, 255, 0.08)",
        color: "white",
        overflow: "hidden",
        backdropFilter: "blur(8px)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        },
        width: "100%",
        maxWidth: 360,
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={service.image}
        alt={service.title}
        sx={{ opacity: 0.85 }}
      />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <CheckCircleIcon sx={{ color: "#00bcd4", fontSize: 20, mr: 1 }} />
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#fff" }}>
            {service.title}
          </Typography>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, color: "#00bcd4", mb: 1 }}
        >
          {service.subtitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{ opacity: 0.8, fontSize: "0.85rem", lineHeight: 1.4 }}
        >
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
