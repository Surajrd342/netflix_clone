"use client";

import {
  AppBar,
  Avatar,
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const pages = [
  "Home",
  "Movie",
  "TV Shows",
  "My List",
  "New & Popular",
  "Browse By Language",
];

const Navbar = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showClearIcon, setShowClearIcon] = useState("none");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    setShowClearIcon(value ? "flex" : "none");
  };

  const handleClick = () => {
    setSearchQuery("");
    setShowClearIcon("none");
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      event.preventDefault();
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "rgba(0,0,0,.65)",
        top: 0,
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: "#000",
          opacity: 1,
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Image
            width={100}
            height={50}
            src="/assets/logo.png"
            alt="Netflix Logo"
            priority
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />

          {/* Mobile Navbar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {/* Hamburger Icon */}
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)} // ✅ fixed
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    href={
                      page === "Home"
                        ? "/"
                        : page === "My List"
                        ? "/my_list"
                        : "#"
                    }
                    style={{
                      textDecoration: "none",
                      color: "black",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        opacity: 0.9,
                        cursor: "pointer",
                        padding: ".6rem .9rem",
                        "&:hover": {
                          borderColor: "#fff",
                        },
                      }}
                    >
                      <Typography component="div">{page}</Typography>
                    </Box>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Navbar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                href={
                  page === "Home" ? "/" : page === "My List" ? "/my_list" : "#"
                }
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Box
                  sx={{
                    opacity: 0.9,
                    cursor: "pointer",
                    padding: ".6rem .9rem",
                    "&:hover": {
                      fontWeight: 500,
                      borderColor: "#fff",
                    },
                  }}
                >
                  <Typography component="div">{page}</Typography>
                </Box>
              </Link>
            ))}
          </Box>

          {/* Search Bar */}
          <FormControl
            sx={{
              marginRight: "10px",
              backgroundColor: "#2a2a2a99",
              borderRadius: 1,
            }}
          >
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search"
              value={searchQuery}
              onChange={handleChange}
              onKeyPress={handleSearchKeyPress}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#ffffff80" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      display: showClearIcon,
                      cursor: "pointer",
                    }}
                    onClick={handleClick}
                  >
                    <ClearIcon sx={{ color: "#ffffff80" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiInputBase-input": {
                  color: "#FFFFFF",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
          </FormControl>

          {/* Avatar / Profile */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Settings">
              <IconButton>
                <Avatar
                  alt="User Avatar"
                  src="/assets/avatar.png"
                  sx={{
                    borderRadius: "5px",
                    width: 40,
                    height: 40,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
