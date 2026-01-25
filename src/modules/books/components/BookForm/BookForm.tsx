import { Button, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import type { BookRequest } from "../../book.types";
import { Save } from "lucide-react";

type BookFormProps = {
  initialData?: Partial<BookRequest>;
  onSubmit: (data: Omit<BookRequest, "isFavorite">) => void;
};

export function BookForm({ initialData, onSubmit }: BookFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [author, setAuthor] = useState(initialData?.author ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, description, coverImage });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book title"
        required
      />
      <TextInput
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <Textarea
        className="h-50 max-h-75 min-h-25"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <TextInput
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
        placeholder="Cover image URL (optional)"
      />
      <Button className="gap-2" type="submit">
        <Save />
        <span className="font-bold">Save</span>
      </Button>
    </form>
  );
}
