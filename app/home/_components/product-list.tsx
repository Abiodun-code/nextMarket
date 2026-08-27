import { Card } from "@/components/ui/card";
import { Product } from "@/types/product";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ProductDetail from "./product-detail";

interface Prop {
  product: Product;
}

const ProductList = ({ product }: Prop) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Card className="overflow-hidden p-0 gap-2 cursor-pointer mb-6">
          <div className="relative aspect-square w-full rounded-t-lg overflow-hidden bg-muted">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>
          <div className="p-3 space-y-1 text-left">
            <p className="text-base font-medium font-poppins truncate">
              {product.title}
            </p>
            <p className="text-sm font-normal font-poppins truncate">
              {product.description}
            </p>
            <p className="text-sm font-poppins text-muted-foreground">
              ${product.price}
            </p>
          </div>
        </Card>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className={"font-poppins font-semibold text-lg"}>
            Product Detail
          </SheetTitle>
        </SheetHeader>
        <ProductDetail product={product}/>
        <SheetFooter>
          <Button
            size={"lg"}
            variant={"secondary"}
            className={"w-full font-poppins font-normal text-sm cursor-pointer"}
          >
            Add to cart
          </Button>
          <SheetClose>
            <Button
              size={"lg"}
              variant={"destructive"}
              className={"w-full font-poppins font-normal text-sm cursor-pointer"}
            >
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProductList;