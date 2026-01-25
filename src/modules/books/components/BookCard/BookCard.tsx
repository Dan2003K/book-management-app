import { Heart, Pencil, Trash2 } from "lucide-react";
import type { BookCardProps } from "./BookCard.types";
import { Card, Button } from "flowbite-react";
import { useState, useEffect } from "react";

export function BookCard({ book, onLike, onEdit, onDelete }: BookCardProps) {
  const [isFavorite, setIsFavorite] = useState(book.isFavorite);

  useEffect(() => {
    setIsFavorite(book.isFavorite);
  }, [book.isFavorite]);

  const handleLike = () => {
    setIsFavorite(!isFavorite);
    onLike({ ...book, isFavorite: !isFavorite });
  };

  const handleDelete = () => {
    if (window.confirm(`Delete "${book.title}"?`)) {
      onDelete(book.id);
    }
  };

  return (
    <>
      <Card className="text-gray-500">
        <img
          src={book.coverImage}
          alt={book.title}
          className="h-48 w-full rounded-md border border-gray-700 object-cover text-center text-gray-500"
        />
        <h1 className="text-xl font-bold">{book.title}</h1>
        <p>{book.author}</p>
        <p className="grow">{book.description}</p>

        <div className="flex flex-row justify-between">
          <Button onClick={handleLike} color={isFavorite ? "pink" : "gray"}>
            <Heart
              color={isFavorite ? "#EE8FB5" : "gray"}
              fill={isFavorite ? "#EE8FB5" : "none"}
            />
          </Button>
          <div className="flex flex-row gap-4">
            <Button onClick={() => onEdit(book)} color={"blue"}>
              <Pencil />
            </Button>

            <Button onClick={handleDelete} color={"red"}>
              <Trash2 />
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
