import { useState, FC } from "react";
import "./SortMenu.scss";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Box,
  Radio,
  RadioGroup,
} from "@mui/material";

interface SortMenuProps {
  onChangeFilter: (filters: {
    productTypes: string[];
    designers: string[];
    priceRange?: string;
  }) => void;
  onChangeSort: (sortOption: string) => void;
}

export const SortMenu: FC<SortMenuProps> = ({
  onChangeFilter,
  onChangeSort,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedProductTypes, setSelectedProductTypes] = useState<string[]>(
    []
  );
  const [selectedDesigners, setSelectedDesigners] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("");
  const [selectedSortOption, setSelectedSortOption] = useState<string>("");

  const productTypes = [
    "Furniture",
    "Homeware",
    "Sofas",
    "Light fittings",
    "Accessories",
  ];

  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Name: A-Z",
    "Name: Z-A",
  ];

  const designers = [
    "Robert Smith",
    "Liam Gallagher",
    "Biggie Smalls",
    "Thom Yorke",
  ];

  const priceRanges = ["0 - 100", "101 - 250", "250 +"];

  const handleProductTypeChange = (type: string) => {
    const newSelectedTypes = selectedProductTypes.includes(type)
      ? selectedProductTypes.filter((t) => t !== type)
      : [...selectedProductTypes, type];

    setSelectedProductTypes(newSelectedTypes);
    onChangeFilter({
      productTypes: newSelectedTypes,
      designers: selectedDesigners,
      priceRange: selectedPriceRange,
    });
  };

  const handleDesignerChange = (designer: string) => {
    const newSelectedDesigners = selectedDesigners.includes(designer)
      ? selectedDesigners.filter((d) => d !== designer)
      : [...selectedDesigners, designer];

    setSelectedDesigners(newSelectedDesigners);
    onChangeFilter({
      productTypes: selectedProductTypes,
      designers: newSelectedDesigners,
      priceRange: selectedPriceRange,
    });
  };

  const handlePriceRangeChange = (range: string) => {
    const newRange = selectedPriceRange === range ? "" : range;
    setSelectedPriceRange(newRange);
    onChangeFilter({
      productTypes: selectedProductTypes,
      designers: selectedDesigners,
      priceRange: newRange,
    });
  };

  const handleSortChange = (option: string) => {
    setSelectedSortOption(option);
    onChangeSort(option);
    setIsSortOpen(false);
  };

  return (
    <div className="all_menu">
      <div className="mobile_menu">
        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          {/* Filters */}
          <Button
            variant="outlined"
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            fullWidth
          >
            Filters
          </Button>

          {isFiltersOpen && (
            <Box sx={{ mt: 2, p: 2, backgroundColor: "#f9f9f9" }}>
              <div className="title">Product type</div>
              <FormGroup>
                {productTypes.map((type) => (
                  <FormControlLabel
                    key={type}
                    control={
                      <Checkbox
                        checked={selectedProductTypes.includes(type)}
                        onChange={() => handleProductTypeChange(type)}
                      />
                    }
                    label={type}
                  />
                ))}
              </FormGroup>

              <div className="title">Designer</div>
              <FormGroup>
                {designers.map((designer) => (
                  <FormControlLabel
                    key={designer}
                    control={
                      <Checkbox
                        checked={selectedDesigners.includes(designer)}
                        onChange={() => handleDesignerChange(designer)}
                      />
                    }
                    label={designer}
                  />
                ))}
              </FormGroup>

              <div className="title">Price</div>
              <FormGroup>
                {priceRanges.map((range) => (
                  <FormControlLabel
                    key={range}
                    control={
                      <Checkbox
                        checked={selectedPriceRange === range}
                        onChange={() => handlePriceRangeChange(range)}
                      />
                    }
                    label={range}
                  />
                ))}
              </FormGroup>
            </Box>
          )}

          {/* Sorting */}
          <Button
            variant="outlined"
            onClick={() => setIsSortOpen(!isSortOpen)}
            fullWidth
          >
            Sorting
          </Button>

          {isSortOpen && (
            <Box sx={{ mt: 2, p: 2, backgroundColor: "#f9f9f9" }}>
              <RadioGroup
                value={selectedSortOption}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </Box>
          )}
        </Box>
      </div>

      <div className="desktop_menu">
        <div className="sort_type">
          <div className="title">Product type</div>
          <FormGroup>
            {productTypes.map((type) => (
              <FormControlLabel
                key={type}
                control={
                  <Checkbox
                    checked={selectedProductTypes.includes(type)}
                    onChange={() => handleProductTypeChange(type)}
                  />
                }
                label={type}
              />
            ))}
          </FormGroup>
        </div>
        <div className="sort_price">
          <div className="title">Price</div>
          <FormGroup>
            {priceRanges.map((range) => (
              <FormControlLabel
                key={range}
                control={
                  <Checkbox
                    checked={selectedPriceRange === range}
                    onChange={() => handlePriceRangeChange(range)}
                  />
                }
                label={range}
              />
            ))}
          </FormGroup>
        </div>
        <div className="sort_designer">
          <div className="title">Designer</div>
          <FormGroup>
            {designers.map((designer) => (
              <FormControlLabel
                key={designer}
                control={
                  <Checkbox
                    checked={selectedDesigners.includes(designer)}
                    onChange={() => handleDesignerChange(designer)}
                  />
                }
                label={designer}
              />
            ))}
          </FormGroup>
        </div>
        <div className="sort_options">
          <div className="title">Sort by</div>
          <RadioGroup
            value={selectedSortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            {sortOptions.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
