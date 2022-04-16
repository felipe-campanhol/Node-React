export const reserve_single_book = book_name => {
    reserve(book_name, new Date())
}

export const reserve = (book_name, today) => {
    console.log(`The book that will be reserved is ${book_name} by the day of ${today}`)
}