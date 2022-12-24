import React from 'react';
import { PageProps } from '../../types/Page';

const CheckoutPage = ( { queryParams }: PageProps) => {
  // TODO: Add data fetching here according queryParams
  return (
   <div>
    {/* TODO: Put conditional loader here while data is fetching */}
    {/* TODO: Put Home template component here with fetched data as props */}
    Checkout Page!!!
   </div>
  );
};

export default CheckoutPage;