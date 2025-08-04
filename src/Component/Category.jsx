// Component/Category.jsx
import { useParams } from "react-router-dom";
import PrintedTshirt from "./Product/PrintedTshirt";
import CasualWear from "./Product/CasualWear"
import Hoodie from "./Product/Hoodie";
import DenimJeans from "./Product/DenimJeans";
import OversizedTshirt from "./Product/OversizedTshirt";
import CargoPants from "./Product/Cargo";
import TechWearJackets from "./Product/TechWearJackets";
import Sneakers from "./Product/Sneakers";
import Accessories from "./Product/Accesories";


const Category = () => {
  const { categoryName } = useParams();

  // Map category name to component
  const categoryComponents = {
        "oversized-tshirt" : <OversizedTshirt/>,
    "printed-tshirt": <PrintedTshirt />,
    "casual-wear": <CasualWear/>,
    "hoodie" : <Hoodie/>,
    "denim-jeans": <DenimJeans/>,
    "cargo-pants": <CargoPants/>,
    "techwear-jackets" : <TechWearJackets/>,
    "sneakers" : <Sneakers/>,
    "accessories":<Accessories/>
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
