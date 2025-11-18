import type { CartItem } from "@/types/cartItem";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Cart_sheet_card = ({
  id,
  name,
  image,
  price,
  quantity,
  size,
  potColor,
}: CartItem) => {
  const currency = "$";
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
        <CardAction>
          {currency}
          {price}
        </CardAction>
      </CardHeader>
      <CardContent>
        <img src={image}></img>
        <p>Quantity: {quantity}</p>
      </CardContent>
      <CardFooter>
        <p>
          {size}, {potColor}
        </p>
      </CardFooter>
    </Card>
  );
};
export default Cart_sheet_card;
