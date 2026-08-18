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
      value={selectedCategory ?? "all"}
      onValueChange={(value) =>
        setCategory(value === "all" ? null : value)
      }
    >
      <SelectTrigger className="h-12 rounded-3xl sm:w-52 shadow-sm">
        <SelectValue placeholder="All categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
           {category.charAt(0).toUpperCase() + category.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default HomeFilter