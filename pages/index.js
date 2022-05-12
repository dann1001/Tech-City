import Haed from 'next/head';

// import { getFeaturedProducts } from '../helper/ApiUtil';
import { getFeaturedProducts } from '../data';
import ProductList from '../components/products/ProductList';
import { Fragment } from 'react';

import Slideshow from '../components/ui/slideshow';
const HomePage = (props) => {
  return (
    <Fragment>
      <Haed>
        <title>Tech City</title>
        <meta name='description' content='buy best laptops ...' />
      </Haed>
      <Slideshow />
      <ProductList items={props.products} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const featuredProducts = await getFeaturedProducts();

  return {
    props: {
      products: featuredProducts,
    },
    revalidate: 2400,
  };
}

export default HomePage;
