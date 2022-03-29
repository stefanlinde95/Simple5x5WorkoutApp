import React from "react";
import { Link } from "react-router-dom";
import { videoData } from "./data/videos.data";

const Videos = () => {
  return (
    <div id="videos" className="my-4">
      <div className="sm:w-100 md:w-4/5 lg:w-3/5 block mx-auto text-center text-white">
        <h1 className="text-4xl">Videos</h1>
        <ul className="list-none sm:w-95 md:w-85 lg:w-3/4 mx-auto my-3">
          {videoData.map((item) => {
            const { id, banner, title, description } = item;
            return (
              <li key={id} className="mx-4">
                <div className="border border-stone-800 bg-dark rounded-xl my-2 flex shadow-xl">
                  <img
                    src={banner}
                    alt={title}
                    width={150}
                    className="rounded-l-xl rounded-b-l-xl object-cover"
                  />
                  <div className="block text-left ml-4 mb-4">
                    <h2 className="text-2xl">{title}</h2>
                    <p className="text-white pr-4 pb-2">
                      {description.substring(0, 100)}...
                    </p>
                    <Link
                      state={title}
                      search={id}
                      className="video-cta-btn border border-white-600 rounded-xl px-4 py-1 text-md transition hover:bg-sky-600 border-stone-600"
                      to={`/videos/${id}`}
                    >
                      Watch video
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Videos;
