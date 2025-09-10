import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#0F1724] text-white min-h-screen font-inter">
      {children}
    </div>
  );
};

export default Layout;