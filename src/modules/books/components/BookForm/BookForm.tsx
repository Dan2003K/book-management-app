import { Button, TextInput, Textarea, Select } from "flowbite-react";
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
  const [rate, setRate] = useState(initialData?.rate ?? "?");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [coverImage, setCoverImage] = useState(initialData?.coverImage ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, description, rate, coverImage });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <span className="flex gap-2">
        <TextInput
          className="grow"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
          required
        />
        <Select value={rate} onChange={(e) => setRate(e.target.value)} required>
          <option value={10}>10</option>
          <option value={9}>09</option>
          <option value={8}>08</option>
          <option value={7}>07</option>
          <option value={6}>06</option>
          <option value={5}>05</option>
          <option value={4}>04</option>
          <option value={3}>03</option>
          <option value={2}>02</option>
          <option value={1}>01</option>
          <option value={"?"}>No Rate</option>
        </Select>
      </span>
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
        placeholder="Description (optional)"
        required={false}
      />
      <TextInput
        value={coverImage}
        onChange={(e) => setCoverImage(e.target.value)}
        placeholder="Cover image URL"
        required={true}
      />
      <Button className="gap-2" type="submit">
        <Save />
        <span className="font-bold">Save</span>
      </Button>
    </form>
  );
}
