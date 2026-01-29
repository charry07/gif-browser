import {Box, Container, Typography, Divider, useTheme} from "@mui/material";
import {Icons} from "../components";
import Logo from "../assets/PH-light.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box component='footer' sx={{py: 6, mt: "auto", borderTop: `1px solid ${theme.palette.divider}`}}>
      <Container maxWidth='lg'>
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", gap: 3}}>
          {/* Logo */}
          <Box sx={{display: "flex", justifyContent: "center", "& img": {maxWidth: "150px", height: "auto" , borderRadius: "8px"}}}>
            <img src={Logo} alt='Logo'/>
          </Box>

          {/* Divider */}
          <Divider sx={{width: "100%", maxWidth: "300px"}} />

          {/* Social Icons */}
          <Box sx={{display: "flex", justifyContent: "center", gap: 2}}>
            <Icons />
          </Box>

          {/* Copyright */}
          <Typography variant='body2' color='text.secondary' align='center' sx={{mt: 2, fontWeight: 300}}>
            Copyright © {currentYear}. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
