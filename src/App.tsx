import { useState } from "react";
import { BookCard } from "./modules/books/components/BookCard";
import { SearchBar } from "./ui/SearchBar/SearchBar";
import { useBooks } from "./modules/books/hooks/useBooks";
import { useBookSearch } from "./modules/books/hooks/useBookSearch";
import { Button } from "flowbite-react";
import { SearchX, BookPlus, Eraser } from "lucide-react";
import type { BookResponse } from "./modules/books/book.types";
import {
  BookModalManager,
  type BookModalState,
} from "./modules/books/components/modals/BookModalManager";

export default function App() {
  const { books, loading, createBook, updateBook, removeBook } = useBooks();
  const { query, setQuery, filteredBooks, noResults } = useBookSearch(books);

  // --- Modal state ---
  const [modal, setModal] = useState<BookModalState>(null);
  const closeModal = () => setModal(null);

  const openCreateModal = () => setModal({ type: "createBook" });
  const openEditModal = (book: BookResponse) =>
    setModal({ type: "editBook", book });

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-2xl font-bold text-gray-500">Loading...</p>
      </div>
    );

  if (books.length === 0)
    return (
      <div className="flex h-screen flex-1 flex-col items-center justify-center gap-4 px-4 select-none">
        <div className="flex flex-col gap-4 text-center text-2xl font-bold text-gray-500">
          <span className="text-4xl">{`Meow ≽(•⩊ •マ≼`}</span>
          <span>Your Book Library is Empty ...</span>
        </div>
        <Button
          className="text mt-4 gap-2 font-bold"
          color="green"
          onClick={openCreateModal}
        >
          <BookPlus />
          Create Book
        </Button>

        <BookModalManager
          modal={modal}
          close={closeModal}
          createBook={createBook}
          updateBook={updateBook}
        />
      </div>
    );

  return (
    <div className="flex min-h-screen min-w-100 flex-col gap-5 px-10 pb-10">
      {/* --- Top Bar --- */}
      <div className="sticky top-0 z-10 flex flex-row gap-2 bg-gray-800 py-5">
        <span className="grow">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search book by title, author or description..."
          />
        </span>
        <Button
          className="gap-2 font-bold select-none"
          color="green"
          onClick={openCreateModal}
        >
          <BookPlus />
          <span className="hidden sm:inline">Create Book</span>
        </Button>
      </div>

      {/* --- No Results --- */}
      {noResults ? (
        <div className="justify-top mt-50 flex flex-1 flex-col items-center gap-2 px-4 select-none">
          <SearchX className="mb-4 h-16 w-16 text-gray-600 sm:h-20 sm:w-20" />
          <div className="text-center">
            <p className="text-xl font-semibold text-gray-400 sm:text-2xl">
              No matches found for:
            </p>
            <p className="mt-2 max-w-100 text-2xl font-bold wrap-anywhere text-white sm:text-3xl">
              "{query}"
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="mb-2 text-sm text-gray-500 sm:text-base">
              Try different keywords or browse all books
            </p>
            <Button
              className="gap-2 font-bold text-gray-200"
              color="gray"
              size="lg"
              onClick={() => setQuery("")}
            >
              Clear Search
              <Eraser />
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onLike={(b) => updateBook(b)}
              onEdit={openEditModal}
              onDelete={(b) => removeBook(b)}
            />
          ))}
        </div>
      )}

      <BookModalManager
        modal={modal}
        close={closeModal}
        createBook={createBook}
        updateBook={updateBook}
      />
    </div>
  );
}
