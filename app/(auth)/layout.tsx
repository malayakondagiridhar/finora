import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode; // ✅ Explicit typing for children
}

// ✅ Auth layout wrapper for all authentication pages
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default AuthLayout;
