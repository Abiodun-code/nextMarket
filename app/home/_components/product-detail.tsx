import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

const ProductDetail = ({ product }: Props) => {
  return (
    <div className="space-y-4">
      <Carousel
        opts={{
          loop: product.images.length > 1,
          align: "start",
        }}
        className="w-full px-4"
      >
        <CarouselContent>
          {product.images.map((img, i) => (
            <CarouselItem key={i}>
              <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-muted">
                <Image
                  src={img}
                  alt={`${product.title} ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, 400px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <div className="px-4 space-y-2">
        <h3 className="font-poppins font-semibold text-lg">{product.title}</h3>
        <p className="font-poppins font-medium text-base text-foreground">
          ${product.price}
        </p>
        <p className="font-poppins font-normal text-sm text-muted-foreground">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
