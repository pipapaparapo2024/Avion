import { FC } from "react";
import { Layout } from "../../shared/Layout";
import './HomePage.scss'
export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="inner">
          <Layout />
        </div>
      </div>
    </div>
  );
};