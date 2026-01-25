import type { BookResponse } from "../../book.types";

export interface BookCardProps {
  book: BookResponse;
  // The core book data model to display.

  onLike: (book: BookResponse) => void;
  // Sends the book object to the parent to toggle its 'isFavorite' status in the database.

  onEdit: (book: BookResponse) => void;
  // Sends the book object to the parent to populate a form with the book's details.

  onDelete: (id: string) => void;
  // Sends the book object to the parent to pull the ID and filter this book out of the list.
}
