import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import React from 'react'

const HomeHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-poppins text-5xl tracking-wide font-semibold">Get Your Best Selling Product Here</h1>
      <div>
        <Button size={"icon-lg"} variant={"ghost"} className={"rounded-full border border-gray-300 p-7 cursor-pointer"}>
          <ShoppingCart strokeWidth={1.5} className="size-8"/>
        </Button>
      </div>
    </div>
  )
}

export default HomeHeader