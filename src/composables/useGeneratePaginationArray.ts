export default function (currentPage: number, totalPages: number, limit: number): any {
    currentPage = Math.max(1, Math.min(currentPage, totalPages))

    // Calculate the start and end positions
    let start = Math.max(1, currentPage - Math.floor(limit / 2))
    let end = Math.min(start + limit - 1, totalPages)

    // Adjust start again if we reached the limit
    start = Math.max(1, end - limit + 1)

    const paginationArray = []

    // Add "..." if necessary before the start
    if (start > 1) {
        paginationArray.push(1)

        if (start > 2) paginationArray.push('...')
    }

    // Add the page numbers within the limit
    for (let i = start; i <= end; i++) paginationArray.push(i)

    // Add "..." if necessary after the end
    if (end < totalPages) {
        if (end < totalPages - 1) paginationArray.push('...')

        paginationArray.push(totalPages)
    }

    return paginationArray
}
