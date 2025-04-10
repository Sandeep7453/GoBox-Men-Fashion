// Component/Category.jsx
import { useParams } from "react-router-dom";
import PrintedTshirt from "./Product/PrintedTshirt";

const Category = () => {
  const { categoryName } = useParams();

  // Map category name to component
  const categoryComponents = {
    "printed-tshirt": <PrintedTshirt />,
    // Add more categories later like:
    // "hoodie": <Hoodie />,
    // "denim-jeans": <DenimJeans />,
  };

  return (
    <div>
      {categoryComponents[categoryName] || (
        <div className="text-white p-6">Category Not Found</div>
      )}
    </div>
  );
};

export default Category;
