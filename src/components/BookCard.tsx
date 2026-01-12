import { Card, Button } from "flowbite-react";
import type { bookResponse } from "../models/book";
import { Trash2, Pencil, Heart } from "lucide-react";

interface BookCardProps {
  book: bookResponse;
  onDelete: (id: string) => void;
  onUpdate: () => void;
}

function BookCard({ book, onDelete, onUpdate }: BookCardProps) {
  return (
    <Card className="border border-gray-700 text-gray-400">
      <img
        src="https://picsum.photos/200/300"
        alt={`Cover of ${book.title}`}
        className="mb-4 h-48 w-full bg-center object-cover"
      />
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <div className="flex gap-2">
        <Button color="pink" className="w-fit">
          <Heart />
        </Button>
        <Button color="blue" className="w-fit" onClick={onUpdate}>
          <Pencil />
        </Button>
        <Button onClick={() => onDelete(book.id)} color="red" className="w-fit">
          <Trash2 />
        </Button>
      </div>
    </Card>
  );
}

export default BookCard;
