import { Fragment } from 'react';
import Head from 'next/head';
import {
  getProductById,
  getProductByInformation,
  getFeaturedProducts,
} from '../../helper/ApiUtil';

import ProductsSummary from '../../components/products-detail-page/ProductsSummary';
import Comments from '../../components/comments/Comments';

const ProductDetailPage = (props) => {
  const product = props.selectedProduct;

  if (!product) {
    return <p>صفحه ای وجود ندارد </p>;
  }

  return (
    <Fragment>
      <Head>
        <title>{product.title}</title>
        <meta name='description' content='buy best laptops ...' />
      </Head>
      <ProductsSummary
        title={product.title}
        price={product.price}
        description={product.description}
        cpu={product.cpu}
        gpu={product.gpu}
        items={product.items}
        year={product.year}
        ram={product.ram}
        image={product.image}
      />
      <Comments productId={product.id} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const product = await getProductById(productId);

  return {
    props: {
      selectedProduct: product,
    },
    revalidate: 2400,
  };
}

export async function getStaticPaths() {
  const products = await getFeaturedProducts();

  const paths = products.map((product) => ({
    params: { productId: product.id },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default ProductDetailPage;
