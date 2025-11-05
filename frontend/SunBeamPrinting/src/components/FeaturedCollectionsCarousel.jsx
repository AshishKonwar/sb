import { useState, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const featuredCollections = [
  {
    id: 1,
    title: "Any Paper Printing",
    images: [
      "https://images.unsplash.com/photo-1509223197845-458d87318791?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=200&h=150&fit=crop&crop=center",
    ],
    description:
      "High-quality printing on a wide range of paper types for business and personal needs.",
  },
  {
    id: 2,
    title: "Books",
    images: [
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=200&h=150&fit=crop&crop=center",
    ],
    description:
      "Custom book printing services including softcover, hardcover, and professional binding.",
  },
  {
    id: 3,
    title: "Magazines",
    images: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&h=150&fit=crop&crop=center",
    ],
    description:
      "Glossy, vibrant magazine printing to showcase your content in style.",
  },
  {
    id: 4,
    title: "Posters",
    images: [
      "https://images.unsplash.com/photo-1500336624523-d727130c3328?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&h=150&fit=crop&crop=center",
    ],
    description:
      "Eye-catching posters for events, promotions, or home decoration.",
  },
  {
    id: 5,
    title: "Binding Services",
    images: [
      "https://images.unsplash.com/photo-1555529771-35a38a1a46e4?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1607619056574-7b52d7a7d2f1?w=200&h=150&fit=crop&crop=center",
    ],
    description:
      "Choose from spiral, comb, or professional binding for your documents and books.",
  },
  {
    id: 6,
    title: "Laminating",
    images: [
      "https://images.unsplash.com/photo-1581091870622-3a95a4a4e7a2?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1581093588401-8a4b1d4e7d1d?w=200&h=150&fit=crop&crop=center",
    ],
    description:
      "Protect your prints with durable lamination finishes in matte or gloss.",
  },
  {
    id: 7,
    title: "Digital Printing",
    images: [
      "https://images.unsplash.com/photo-1581091870674-3ef85f0dca3c?w=400&h=300&fit=crop&crop=center",
      "https://images.unsplash.com/photo-1581090700227-4c4dc530e73e?w=200&h=150&fit=crop&crop=center",
    ],
    description:
      "Fast, high-resolution digital printing for small to large scale projects.",
  },
];

export default function FeaturedCollectionsCarousel() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        py: 8,
        background: "linear-gradient(180deg, #061727 0%, #04101c 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Title */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 5,
            fontWeight: 700,
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          Featured Collections & Projects
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Navigation Buttons */}
          {canScrollLeft && (
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                left: -30,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.1)",
                color: "#00bcd4",
                zIndex: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <ChevronLeft />
            </IconButton>
          )}

          {canScrollRight && (
            <IconButton
              onClick={() => scroll("right")}
              sx={{
                position: "absolute",
                right: -30,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.1)",
                color: "#00bcd4",
                zIndex: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          )}

          {/* Carousel Container */}
          <Box
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            sx={{
              display: "flex",
              gap: 4,
              padding: 5,
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
              px: 2,
              pb: 2,
            }}
          >
            {featuredCollections.map((collection) => (
              <Card
                key={collection.id}
                sx={{
                  minWidth: 450,
                  maxWidth: 450,
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "white",
                  borderRadius: 3,
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                    borderColor: "#00bcd4",
                  },
                }}
              >
                <Box sx={{ p: 3 }}>
                  {/* Images Grid */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns:
                        collection.images.length === 3 ? "1fr 1fr" : "1fr 1fr",
                      gap: 1.5,
                      mb: 3,
                    }}
                  >
                    {collection.images.map((image, index) => (
                      <Box
                        key={index}
                        sx={{
                          height: 120,
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          component="img"
                          src={image}
                          alt={`${collection.title} image ${index + 1}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    ))}
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: "#00bcd4",
                      }}
                    >
                      {collection.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.6,
                        fontSize: "0.9rem",
                      }}
                    >
                      {collection.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
