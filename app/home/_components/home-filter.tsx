import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Prop {
  selectedCategory: string | null;
  setCategory: (cat: string | null) => void;
  categories: string[];
}

const HomeFilter = ({selectedCategory, setCategory, categories}:Prop) => {
  return (
    <Select
      value={selectedCategory ?? "all categories"}
      onValueChange={(value) =>
        setCategory(value === "all categories" ? null : value)
      }
    >
      <SelectTrigger className="py-5 rounded-3xl sm:w-52 shadow-sm font-poppins capitalize">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          value="all categories"
          className={"font-poppins text-sm font-light cursor-pointer"}
        >
          All categories
        </SelectItem>
        {categories.map((category) => (
          <SelectItem
            key={category}
            value={category}
            className={"font-poppins text-sm font-light cursor-pointer"}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default HomeFilter