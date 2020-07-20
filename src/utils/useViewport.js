import React, { createContext, useState, useEffect, useContext } from 'react';
import { node } from 'prop-types';

const viewportContext = createContext({});
export const ViewportProvider = ({ children }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(checkMobileWidth());
  const [isWider, setIsWider] = useState(checkIsWider());
  const handleWindowResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    setIsMobile(checkMobileWidth());
    setIsWider(checkIsWider());
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return (
    <viewportContext.Provider value={{ height, width, isMobile, isWider }}>
      {children}
    </viewportContext.Provider>
  );
};
ViewportProvider.propTypes = {
  children: node,
};
const maxMobileWidth = 300;
const checkMobileWidth = () => window.innerWidth < maxMobileWidth;
const checkIsWider = () => window.innerWidth > window.innerHeight;

export const useViewport = () => useContext(viewportContext);