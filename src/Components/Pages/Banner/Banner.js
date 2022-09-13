import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import pose2 from "../../../Images/bannerPic.png";
import ellipse5 from "../../../Images/Ellipse_5.png";
import "./banner.css";
import vactor01 from "../../../Images/icons/Vector01.png";

const bannerBgStyle = {
  background: `url(${ellipse5})`,
  backgroundRepeat: "no-repeat",

  width: "90%",
  height: "460px",
};

const Banner = () => {
  return (
    <Container>
      <Grid sx={{ mt: 2 }} container spacing={0}>
        {/* left grid */}

        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="div">
            Your <span style={{ color: "#2D89FF" }}>Health</span> Is Our Top
            <span style={{ color: "#642DFF" }}> Priority</span>
          </Typography>

          <Typography
            variant="p"
            component="div"
            sx={{
              mt: 2,
              color: "textB.secondary",
              fontWeight: "400",
            }}
          >
            There are many variations of passages of lpsum <br /> available, but
            the majority hae suffered.
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                fontSize: "16px",
                fontWeight: "500",
                padding: "20px 15px",
                marginTop: "32px",
              }}
            >
              Meet Our Specialist
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "56px",
            }}
          >
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: "secondary.main",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              >
                262k+
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: " paragraph1.main",
                  fontWeight: "400",
                  fontSize: "14px",
                  marginTop: "-5px",
                }}
              >
                Recovered Patients
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: "secondary.main",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              >
                96%
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: " paragraph1.main",
                  fontWeight: "400",
                  fontSize: "14px",
                  marginTop: "-5px",
                }}
              >
                Satisfaction Rate
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: "secondary.main",
                  fontWeight: "600",
                  textAlign: "center",
                  fontSize: "24px",
                }}
              >
                86+
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 2,
                  color: " paragraph1.main",
                  fontWeight: "400",
                  fontSize: "14px",
                  marginTop: "-5px",
                }}
              >
                Expert Doctors
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* right grid */}
        <Grid item sx={{}} xs={12} md={6}>
          <Box sx={{}}>
            <Box style={bannerBgStyle}></Box>
            <img
              style={{
                width: "80%",
                marginTop: "-800px",
              }}
              src={pose2}
              alt=""
            />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.main",
                fontSize: "12px",
                fontWeight: "400",
                padding: "10px 19px",
                marginTop: "-350px",
              }}
            >
              <span>
                <img
                  style={{ width: "18px", height: "18px", marginTop: "8px" }}
                  src={vactor01}
                  alt=""
                />
              </span>{" "}
              Regular Checkup
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
