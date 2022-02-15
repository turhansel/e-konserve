import { Box, Button, Flex, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from '../../components/Card';
import { useInfiniteQuery } from 'react-query';
import { fetchProductList } from '../../api';

const Products = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery('products', fetchProductList, {
    getNextPageParam: (lastPage, allPages) => {
      const morePagesExist = lastPage?.length === 12;
      if (!morePagesExist) return;
      return allPages.length + 1;
    },
  });

  if (status === 'loading') return 'Loading...';

  if (status === 'error') return 'An error has occurred: ' + error.message;

  return (
    <div>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {data.pages.map((group, idx) => (
          <React.Fragment key={idx}>
            {group.map((product) => (
              <Box w='100%' key={product._id}>
                <Card item={product} />
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <div>
        <Flex justify='center'>
          <Button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            colorScheme='orange'
            isLoading={isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default Products;
