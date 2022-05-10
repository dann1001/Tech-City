import React from 'react';
import ImageGallery from 'react-image-gallery';
const images = [
  {
    original:
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQWofYxCBxl-e0TukF7sT0IVa5Jgq0vuMIzvDD59i3N9-AjtB0vv9QpVqzgfjQQA0hlw85zTKRokA&usqp=CAc',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery;
