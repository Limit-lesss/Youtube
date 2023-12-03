import { useEffect, useState } from "react"
import { YOUTUBE_VIDEOS_API } from "./constants";

const useVideo = () => {
    const [youtubeData, setYoutubeData] = useState([]);
    useEffect(()=> {
        getYoutubeData();
    },[])
    async function getYoutubeData(){
        const response = await fetch(YOUTUBE_VIDEOS_API);
        const data = await response.json();
        setYoutubeData(data?.items);
    }
    return youtubeData ;
}
export default useVideo ;