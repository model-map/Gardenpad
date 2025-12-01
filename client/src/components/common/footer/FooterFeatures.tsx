import { CreditCard, RefreshCcw, ShoppingBag } from "lucide-react";

const features = [
  {
    icon: <ShoppingBag />,
    mainline: "FREE INTERNATIONAL SHIPPING",
    byline: "on all orders above $100",
  },
  {
    icon: <RefreshCcw />,
    mainline: "45 DAYS RETURN",
    byline: "Money back guarantee",
  },
  {
    icon: <CreditCard />,
    mainline: "SECURE CHECKOUT",
    byline: "100% secured checkout process",
  },
];

const FooterFeatures = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) mx-auto text-center py-6">
        <div className="mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 justify-center">
          {features.map((feature) => (
            <div
              className="
            w-full sm:w-4/5 lg:w-3/4 
            flex flex-col items-center 
            text-secondary-foreground
          "
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {feature.icon}
              </span>

              <div className="flex flex-col mt-4 sm:mt-6">
                <p className="text-lg sm:text-xl lg:text-2xl">
                  {feature.mainline}
                </p>
                <p className="mt-1 text-sm sm:text-md lg:text-lg">
                  {feature.byline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterFeatures;
