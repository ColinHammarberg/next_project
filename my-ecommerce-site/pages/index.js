import React from 'react';
import PropTypes from 'prop-types';
import { request } from '../lib/datocms';
import BoutiqueContainer from './components/Containers/BoutiqueContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './style/index.scss';

const HOMEPAGE_QUERY = `{
  allBoutiques {
    id
    name
    products {
      ...on ProductRecord {
        name,
        price,
        productImage {
          url
        },
        productId,
        productDescription,
        instock
      }
    }
  }
  }`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
  };
}
export default function Home({ data }) {
  return (
    <div className="home-container">
      <Header data={data} />
      <BoutiqueContainer data={data} />
      {/* <Footer data={data} /> */}
    </div>
  );
}

Home.propTypes = {
  data: PropTypes.instanceOf(Object),
};
