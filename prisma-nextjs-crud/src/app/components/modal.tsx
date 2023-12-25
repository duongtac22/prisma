const Modal = ({
  children,
  modalOpen,
  setModalOpen,
}: {
  children: any;
  modalOpen: boolean;
  setModalOpen: any;
}) => {
  return (
    <>
      {modalOpen && (
        <div
          id="createProductModal"
          aria-hidden="true"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex bg-black/70"
        >
          {children}
        </div>
      )}
    </>
  );
};
export default Modal;
