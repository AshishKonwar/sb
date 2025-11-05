import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";


const team = [
  {
    id: 1,
    name: "The Press Operators",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=150&h=150&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "The Bindery Specialists",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=150&h=150&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "The Digital Experts",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=150&h=150&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "The Project Managers",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328b0a3d?w=150&h=150&fit=crop&crop=center",
  },
];

export default function CraftsmanshipSection() {
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
      const scrollAmount = 300;
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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=800&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Transparent dark overlay */}
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

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "white",
            mb: 5,
          }}
        >
          Our People: The Craftsmanship Behind the Press
        </Typography>

        <Box sx={{ position: "relative" }}>
          {/* Navigation Buttons */}
          {/* {canScrollLeft && (
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                left: -30,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "rgba(255,255,255,0.1)",
                color: "white",
                zIndex: 3,
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
                color: "white",
                zIndex: 3,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                },
              }}
            >
              <ChevronRight />
            </IconButton>
          )} */}

          {/* Carousel */}
          <Box
            ref={scrollContainerRef}
            onScroll={checkScrollButtons}
            sx={{
              display: "flex",
              gap: 5,
              padding: 5,
              overflowX: "auto",
              justifyContent: "center",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
              pb: 2,
            }}
          >
            {team.map((person) => (
              <Box
                key={person.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 160,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                <Avatar
                  src={person.image}
                  sx={{
                    width: 100,
                    height: 100,
                    mb: 1.5,
                    border: "3px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                  }}
                >
                  {person.name}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Bottom blue keywords */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              mt: 4,
              flexWrap: "wrap",
            }}
          >
            {["Precision", "Reliability", "Innovation", "Dedication"].map(
              (word, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: "#00bcd4",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    borderBottom: "1px solid rgba(0,188,212,0.5)",
                    pb: 0.3,
                  }}
                >
                  {word}
                </Typography>
              )
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
