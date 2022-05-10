import { Container, Grid } from '@mui/material';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  const { items } = props;

  return (
    <Container maxWidth='md'>
      <Grid container spacing={6}>
        {items.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
