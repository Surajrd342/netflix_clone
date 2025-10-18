import { FB, Instagram, Twitter, Youtube } from "@/utils/icons";
import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        color: "rgba(255,255,255,0.5)",
        padding: "0 5rem 3rem 5rem",
      }}
    >
      <Box
        sx={{
          display: { sm: "flex" },
          color: "white",
          flexDirection: { md: "row" },
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <FB />
        <Instagram />
        <Twitter />
        <Youtube />
      </Box>

      <Box
        sx={{
          display: { sm: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography>Audio Description</Typography>
          <Typography>Invester Relationship</Typography>
          <Typography>Policy</Typography>
          <Typography>Contact Us</Typography>
        </Box>
        <Box>
          <Typography>Help Center</Typography>
          <Typography>Jobs</Typography>
          <Typography>Legal Notice</Typography>
          <Typography>Ad Choices</Typography>
        </Box>
        <Box>
          <Typography>Gift Card</Typography>
          <Typography>Netflix Shop</Typography>
          <Typography>Cookies preference</Typography>
        </Box>
        <Box>
          <Typography>Media Center</Typography>
          <Typography>Terms of Use</Typography>
          <Typography>Cookie Preferences</Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            border: "1px solid rgba(255,255,255,0.5)",
            padding: ".2rem .4rem",
            my: "2rem",
            width: "7rem",
          }}
        >
          Service Code
        </Typography>
      </Box>
      <Box>
        <Box>© 1996-2025, Netflix.com, Inc. or its Affiliates</Box>
      </Box>
    </Box>
  );
};

export default Footer;
