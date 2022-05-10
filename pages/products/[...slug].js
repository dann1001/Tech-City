import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import ProductList from '../../components/products/ProductList';
import ProductSearch from '../../components/products/ProductsSearch';

import { getFilteredProducts } from '../../helper/ApiUtil';

const FilteredProductPage = (props) => {
  const router = useRouter();

  const filteredProducts = props.products;

  function findProductsHandler(price, month) {
    const fullPath = `/products/${price}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>{props.products.title}</title>
        <meta
          name='description'
          content={`All products for ${props.numPrice} ,${props.filteredCatagorized}`}
        />
      </Head>
      <ProductSearch onSearch={findProductsHandler} />
      <ProductList items={filteredProducts} />
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  const filterData = params.slug;

  const filteredPrice = filterData[0];
  const filteredCatagorized = filterData[1];

  const numPrice = +filteredPrice;

  const filteredProducts = await getFilteredProducts({
    price: numPrice,
    catagory: filteredCatagorized,
  });

  return {
    props: {
      products: filteredProducts,
    },
  };
}

export default FilteredProductPage;
