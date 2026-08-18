import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';
import { ShoppingCart, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface NavbarCartProps {
  items?: CartItem[];
  onRemoveItem?: (id: string) => void;
}

const NavbarCart = ({ items = [], onRemoveItem }: NavbarCartProps) => {
  const hasItems = items.length > 0;
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={
        <div className={"rounded-full cursor-pointer  relative"}>
          <ShoppingCart className="size-5" />
          {hasItems && (
            <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white ring-2 ring-background">
              {items.length}
            </span>
          )}
        </div>
      }/>
      <DropdownMenuContent align="center" className="w-72">
        <DropdownMenuGroup className={"space-y-2"}>
          {!hasItems && (
            <div className="px-2 py-4 text-center text-sm text-muted-foreground font-poppins">
              Your cart is empty
            </div>
          )}

          {items.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="flex items-center justify-between gap-2 font-poppins"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-xs text-muted-foreground">
                  Qty {item.quantity} · ${item.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveItem?.(item.id);
                }}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </DropdownMenuItem>
          ))}

          {hasItems && (
            <div className="flex items-center justify-between border-t px-2 pt-2 font-poppins text-sm font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NavbarCart