import { Modal } from "../../../../ui";
import { BookForm } from "../BookForm";
import type { BookResponse, BookRequest } from "../../book.types";
import { X } from "lucide-react";

export type BookModalState =
  | { type: "createBook" }
  | { type: "editBook"; book: BookResponse }
  | null;

type BookModalManagerProps = {
  modal: BookModalState;
  close: () => void;
  createBook: (data: Omit<BookRequest, "isFavorite">) => Promise<void>;
  updateBook: (updated: BookResponse) => void;
};

export function BookModalManager({
  modal,
  close,
  createBook,
  updateBook,
}: BookModalManagerProps) {
  if (!modal) return null;

  if (modal.type === "createBook") {
    return (
      <Modal open title="Create Book" onClose={close}>
        <X className="absolute top-5 right-5 text-gray-400" onClick={close} />
        <BookForm
          onSubmit={async (data) => {
            await createBook(data);
            close();
          }}
        />
      </Modal>
    );
  }

  if (modal.type === "editBook") {
    return (
      <Modal open title="Edit Book" onClose={close}>
        <X className="absolute top-5 right-5 text-gray-400" onClick={close} />
        <BookForm
          initialData={modal.book}
          onSubmit={async (data) => {
            await updateBook({ ...modal.book, ...data });
            close();
          }}
        />
      </Modal>
    );
  }

  return null;
}
