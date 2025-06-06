import React from "react";

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`
        w-full max-w-sm p-6 rounded-lg shadow-md
        focus:outline-none focus:ring-4 focus:ring-blue-400
        transition-transform transform
        hover:scale-105
        ${isFeatured ? "bg-blue-800 text-white" : "bg-white text-gray-900"}
      `}
      tabIndex={0}
    >
      <h3 className="text-xl font-semibold text-center mb-4">{plan}</h3>
      <div className="text-center text-4xl font-bold mb-6">{price}</div>
      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-center">
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`
          w-full py-2 rounded-md font-medium transition-colors
          ${isFeatured ? "bg-white text-blue-800 hover:bg-gray-200" : "bg-blue-800 text-white hover:bg-blue-900"}
        `}
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;
