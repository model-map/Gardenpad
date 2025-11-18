import { Button } from "@/components/ui/button";
import type { ICartItem } from "@/types/cartItem";
import { Minus, Plus, Trash2 } from "lucide-react";

type PickedCartItems = Omit<ICartItem, "id">;

const CartItem = ({
  name,
  image,
  potColor,
  price,
  quantity,
  size,
}: PickedCartItems) => {
  const currency = "$";
  return (
    <>
      <div className="flex gap-4 border-b pb-4">
        <div className="h-20 w-20 rounded-md bg-muted overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>

        <div className="flex-1 space-y-1">
          {/* ITEM NAME */}
          <h4 className="font-medium text-sm">{name}</h4>
          <p className="text-muted-foreground text-xs">
            {potColor}, {size}
          </p>
          {/* PRICE and REMOVE ITEM */}
          <div className="flex items-center justify-between">
            <span className="font-medium text-sm">
              {currency}
              {price}
            </span>
            <Button className="h-6 w-6" size="icon" variant="ghost">
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
          {/* QUANTITY */}
          <div className="flex flex-row gap-4">
            <Button className="h-6 w-6" size="icon" variant="outline">
              <Plus className="h-3 w-3" />
            </Button>
            {quantity}
            <Button className="h-6 w-6" size="icon" variant="outline">
              <Minus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
