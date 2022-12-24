import React, { useEffect, useState } from 'react';
import { RouteProps } from '../types/Route';

const Route = ({ path, children }: RouteProps) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryParams = Object.fromEntries(urlParams.entries());
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  const onLocationChange = () => {
    setCurrentPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  const childrenWithQuery = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as JSX.Element, { queryParams });
    }
    return child;
  });

  return (
    <div>
      {currentPath === path? childrenWithQuery: null}
    </div>
  );
}

export default Route;