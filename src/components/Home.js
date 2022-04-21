import React from "react";
import styled from "styled-components";
import Section from "./Section";
import ModelS from "../images/model-s.jpg";
import ModelSMobile from "../images/model-s-mobile.jpg";
import ModelY from "../images/model-y.jpg";
import ModelYMobile from "../images/model-y-mobile.jpg";
import Model3 from "../images/model-3.jpg";
import Model3Mobile from "../images/model-3-mobile.jpg";
import ModelX from "../images/model-x.jpg";
import ModelXMobile from "../images/model-x-mobile.jpg";
import SolarPanel from "../images/solar-panel.jpg";
import SolarPanelMobile from "../images/solar-panel-mobile.jpg";
import SolarRoof from "../images/solar-roof.jpg";
import SolarRoofMobile from "../images/solar-roof.jpg";
import Accessories from "../images/accessories.jpg";
import AccessoriesMobile from "../images/accessories-mobile.jpg";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export default function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelS}
        backgroundPhoneImg={ModelSMobile}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelY}
        backgroundPhoneImg={ModelYMobile}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={Model3}
        backgroundPhoneImg={Model3Mobile}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={ModelX}
        backgroundPhoneImg={ModelXMobile}
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg={SolarPanel}
        backgroundPhoneImg={SolarPanelMobile}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg={SolarRoof}
        backgroundPhoneImg={SolarRoofMobile}
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={Accessories}
        backgroundPhoneImg={AccessoriesMobile}
        leftBtnText="Shop now"
        rightBtnText=""
      />
    </Container>
  );
}
