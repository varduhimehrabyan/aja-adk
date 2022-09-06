import React from "react";

export default function WorkCategories(props) {
  return (
    <div className="pt-[1.938rem] md:pt-[4.156rem] ">
      <span className="uppercase text-[1.313rem] md:text-[2.5rem] font-titleFont font-black pb-[0.75rem] ">
        {props.categories.name}
      </span>
    </div>
  );
}
