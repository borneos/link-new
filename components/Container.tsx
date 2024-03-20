import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode,
  className?: string,
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-screen-lg${className ? ` ${className}` : ``}`}>
      {children}
    </div>
  );
};

export default Container;