import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../../SharePages/Footer";

import NavigationBar from "../../SharePages/NavigationBar";
import Banner from "../Pages/Banner/Banner";
import FaqQuestion from "../Pages/FaqQuestion/FaqQuestion";
import HospitalFeature from "../Pages/HospitalFeature/HospitalFeature";
import OurServices from "../Pages/OurServices/OurServices";
import WhatTheySay from "../Pages/WhatTheySay/WhatTheySay";
import YearsOfExperience from "../Pages/YearsOfExperience/YearsOfExperience";

const Home = () => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <OurServices></OurServices>
      <YearsOfExperience></YearsOfExperience>
      <HospitalFeature></HospitalFeature>
      <FaqQuestion></FaqQuestion>
      <WhatTheySay></WhatTheySay>
      <Footer></Footer>
    </Box>
  );
};

export default Home;
