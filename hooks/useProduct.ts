import { productService } from "@/services/product.service";
import { useQuery } from "@tanstack/react-query";

export const getAllProductKey = ['products']

export function useGetAllProduct() {
  return useQuery({
    queryKey: getAllProductKey,
    queryFn: productService.getAllProduct,
  })
}