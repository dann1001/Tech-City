import * as React from 'react';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//redux import
import { useSelector } from 'react-redux';
//next
import Link from 'next/link';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `0.1px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CartModal() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Link href='/products/cart'>
      <div>
        <IconButton aria-label='cart'>
          <StyledBadge badgeContent={cartQuantity} color='primary'>
            <ShoppingCartIcon
              sx={{ marginTop: '0.6rem', cursor: 'pointer', color: 'white' }}
            />
          </StyledBadge>
        </IconButton>
      </div>
    </Link>
  );
}
