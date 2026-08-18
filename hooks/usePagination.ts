import { useEffect, useState } from 'react'

export const usePagination = <T>(data: T[], pageSize: number = 5) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const paginatedData = data.slice(startIndex, startIndex + pageSize)

  useEffect(() => {
    setCurrentPage(1)
  }, [data.length])

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const nextPage = () => goToPage(currentPage + 1)
  const prevPage = () => goToPage(currentPage - 1)

  const getPaginationRange = () => {
    const delta = 1
    const range: (number | string)[] = []
    let left = Math.max(2, currentPage - delta)
    let right = Math.min(totalPages - 1, currentPage + delta)

    range.push(1)
    for (let i = left; i <= right; i++) {
      range.push(i)
    }
    if (right < totalPages - 1) {
      range.push("...")
    }
    if (totalPages > 1) {
      range.push(totalPages)
    }

    return [...new Set(range)]
  }

  return {
    currentPage,
    totalPages,
    paginatedData,
    goToPage,
    nextPage,
    prevPage,
    paginationRange: getPaginationRange(),
  }
}