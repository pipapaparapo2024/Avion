import { FC } from "react";
import { Layout } from "../../shared/Layout";

export const HomePage: FC = () => {
  return (
    <>
      <div>
        <div className="min-h-screen">
          <div className="max-w-[1440px] mx-auto text-center text-[20px] sm:px-0">
            <Layout/>
          </div>
        </div>
      </div>
    </>
  );
};
