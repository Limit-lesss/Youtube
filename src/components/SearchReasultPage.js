import React, { useEffect, useState } from "react";
import SearchResultVideo from "./SearchResultVideo";
import { useSearchParams } from "react-router-dom";
import { SEARCH_RESULT_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNextPage, addSearchVideo } from "../utils/videoSlice";

const SearchReasultPage = () => {
  //   const [searchResult, setSearchResult] = useState([]);
  const [searchParams] = useSearchParams();
  const params = searchParams.get("search_query");
  //   const [nextPage, setNextPage] = useState("");
  //   console.log(params);
  const dispatch = useDispatch();
//   const searchHistory = useSelector((store) => store.searchHistory.history);
  const searchVideo = useSelector((store) => store.video.searchVideoList);
  const pageToken = useSelector((store) => store.video.nextPage);

  useEffect(() => {
    if (searchVideo.length === 0) {
      getSearchVideo("");
    }
  }, []);
  async function getSearchVideo(nextPage) {
    try {
      const response = await fetch(
        SEARCH_RESULT_URL + params + "&pageToken=" + nextPage
      );
      const data = await response.json();
      dispatch(addSearchVideo(data?.items));
      if (data.nextPageToken) {
        dispatch(addNextPage(data.nextPageToken));
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageToken]);
  function handleScroll() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    if (scrollTop + window.innerHeight === scrollHeight) {
      getSearchVideo(pageToken);
    }
  }
  return (
    <div className="pt-20">
      {searchVideo?.map((e) => (
        <SearchResultVideo
          {...e}
          key={e?.etag}
          videoId={e?.id?.videoId}
        />
      ))}
    </div>
  );
};

export default SearchReasultPage;
