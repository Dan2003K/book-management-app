import { BookCard } from "./modules/books/components/BookCard";
import { SearchBar } from "./ui/SearchBar/SearchBar";
import { useBooks } from "./modules/books/hooks/useBooks";
import { useBookSearch } from "./modules/books/hooks/useBookSearch";
import { Button } from "flowbite-react";
import { SearchX, BookPlus, Eraser } from "lucide-react";

export default function App() {
  const { books, loading, updateBook, removeBook } = useBooks();
  const { query, setQuery, filteredBooks, noResults } = useBookSearch(books);

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
        <Button className="text mt-4 gap-2 font-bold" color="green">
          <BookPlus />
          Create Book
        </Button>
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col gap-5 px-10 pb-10">
      <div className="sticky top-0 z-10 flex flex-row gap-2 bg-gray-800 py-5">
        <span className="grow">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search for book..."
          />
        </span>
        <Button className="gap-2 font-bold" color="green">
          <BookPlus />
          Create Book
        </Button>
      </div>
      {noResults ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-4 select-none">
          <SearchX className="mb-4 h-16 w-16 text-gray-600 sm:h-20 sm:w-20" />

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-400 sm:text-2xl">
              No matches found for:
            </p>
            <p className="wrap-break-words mt-2 max-w-lg text-2xl font-bold text-white sm:text-3xl">
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
              onClick={() => {
                setQuery("");
              }}
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
              onLike={(b) => {
                console.log(b.isFavorite ? "Liked" : "Unliked", b);
                updateBook(b);
              }}
              onEdit={(b) => console.log("edit", b)}
              onDelete={(b) => {
                removeBook(b);
                console.log("Deleted", b);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
