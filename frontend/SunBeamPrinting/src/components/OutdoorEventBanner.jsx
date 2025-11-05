import { 
  Box, 
  Container, 
  Typography, 
  Stack,
  Breadcrumbs,
  Link,
  IconButton,
  Tabs,
  Tab,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid
} from "@mui/material";
import { 
  CameraAlt,    
  Folder, 
  Settings,
  Home
} from "@mui/icons-material";
import { useMemo, useState } from "react";
import CategoryExploreCarousel from "./CategoryExploreCarousel";
import FeaturedCollectionsCarousel from "./FeaturedCollectionsCarousel";
import heroImage from "../assets/pictures/hero.png";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import CraftsmanshipSection from "./CraftmanshipSection";
import OurServicesSection from "./OurServivesSection";

export default function OutdoorEventBanner() {
  const [activeTab, setActiveTab] = useState(0); 
  const [dialogOpen, setDialogOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedQuery, setSelectedQuery] = useState("");
  const [customQuery, setCustomQuery] = useState("");

  const presetQueries = useMemo(() => [
    "Books & Magazines",
    "Posters & Banners",
    "Binding & Laminating",
    "Digital Printing",
    "Packaging & Labels",
    "Custom Request"
  ], []);

  const handleTabChange = (event, newValue) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    setActiveTab(newValue);
  };

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { fullName, email, phone, selectedQuery, customQuery };
    // eslint-disable-next-line no-console
    console.log("Submitted inquiry:", payload);
    handleCloseDialog();
    setFullName("");
    setEmail("");
    setPhone("");
    setSelectedQuery("");
    setCustomQuery("");
  };

  const tabs = [
    "Signage",
    "Clothing", 
    "Marketing essentials",
    "Giveaways & swag",
    "Packaging"
  ];

  return (
    <>
      <Box sx={{ py: 6, bgcolor: "#051121" }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "center"
          }}>
            <Box textAlign="left">  
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 700, 
              mb: 2,
              color: "#fbfbf9e8",
            }}
          >
            Stand Out Everywhere with 
          </Typography>

          <Typography
            variant="h3"
            component="span"
            sx={{
              fontWeight: 900,
              display: "block",
              color: "#01A9D8", 
              letterSpacing: 1,
            }}
          >
            Sun Beam Printing Press
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#fbfbf9e8",
              lineHeight: 1.8,
              maxWidth: 600,
              mt: 3,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            From <strong>books and magazines</strong> to <strong>posters, binding, laminating, </strong> 
            and <strong>digital printing</strong> — we provide everything you need 
            to shine at <em>markets, events, and beyond</em>.
          </Typography>
          <Box sx={{ mt: 3 }}>

            <Stack 
              direction="row" 
              justifyContent="normal" 
              alignItems="center"
              sx={{ width: "100%" }}
              gap={3}
            >
              <Button
                component={RouterLink}
                to="/quotation"
                variant="contained"
                size="large"
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: 3,
                  textTransform: "none",
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  color: "#fff",
                  background: "linear-gradient(135deg, #01A9D8 0%, #01A9D8 100%)", // 💠 custom teal gradient
                  transition: "transform 200ms ease, box-shadow 200ms ease, background 200ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 6,
                    background: "linear-gradient(135deg, #01A9D8 0%, #01A9D8 100%)", // 💠 darker hover gradient 
                    color: "#fff"
                  },
                }}
              >
                Get Quotation
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: 2,
                  boxShadow: 3,
                  textTransform: "none",
                  fontWeight: 700,
                  letterSpacing: 0.3,
                  color: "#fff",
                  background: "linear-gradient(135deg, #01A9D8 0%, #01A9D8 100%)", // 💠 custom teal gradient
                  transition: "transform 200ms ease, box-shadow 200ms ease, background 200ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: 6,
                    background: "linear-gradient(135deg, #01A9D8 0%, #01A9D8 100%)", // 💠 darker hover gradient
                    color: "#fff"
                  },
                }}
              >
                Contact
              </Button>
            </Stack>
          </Box>
        </Box>
            <Box sx={{ 
              position: "relative",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}>
              <Box
                component="img"
                src={heroImage}
                alt="Outdoor market stall with vendor"
                sx={{
                  width: "100%",
                  height: 400,
                  objectFit: "cover",
                  borderRadius: 3
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Category Explore Carousel */}
      {/* <CategoryExploreCarousel /> */}
            <OurServicesSection />
      <CraftsmanshipSection />

      {/* Featured Collections Carousel */}
      <FeaturedCollectionsCarousel />
    </>
  );
}
