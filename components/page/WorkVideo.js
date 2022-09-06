import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function WorkVideo(props) {
  return (
    <div className="px-12 md:px-[10.75rem] py-[3.75rem] md:py-[7.5rem] ">
      <ReactPlayer
        className="!w-[1100px] !h-[600px]"
        url={props.data.video_url}
        playing={false}
        loop={true}
        controls={false}
      />
    </div>
  );
}
