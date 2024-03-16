import React, { useEffect, useRef } from "react";

const GenericModal = ({
  children,
  title,
  onClose,
}: {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}) => {
  const modalRef = useRef(null);

  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-50 z-50 text-primary",
    },
    /*#__PURE__*/ React.createElement(
      "div",
      {
        ref: modalRef,
        className:
          "bg-white md:w-1/2 h-5/6 max-w-3/4 max-h-3/4 m-auto p-5 rounded-lg shadow-lg my-20 overflow-auto",
      },
      /*#__PURE__*/ React.createElement(
        "header",
        {
          className: "flex justify-between font-semibold",
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
