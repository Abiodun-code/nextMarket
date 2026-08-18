"use client";

import { useMemo } from "react";
import PageLoader from "@/components/PageLoader";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import NavBar from "@/components/navbar";
import { useGetAllProduct } from "@/hooks/useProduct";
import { useProductUIStore } from "@/stores/product.store";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePagination } from "@/hooks/usePagination";
import { Pagination } from "@/components/Pagination";
import ProductList from "./_components/product-list";
import HomeFilter from "./_components/home-filter";

const HomePage = () => {
  const { data: user, isLoading, isError } = useCurrentUser();
  const { data: products } = useGetAllProduct();
  const { searchTerm, selectedCategory, setSearchTerm, setCategory } =useProductUIStore();

  const categories = useMemo(() => {
    if (!products) return [];
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products]);

  const filtered = useMemo(() => {
    if (!products) return [];
    return products.filter(
      (p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedCategory || p.category === selectedCategory)
    );
  }, [products, searchTerm, selectedCategory]);

  const {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
  } = usePagination(filtered, 15);

  if (isLoading) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <PageLoader />
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <PageLoader />
      </div>
    );
  }

  return (
    <div className="max-w-[95%] mx-auto">
      <NavBar />

      <div className="pt-5 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <div className="relative max-w-xl w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="pl-11 h-12 rounded-3xl border-muted-foreground/20 bg-background shadow-sm focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0"
          />
        </div>

        <HomeFilter selectedCategory={selectedCategory} setCategory={setCategory} categories={categories}/>
      </div>

      <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {paginatedData.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={prevPage}
          onNext={nextPage}
          variant="icons"
          containerClassName="my-6 font-poppins"
        />
      )}
    </div>
  );
};

export default HomePage;