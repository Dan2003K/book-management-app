import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import type { bookResponse } from "./models/book";
import { getBooks, deleteBook } from "./services/apiService";
import { TextInput, Button } from "flowbite-react";
import { BookPlus } from "lucide-react";

function App() {
  const [books, setBooks] = useState<bookResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await getBooks();
      setBooks(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to load books");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id);
      // Remove the book from state immediately
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.error("Failed to delete book", err);
      alert("Failed to delete book");
    }
  };

  const handleUpdate = () => {
    // Refresh the books list after update
    fetchBooks();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ backgroundColor: "var(--gray-800)" }}>
      <div className="mb-4 flex justify-between gap-4 px-10 py-5">
        <TextInput className="grow" placeholder="Search Book" />
        <Button className="gap-2" color="green">
          <BookPlus />
          Create Book
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 px-10 pb-10 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
