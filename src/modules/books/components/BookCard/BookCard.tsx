import { Heart, Pencil, Trash2 } from "lucide-react";
import type { BookCardProps } from "./BookCard.types";
import { Card, Button } from "flowbite-react";

export function BookCard({ book, onLike, onEdit, onDelete }: BookCardProps) {
  return (
    <>
      <Card>
        <img
          src={book.coverImage}
          alt={book.title}
          className="border-var(gray-500) h-48 w-full rounded-md border object-cover text-gray-500"
        />
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.description}</p>

        <div className="flex flex-row gap-2">
          <Button onClick={() => onLike(book)} color={"pink"}>
            <Heart />
          </Button>

          <Button onClick={() => onEdit(book)} color={"blue"}>
            <Pencil />
          </Button>

          <Button onClick={() => onDelete(book)} color={"red"}>
            <Trash2 />
          </Button>
        </div>
      </Card>
    </>
  );
}
