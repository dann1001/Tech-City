import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import ProductList from '../../components/products/ProductList';
import ProductsSearch from '../../components/products/ProductsSearch';
// import { getAllProducts } from '../../helper/ApiUtil';
import { getAllProducts } from '../../data';

const AllProductsPage = (props) => {
  const router = useRouter();
  const { products } = props;

  function findProductsHandler(price, month) {
    const fullPath = `/products/${price}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>All products</title>
        <meta name='description' content='buy best laptops ...' />
      </Head>
      <ProductsSearch onSearch={findProductsHandler} />
      <ProductList items={products} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: {
      products: products,
    },
    revalidate: 60,
  };
}

export default AllProductsPage;
