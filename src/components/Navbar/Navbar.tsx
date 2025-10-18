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
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showClearIcon, setShowClearIcon] = useState<string>("none");

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);
    setShowClearIcon(value ? "block" : "none");
  };

  const handleClick = () => {
    setSearchQuery("");
    setShowClearIcon("none");
  };

  const handleSearchKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
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
        top: "0",
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
            src={"/assets/logo.png"}
            alt="Netflix Logo"
            priority
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />

          {/* Mobile View Navbar Items  */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            {/* Bar icon for Mobile View */}
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
              open={Boolean(handleCloseNavMenu)}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    borderRadius: 0,
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    <Link
                      href={
                        page === "Home"
                          ? "/"
                          : page === "My List"
                          ? "/my_list"
                          : "#"
                      }
                      passHref
                      style={{
                        textDecoration: "none",
                        color: "black",
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
                        {page}
                      </Box>
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop View Navbar Items  */}
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
                passHref
                style={{
                  textDecoration: "none",
                  color: "White",
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
                  {page}
                </Box>
              </Link>
            ))}
          </Box>
          <FormControl
            sx={{
              marginRight: "10px",
              backgroundColor: "#2a2a2a99",
            }}
          >
            <TextField
              size="small"
              variant="outlined"
              placeholder="Search"
              value={searchQuery}
              onChange={handleChange}
              onKeyPress={handleSearchKeyPress}
              inputProps={{
                startAdorment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{
                        color: "#ffffff80",
                      }}
                    />
                  </InputAdornment>
                ),
                endAdorment: (
                  <InputAdornment
                    position="end"
                    style={{
                      display: showClearIcon,
                    }}
                    onClick={handleClick}
                  >
                    <ClearIcon
                      sx={{
                        color: "#ffffff80",
                        cursor: "pointer",
                      }}
                    />
                  </InputAdornment>
                ),
                style: { color: "#ffffff80" },
              }}
              sx={{
                "& .MuiInpurBase-input": {
                  color: "#FFFFFF",
                },
              }}
            />
          </FormControl>
          <Box
            sx={{
              flexGrow: 0,
            }}
          >
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
