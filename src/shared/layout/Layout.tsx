import { FC } from "react";
import "./Layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="default">{children}</div>;
};
