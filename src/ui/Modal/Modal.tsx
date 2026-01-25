import { Modal as FlowbiteModal, ModalHeader, ModalBody } from "flowbite-react";

type ModalProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ open, title, onClose, children }: ModalProps) {
  return (
    <FlowbiteModal show={open} onClose={onClose}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </FlowbiteModal>
  );
}
