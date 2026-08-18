import { api } from "@/lib/axios";
import { GetAllProductsResponse } from "@/types/product";

export const productService = {
  async getAllProduct() {
    const {data} = await api.get<GetAllProductsResponse>("/products?limit=0")

    return data.products
  }
}