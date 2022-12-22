import React from 'react';
import { PageProps } from '../../types/Page';
import Link from '../../utils/Link';

const HomePage = ({ queryParams }: PageProps) => {
  // query string for test /?id=10&limit=100 
  // console.log(queryParams);

  // TODO: Add data fetching here according queryParams

  return (
   <div>
      {/* TODO: Put conditional loader here while data is fetching */}
      {/* TODO: Put Home template component here with fetched data as props */}
      Home Page!!!



      {/* For demo purposes it needs to be deleted later */}
      <ul>
        <li><Link linkTo='/product'>Go to product</Link></li>
        <li><Link linkTo='/checkout'>Go to bucket</Link></li>
      </ul> 
      
   </div>
  );
};

export default HomePage;