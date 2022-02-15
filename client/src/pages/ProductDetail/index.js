import { Box, Button, Text } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../api';
import ImageGallery from 'react-image-gallery';

const ProductDetail = () => {
  const { product_id } = useParams();

  const { isLoading, error, data } = useQuery(['product,id', product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) return <div>Loading........!</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  const images = data.photos.map((url) => ({ original: url }));
  
  return (
    <div>
      <Button colorScheme='blue'>Add to Basket</Button>
      <Text as='h2' fontSize='2xl'>
        {data?.title}
      </Text>
      <Text>{moment(data.createdAt).format('DD/MM/YYYY')}</Text>
      <p>{data?.description}</p>

      <Box m='10' className=''>
        <ImageGallery items={images} showThumbnails={false} autoPlay={true} showPlayButton={false} showFullscreenButton={false}/>
      </Box>
    </div>
  );
};

export default ProductDetail;
