import React from "react";
import Footer from "../../components/footer/footer.component";
import PageTopper from "../../components/page-topper/page-topper.component";
import Separator from "../../components/separator/separator.component";

import { AboutPageContainer, ListContainer } from "./about.styles";

const AboutPage = () => (
  <AboutPageContainer>
    <PageTopper title="ABOUT US" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend,
      mauris sed malesuada porta, nulla enim facilisis enim, eget condimentum
      nulla nibh sit amet metus. Sed sed nulla sit amet erat porttitor pharetra.
      Sed venenatis ipsum in urna venenatis ornare. Vestibulum fermentum lorem
      eu risus commodo, et fermentum massa ullamcorper. In aliquam mauris ante,
      sit amet tristique tortor ullamcorper eu. Nulla vehicula semper justo eu
      accumsan. Nunc consectetur vel libero at scelerisque. Proin molestie neque
      erat, mollis ornare nisl tincidunt a. Sed tortor lacus, iaculis et
      venenatis in, rhoncus a dolor. Pellentesque in nunc commodo, molestie
      tortor id, ullamcorper turpis. Nulla dapibus risus nec metus euismod
      maximus. Proin faucibus sapien tellus, eu varius mauris mattis varius.
      Proin pellentesque augue eu diam interdum, ullamcorper fringilla velit
      molestie.
    </p>
    <p>
      Phasellus hendrerit tortor a turpis vehicula gravida. Nulla sed orci vitae
      velit elementum consequat quis luctus nulla. Ut sodales odio non tortor
      eleifend cursus. Integer tincidunt felis at est cursus, in eleifend nulla
      viverra. Suspendisse ipsum nibh, volutpat quis nunc id, tempor condimentum
      nunc. Maecenas ac arcu tellus. Curabitur eleifend ut ipsum vel vestibulum.
      Vivamus bibendum vehicula fermentum. Maecenas non aliquet lectus. Proin
      varius finibus mauris.
    </p>
    <p>
      Etiam diam elit, tincidunt sollicitudin ligula id, tempor vehicula leo.
      Morbi nec tortor auctor, interdum nunc eu, luctus arcu. Mauris commodo, mi
      eu congue tincidunt, dolor velit congue ante, eu egestas est leo at nibh.
      Ut vitae enim lacus. Integer maximus diam at diam facilisis, a posuere
      augue viverra. Cras faucibus nisl turpis, sit amet vehicula lacus
      imperdiet non. Suspendisse egestas ac erat ac efficitur.
    </p>
    <Separator width="50%" margin="0 auto" />
    <h2>Equipment Used</h2>
    <Separator width="50%" margin="0 auto" />
    <ListContainer>
      <li>Camera: Nikon D3200</li>
      <li>Software: Adobe Lightroom</li>
    </ListContainer>
    <Footer />
  </AboutPageContainer>
);

export default AboutPage;
