import { Card } from "@/components/ui/card";
import { Product } from "@/types/product";
import Image from "next/image";

interface Prop {
  product: Product;
}

const ProductList = ({ product }: Prop) => {
  return (
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
      <div className="p-3 space-y-1">
        <p className="text-base font-medium font-poppins truncate">{product.title}</p>
        <p className="text-sm font-normal font-poppins truncate">{product.description}</p>
        <p className="text-sm font-poppins text-muted-foreground">${product.price}</p>
      </div>
    </Card>
  );
};

export default ProductList;