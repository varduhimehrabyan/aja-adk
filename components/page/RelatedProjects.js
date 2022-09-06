import React, { useRef } from "react";
import WorkSingle from "../global/WorkSingle";
import Slider from "react-slick";


export default function RelatedProjects(props) {
  
  let setting = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed:1800,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="pt-[2rem] md:pt-[4.537rem] pb-[2.5rem] md:pb-[5.313rem] px-12 md:px-[10.75rem]">
   <span className="uppercase text-[1.313rem] md:text-[2.5rem] font-titleFont font-black pb-[0.75rem] mb:pb-[1.5rem]">
        Related Projects
      </span>
      {props.data.related_works.length<2 ?
      
    (
       <div className=" block md:flex md:justify-between pt-[2rem] md:pt-[4rem]">
          {props.data.related_works &&
            props.data?.related_works?.map((item, key) => (
              <div
                className="cursor-grabbing mr-4 lg:mr-[8rem] xl:mr-[12rem]"
                key={key}
              >
                <WorkSingle work={item} />
               </div>
            ))}
      </div>
    ):
    (
      <div className="pt-[2rem] md:pt-[4rem]">
        <Slider {...setting}>
          {props.data.related_works &&
            props.data?.related_works?.map((item, key) => (
              <div
                className="cursor-grabbing !w-fit"
                key={key}
              >
                <WorkSingle work={item} />
               </div>
            ))}
        </Slider>
      </div>

    )
    
    }
     </div>
  );
}
