import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils' // shadcn utility

type PaginationProps = {
  currentPage: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
  variant?: 'text' | 'icons'
  buttonVariant?: "destructive" | "ghost" | "link" | "outline" | "secondary"

  /** class overrides */
  containerClassName?: string
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  variant = 'text',
  containerClassName,
  buttonVariant = "outline",
}: PaginationProps) => {
  return (
    <div
      className={cn(
        'mt-auto px-4 border-t border-t-gray200 pt-3 flex justify-between items-center gap-4',
        containerClassName
      )}
    >
      {/* Previous */}
      <Button
        onClick={onPrev}
        disabled={currentPage === 1}
        variant={buttonVariant}
        size="lg"
        className="cursor-pointer"
      >
        {variant === 'icons' ? <ChevronLeft size={18} /> : 'Previous'}
      </Button>

      {/* Page info */}
      <span className="text-sm font-inter text-gray-600">
        page {currentPage} of {totalPages}
      </span>

      {/* Next */}
      <Button
        onClick={onNext}
        disabled={currentPage === totalPages}
        variant={buttonVariant}
        size="lg"
        className="cursor-pointer"
      >
        {variant === 'icons' ? <ChevronRight size={18} /> : 'Next'}
      </Button>
    </div>
  )
}
