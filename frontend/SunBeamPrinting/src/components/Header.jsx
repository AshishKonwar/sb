import { AppBar, Box, Toolbar, Typography, Stack, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { FaSignInAlt } from "react-icons/fa";
import books from "../assets/pictures/books.jpeg";
import magazines from "../assets/pictures/magazines.jpg";
import posters from "../assets/pictures/posters.jpg";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "#061727",
        color: "#111",
        borderBottom: "1px solid #eee",
      }}
    >
      <Toolbar sx={{ gap: 5, minHeight: 72 }}>
         <Box
          className="site-logo"
          sx={{
            display: "flex",
            flexDirection: "column", // 👈 stack vertically
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.2,
          }}
        >
          <Box
            component="img"
            src="/src/assets/pictures/logo.jpeg" // 👈 replace with your actual logo path
            alt="Site Logo"
            sx={{
              height: 30,
              width: "auto",
              mb: 0.5, // 👈 small space between logo and text
            }}
          />
          <Box
            component="span"
            sx={{
              fontSize: 10,
              fontWeight: 600,
              color: "#fbfbf9e8",
            }}
          >
            SUNBEAM
          </Box>
        </Box>

  <OutlinedInput
    placeholder="Search..."
    size="small"
    sx={{
      flex: 1,
      maxWidth: 400,
      borderRadius: "50px",
      backgroundColor: "white",
      px: 1,
      "& fieldset": { border: "none" }, // removes default border
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      color: "grey.800"
    }}
    endAdornment={
      <InputAdornment position="end">
        <IconButton edge="end" aria-label="search">
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    }
  />

  {/* <div className="header-utilities">
    <Stack direction="row" spacing={1} alignItems="center">
      <FaSignInAlt className="text-gray-600" />
      <Stack sx={{ pb: 0.2 }}>
        <a href="#" className="util-link">
          Sign in
        </a>
      </Stack>
    </Stack>
  </div> */}
