import React from "react";

export default function LoadButton(props) {
  return (
    <div
      className="bg-brandBlue py-[0.375rem] px-[0.813rem] w-fit h-[1.875rem] rounded-button uppercase items-center mx-auto"
      onClick={props.onClick}
    >
      <span className="flex text-sm text-white font-black font-titleFont">
        {props.text}
      </span>
    </div>
  );
}
