import React, { useEffect } from "react";
import Image from "next/image";
import WorkItem from "../global/WorkItem";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WorkSection({ workCategories, workItems }) {

    useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="relative mx-4 md:mx-[3.875rem]">
      {/* background image */}
      <div className="hidden lg:block" >
        <Image
          src="/images/gif/work-gif.gif"
          width={1312}
          height={446}
          alt="work-bg"
        />
      </div>
      <div className="block lg:hidden mx-auto">
        <Image
          src="/images/work-bg-mb.svg"
          width={343}
          height={103}
          alt="work-bg"
        />
      </div>
      {/* work items */}
      <div className="lg:-mt-[19rem]" >
        {workCategories.map((categories, key) => (
          <div key={key} >
            {workItems
              .filter((items) => items.category === categories.slug)
              .slice(0, 1)
              .map((filteredItems, key) => (
                <WorkItem
                  key={filteredItems.id}
                  class={`${filteredItems.id == 3 ? "z-10" : ""} `}
                  items={filteredItems}
                  direction={filteredItems.id == 5 ? true : false}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
