import React, { useEffect, useRef } from "react";

const GenericModal = ({
  children,
  title,
  onClose,
  closeOnOutsideClick,
}: {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  closeOnOutsideClick: boolean;
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        (modalRef.current as HTMLElement).contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (closeOnOutsideClick) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [closeOnOutsideClick, onClose]);

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-50 z-50",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        ref: modalRef,
        className:
          "bg-white md:w-1/2 h-auto max-w-3/4 max-h-3/4 m-auto p-5 rounded-lg shadow-lg my-20 overflow-auto",
      },
      /*#__PURE__*/ React.createElement(
        "header",
        {
          className: "flex justify-between text-amber-800 font-semibold",
        },
        /*#__PURE__*/ React.createElement("h2", null, title),
        /*#__PURE__*/ React.createElement(
          "button",
          {
            onClick: onClose,
          },
          "X"
        )
      ),
      /*#__PURE__*/ React.createElement("main", null, children)
    )
  );
};

export default GenericModal;