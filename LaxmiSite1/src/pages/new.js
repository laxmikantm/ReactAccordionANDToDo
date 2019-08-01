import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/layout';
import AppBar from '@material-ui/core';

import SEO from '../components/seo';
import styled from 'styled-components';

const MyDiv = styled.div`
  display: flex;
  justify-content: centre;
  background-color: #cccc;
`;

const NewPage = () => (
  // <AppBar color='primary' position='static'>
  <Layout>
    {/* <MyDiv> */}
    <h2>This is new Page</h2>
    {/* </MyDiv> */}
  </Layout>
);

export default NewPage;
