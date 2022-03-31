import React, { lazy, Suspense } from "react";
import { videoData } from "../components/data/videos.data";
import { useLocation, useParams } from "react-router-dom";
const YoutubeEmbed = lazy(() => import("../components/YoutubeEmbed"));

const SingleVideo = () => {
  const location = useLocation();
  const title = location.state;
  const { id } = useParams();

  return (
    <div className="text-white my-2">
      <div className="sm:w-full lg:w-3/5 mx-auto">
        <h1 className="text-3xl text-center my-3">{title}</h1>
        <div className="sm:block lg:flex">
          <div className="sm:w-90 lg:w-3/5 mx-4">
            <Suspense fallback={<p>Loading...</p>}>
              <YoutubeEmbed embedId={videoData[id].embedId} />
            </Suspense>
          </div>
          <div className="sm:w-90 lg:w-2/5">
            <p className="px-4">{videoData[id].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
