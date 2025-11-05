import { 
  Box, 
  Container, 
  Grid, 
  Stack, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  Rating, 
  IconButton 
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Priya Sharma",
    title: "Author, 'Echoes of the Heart'",
    rating: 4.5,
    text: "I got my book printed with Any Paper Printing, and the finish was just beautiful. The pages feel premium and the binding gives it a bookstore-quality look.",
  },
  {
    name: "Rohit Mehta",
    title: "Marketing Manager, BrightEdge Media",
    rating: 5,
    text: "We ordered brochures and flyers for a campaign — they were printed on time and the colors came out perfectly vibrant. Great experience overall!",
  },
  {
    name: "Anita Nair",
    title: "Owner, Nair Stationers, Kochi",
    rating: 5,
    text: "Their digital and offset printing quality is excellent. Our customers often compliment the clarity and sharpness. The team is also very responsive.",
  },
  {
    name: "Arjun Patel",
    title: "Founder, Creative Printworks, Ahmedabad",
    rating: 5,
    text: "I’ve been working with Any Paper Printing for over a year. Their consistency, color accuracy, and quick delivery make them our go-to print partner.",
  },
  {
    name: "Sneha Reddy",
    title: "Event Coordinator, Hyderabad",
    rating: 4.5,
    text: "We got custom invitation cards and posters printed for a corporate event. The quality exceeded expectations, and delivery was super quick!",
  },
];

export default function FeedbackSection() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);

      const card = scrollContainerRef.current.querySelector("div.MuiCard-root");
      if (card) {
        const cardWidth = card.offsetWidth + 32;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveIndex(index);
      }
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector("div.MuiCard-root");
      if (card) {
        const cardWidth = card.offsetWidth + 32;
        const newScrollLeft =
          scrollContainerRef.current.scrollLeft +
          (direction === "left" ? -cardWidth : cardWidth);
        scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.querySelector("div.MuiCard-root");
      if (card) {
        const cardWidth = card.offsetWidth + 32;
        const newScrollLeft = index * cardWidth;
        scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    checkScrollButtons();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 4, md: 8 },
        background: "linear-gradient(180deg, #061727 0%, #03090fff 100%)",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Section Title */}
        <Typography
          variant="h5"
          component="h2"
          sx={{
            mb: 6,
            fontWeight: 700,
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          What Our Clients Say 💬
        </Typography>

        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12}>
            <Box sx={{ position: "relative" }}>
              {/* Navigation Buttons */}
              {canScrollLeft && (
                <IconButton
                  onClick={() => scroll("left")}
                  sx={{
                    position: "absolute",
                    left: -18,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "#00bcd4",
                    zIndex: 2,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <ChevronLeftIcon />
                </IconButton>
              )}

              {canScrollRight && (
                <IconButton
                  onClick={() => scroll("right")}
                  sx={{
                    position: "absolute",
                    right: -18,
                    top: "50%",
                    transform: "translateY(-50%)",
                    bgcolor: "rgba(255,255,255,0.1)",
                    color: "#00bcd4",
                    zIndex: 2,
                    "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>
              )}

              {/* Carousel */}
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
                  pb: 1,
                }}
              >
                {testimonials.map((t, idx) => (
                  <Card
                    key={idx}
                    sx={{
                      minWidth: 450,
                      maxWidth: 450,
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(8px)",
                      borderRadius: 3,
                      color: "white",
                      transition: "transform 0.3s, box-shadow 0.3s, border-color 0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                        borderColor: "#00bcd4",
                      },
                    }}
                  >
                    <Box sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mb: 2,
                        }}
                      >
                        <Avatar
                          src={t.avatar}
                          alt={t.name}
                          sx={{ bgcolor: "#00bcd4", color: "#fff" }}
                        >
                          {t.name[0]}
                        </Avatar>
                        <Stack>
                          <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#00bcd4" }}>
                            {t.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)" }}>
                            {t.name}
                          </Typography>
                        </Stack>
                      </Box>
                      <CardContent sx={{ p: 0 }}>
                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.9)",
                            mb: 1.5,
                            fontStyle: "italic",
                          }}
                        >
                          “{t.text}”
                        </Typography>

                        {/* 🌟 Golden Stars */}
                        <Rating
                          precision={0.5}
                          value={t.rating}
                          readOnly
                          size="small"
                          sx={{ color: "#FFD700" }}
                        />
                      </CardContent>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Pagination Dots */}
        <Stack direction="row" spacing={1} sx={{ mt: 4 }} justifyContent="center">
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => scrollToIndex(i)}
              sx={{
                width: activeIndex === i ? 12 : 8,
                height: activeIndex === i ? 12 : 8,
                borderRadius: "50%",
                bgcolor: activeIndex === i ? "#00bcd4" : "rgba(255,255,255,0.6)",
                opacity: activeIndex === i ? 1 : 0.6,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
