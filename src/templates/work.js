import React, { Fragment } from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import {Modal} from 'react-bootstrap';

import {Container,Row,Col} from 'react-bootstrap'

export default ({ data }) => (
  <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show = {true}
      style ={{backgroundColor: '#C0A172'}}

    >
    <article className="sheet gallery-showcase__modal">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
          <Row>
            {data.datoCmsWork.gallery.map(({ fluid }) => (
              <Fragment>
                            <Col md={6}>
                            <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
                            </Col>
                            
              </Fragment>
              
            ))}
          </Row>

      
       
    </article>
    </Modal>

)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
