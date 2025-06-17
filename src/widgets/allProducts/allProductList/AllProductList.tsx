import { FC, useEffect, useState } from "react";
import "./AllProductList.scss";
import { SortMenu } from "../sortMenu/SortMenu";
import { useFurnitureStore } from "../../listProducts/ListProductsStore";
import { useNavigate } from "react-router-dom";
interface FilterState {
  productTypes: string[];
  designers: string[];
  priceRange?: string;
}

export const AllProductList: FC = () => {
  const navigate = useNavigate();
  const { FurnitureContainer, getFurniture } = useFurnitureStore();
  const [filters, setFilters] = useState<FilterState>({
    productTypes: [],
    designers: [],
    priceRange: "",
  });
  const [sortOption, setSortOption] = useState<string>("");

  useEffect(() => {
    getFurniture();
  }, []);

  const filteredProducts = FurnitureContainer.filter((item) => {
    const typeMatch =
      filters.productTypes.length === 0 ||
      filters.productTypes.includes(item.productType);

    const designerMatch =
      filters.designers.length === 0 ||
      filters.designers.includes(item.designer);

    let priceMatch = true;
    if (filters.priceRange) {
      if (filters.priceRange === "250 +") {
        priceMatch = item.price >= 250;
      } else {
        const [min, max] = filters.priceRange.split(" - ").map(Number);
        priceMatch = item.price >= min && item.price <= max;
      }
    }

    return typeMatch && designerMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "Price: Low to High":
        return a.price - b.price;
      case "Price: High to Low":
        return b.price - a.price;
      case "Name: A-Z":
        return a.name.localeCompare(b.name);
      case "Name: Z-A":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="all_products">
      <SortMenu onChangeFilter={setFilters} onChangeSort={setSortOption} />
      <div className="list_product">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((furniture) => (
            <div  onClick={() => navigate(`/product/${furniture.id}`)}key={furniture.id} className="list_item">
              <img
                className="url_item"
                src={furniture.url}
                alt={furniture.name}
              />
              <div className="title_item">{furniture.name}</div>
              <div className="designer_item">{furniture.designer}</div>
              <div className="price_item">${furniture.price}</div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};
