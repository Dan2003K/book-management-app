import { Heart, Pencil, Trash2, Star } from "lucide-react";
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
      <Card className="min-w-75 text-gray-500 transition-all duration-250 ease-out hover:scale-102">
        <img
          src={book.coverImage}
          alt={book.title}
          className="h-48 w-full rounded-md border border-gray-700 object-cover text-center text-gray-500 select-none"
        />
        <span className="flex justify-between">
          <h1 className="text-xl font-bold">{book.title}</h1>
          <div className="ml-2 flex flex-wrap-reverse items-center justify-end select-none">
            <div className="whitespace-nowrap">{book.rate} / 10</div>
            <Star className="ml-2" fill="gray" color="gray" size={14} />
          </div>
        </span>
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
