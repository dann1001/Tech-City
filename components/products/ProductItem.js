import Link from 'next/link';
import Image from 'next/image';
//material imports
import { Card, Typography, CardActions, IconButton } from '@mui/material';
//icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/favorite-slice';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { title, price, image, id } = props;

  const exploreLink = `/products/${id}`;

  const addItemHandler = () => {
    dispatch(
      uiActions.addItemToFavorite({
        id,
        title,
        price,
        image,
      })
    );
  };

  return (
    <Card sx={{ maxWidth: 300, cursor: 'pointer', marginTop: '0.5rem' }}>
      <Link href={exploreLink}>
        <section>
          <Image src={'/' + image} alt={title} width={300} height={280} />
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            sx={{ textAlign: 'center' }}>
            {title}
          </Typography>
        </section>
      </Link>
      <CardActions
        sx={{ display: 'flex', justifyContent: 'space-between', m: '0.5rem' }}>
        ${price}
        <IconButton onClick={addItemHandler}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
