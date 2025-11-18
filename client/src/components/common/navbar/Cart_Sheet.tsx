"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CartItem from "./CartItem";
import { dummyCartItems } from "@/components/cart/dummyCartData";
import type { ICartItem } from "@/types/cartItem";

export const title = "Right Drawer Shopping Cart";

const Cart_Sheet = () => {
  const cartLength = dummyCartItems.length;
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">
          <ShoppingCart className="" />
          {/* {"cart items numbers here"} */}
          {cartLength}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>{cartLength} items in your cart</DrawerDescription>
        </DrawerHeader>
        <div className="space-y-4 overflow-y-auto p-4">
          {dummyCartItems.map((item: ICartItem) => (
            <CartItem
              key={item.id}
              name={item.name}
              image={item.image}
              potColor={item.potColor}
              quantity={item.quantity}
              size={item.size}
              price={item.price}
            />
          ))}
        </div>

        <DrawerFooter>
          <div className="space-y-2 pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>$147.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between border-t pt-2 font-medium">
              <span>Total</span>
              <span>$157.00</span>
            </div>
          </div>
          <Button>Checkout</Button>
          <DrawerClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart_Sheet;
