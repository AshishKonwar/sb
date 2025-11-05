import { Box, Container, Stack, Typography } from "@mui/material";
import Hero from "../components/Hero";
import CategoryGrid from "../components/CategoryGrid";
import PromoBanner from "../components/PromoBanner";
import CategoriesRail from "../components/CategoryGrid";
import BenefitsStrip from "../components/BenefitsStrip";
import FeaturedCollectionsCarousel from "../components/FeaturedCollectionsCarousel";
import UGCGallery from "../components/UGCGallery";
import Footer from "../components/Footer";
import FeedbackSection from "../components/FeedbackSection";
import AboutUsSection from "../components/AboutUsSection";

 export default function Home() {
   return (
     <>
      <CategoriesRail />
      <UGCGallery />
      <FeedbackSection />
    </>
   );
 }