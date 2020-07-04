/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Logo from "../../Logo.png";
import {NavDropdown, Nav, Navbar, Carousel, Row, Container, Col, Button} from 'react-bootstrap';
import Carousel1 from '../../carousel1.jpg';
import Carousel2 from '../../carousel2.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
    const [hidden, setHidden] = useState(false);
  
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setHidden(top > 200);
      console.log(top)
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      
      render={data => (
        <Fragment>
                    <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <div className='header'>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <Navbar.Brand >  
              <Link to="/"><img src = {Logo} alt = 'Honey Berry Cakes Logo'/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className='navbar-center'>
                <p style={{textDecoration: 'None', color: 'grey', fontFamily: 'PT Sans, sans-serif', fontWeight: '400', fontStyle: 'normal',fontSize: '24px', letterSpacing: '.02em',lineHeight: '1.6em', textTransform: 'none'}}>
                  "its all about the love and ingredients"
                  </p>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
          <Carousel class='main-carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carousel2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Carousel1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<section>
<Container>
  <Row>
    <Col style = {{marginTop: '7rem'}}>
    <h3 style={{fontFamily: 'gargamond adobe pro', fontWeight: '400', fontStyle: 'normal',fontSize: '24px', letterSpacing: '.02em',lineHeight: '1.6em', textTransform: 'none'}}>
      Founded in 2020 by Marina, a self taught baker with passion for great flavor and natural ingredients.
      </h3>
    </Col>
    <Col style = {{marginTop: '7rem'}}>
    <h3 style={{fontFamily: 'gargamond adobe pro', fontWeight: '400', fontStyle: 'normal',fontSize: '24px', letterSpacing: '.02em',lineHeight: '1.6em', textTransform: 'none'}}>
      We offer customized option for any occasion, where you'll find honest, homestyle goodness in our cakes.
      </h3>
    </Col>
  </Row>
  <Row style={{marginTop: '7rem', marginBottom: '3rem'}}>
    <Col className="d-flex justify-content-center">
    <h1 style={{fontFamily: 'gargamond adobe pro', fontWeight: '600', fontStyle: 'normal',fontSize: '40px', letterSpacing: '.02em',lineHeight: '1.6em', textTransform: 'none'}}>
      Placing an order
      </h1>
    </Col>
  </Row>
  <Row >
    <Col className="d-flex justify-content-center">
    <Button variant="outline-info" size="lg">
      DM on Instagram
      <FontAwesomeIcon style={{marginLeft: '1rem'}} icon={faInstagram}/>
    </Button>
    </Col>
    <Col className="d-flex justify-content-center">
    <Button variant="outline-info" size="lg">
     Send us an email
      <FontAwesomeIcon style={{marginLeft: '1rem'}} icon={faEnvelope}/>
    </Button>    
    </Col>
    <Col className="d-flex justify-content-center">
    <Button variant="outline-info" size="lg">
     Whatsapp text
      <FontAwesomeIcon style={{marginLeft: '1rem'}} icon={faWhatsapp}/>
    </Button>    
    </Col>
  </Row>
</Container>
</section>
            {children}

        </Fragment>

      )}
    />
  );

};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
