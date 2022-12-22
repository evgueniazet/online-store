import React from 'react';

type RouteProps = {
  path: string;
  children: React.ReactNode
}

const Route = ({ path, children }: RouteProps) => {
  const queryString = window.location.search;
  const pathName = window.location.pathname;
  const urlParams = new URLSearchParams(queryString);
  const queryParams = Object.fromEntries(urlParams.entries());

  const childrenWithQuery = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as JSX.Element, { queryParams });
    }
    return child;
  });

  return (
    <div>
      {pathName === path? childrenWithQuery: null}
    </div>
  );
}

export default Route;