</Toolbar>

      {/* Main nav */}
      <Box className="main-nav-wrapper">
        <nav className="main-nav" aria-label="Primary">
          <ul className="nav-list">
            {/* Any Paper Printing */}
            <li className="nav-item has-mega menu-item">
              <a href="#">Any Paper Printing</a>
              <div className="mega">
                <div className="mega-content">
                  <div className="mega-col">
                    <h4>Popular Options</h4>
                    <a href="#">Letterheads</a>
                    <a href="#">Flyers</a>
                    <a href="#">Brochures</a>
                    <a href="#">Business Cards</a>
                  </div>
                  <div className="mega-col image-col">
                    <img
                      src="https://via.placeholder.com/250x200.png?text=Paper+Printing"
                      alt="Any Paper Printing"
                    />
                  </div>
                </div>
              </div>
            </li>

            {/* Books */}
            <li className="nav-item has-mega menu-item">
              <a href="#">Books</a>
              <div className="mega">
                <div className="mega-content">
                  <div className="mega-col">
                    <h4>Book Types</h4>
                    <a href="#">Hardcover Books</a>
                    <a href="#">Softcover Books</a>
                    <a href="#">Children’s Books</a>
                    <a href="#">Cookbooks</a>
                  </div>
                  <div className="mega-col image-col">
                    <img
                      src={books}
                      alt="Books"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item has-mega menu-item">
              <a href="#">Magazines</a>
              <div className="mega">
                <div className="mega-content">
                  <div className="mega-col">
                    <h4>Magazine Printing</h4>
                    <a href="#">Monthly Magazines</a>
                    <a href="#">Fashion Magazines</a>
                    <a href="#">Trade Journals</a>
                    <a href="#">Catalogues</a>
                  </div>
                  <div className="mega-col image-col">
                    <img
                      src={magazines}
                      alt="Books"
                    />
                  </div>
                </div>
              </div>
            </li>

          <li className="nav-item has-mega menu-item">
                <a href="#">Posters</a>
                <div className="mega">
                  <div className="mega-content">
                    <div className="mega-col">
                      <h4>Poster Types</h4>
                      <a href="#">Movie Posters</a>
                      <a href="#">Event Posters</a>
                      <a href="#">Large Format Posters</a>
                      <a href="#">Educational Posters</a>
                    </div>

                    <div className="mega-col image-col">
                      <div className="image-grid">
                        <img src={posters} alt="Movie Poster" />
                        <img src={posters} alt="Event Poster" />
                        <img src={posters} alt="Large Format Poster" />
                        <img src={posters} alt="Educational Poster" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

                      <li className="nav-item has-mega menu-item">
              <a href="#">Binding Services</a>
              <div className="mega">
                <div className="mega-content">
                  <div className="mega-col">
                    <h4>Binding Options</h4>
                    <a href="#">Spiral Binding</a>
                    <a href="#">Perfect Binding</a>
                    <a href="#">Saddle Stitching</a>
                    <a href="#">Wire-O Binding</a>
                  </div>
                  <div className="mega-col image-col">
                    <img
                      src="https://via.placeholder.com/250x200.png?text=Binding"
                      alt="Binding Services"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item has-mega menu-item">
              <a href="#">Laminating</a>
              <div className="mega">
                <div className="mega-content">
                  <div className="mega-col">
                    <h4>Laminating Types</h4>
                    <a href="#">Gloss Lamination</a>
                    <a href="#">Matte Lamination</a>
                    <a href="#">Soft Touch Lamination</a>
                    <a href="#">UV Coating</a>
                  </div>
                  <div className="mega-col image-col">
                    <img
                      src="https://via.placeholder.com/250x200.png?text=Laminating"
                      alt="Laminating"
                    />
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item has-mega menu-item">
              <a href="#">Digital Printing</a>
              <div className="mega">
                <div className="mega-content">
                  <div className="mega-col">
                    <h4>Digital Print Options</h4>
                    <a href="#">Short-Run Printing</a>
                    <a href="#">Variable Data Printing</a>
                    <a href="#">Business Stationery</a>
                    <a href="#">Marketing Collateral</a>
                  </div>
                  <div className="mega-col image-col">
                    <img
                      src="https://via.placeholder.com/250x200.png?text=Digital+Printing"
                      alt="Digital Printing"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </Box>

      <Box
        sx={{
          backgroundColor: "#01A9D8",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          height: 40,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#fbfbf9e8",
            fontWeight: 700,
            display: "inline-block",
            px: 2,
            animation: "scrollText 20s linear infinite",
            "&:hover": { animationPlayState: "paused" },
          }}
        >
          Print More, Save More — Free Shipping ₹8,000+ | Flat 20% Off with Code NEW20
        </Typography>

        <style>
          {`
           .nav-list {
            display: flex;
            gap: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0 1rem;
          }

          .nav-item {
            position: relative;
          }

          .nav-item a {
            display: block;
            padding: 1rem 0;
            color: #111;
            text-decoration: none;
            font-weight: 500;
          }

          .nav-item.has-mega:hover .mega {
            display: block;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          .mega {
            position: absolute;
            top: 100%;
            left: 0;
            background: #fff;
            border: 1px solid #eee;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            width: 1000px;
            padding: 1.5rem;
            display: none;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.3s ease;
            z-index: 999;
          }

          .mega-content {
            display: flex;
            gap: 0.5rem;
            align-items: flex-start;
          }

          .mega-col {
            flex: 1;
            min-width: 160px;
          }

          .mega-col h4 {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .mega-col a {
            display: block;
            color: #333;
            text-decoration: none;
            font-size: 14px;
            margin: 0.25rem 0;
            transition: color 0.2s ease;
          }

          .mega-col a:hover {
            color: #0070f3;
          }

          /* Image column */
          .mega-col.image-col {
            max-width: 500px;
            flex: none;
          }

          /* ✅ New grid styling */
          .image-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          /* ✅ Fix image behavior */
          .image-grid img {
            width: 100%;
            height: 150px; /* fixed height prevents dropdown resizing */
            object-fit: cover;
            border-radius: 8px;
            display: block;
          }
            
          `}
        </style>
      </Box>
    </AppBar>
  );
}
