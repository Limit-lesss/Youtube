export const BUTTON_LIST = [
  "All",
  "Indian nation cricket team",
  "Mixes",
  "Microsoft Windows",
  "Server",
  "Programming",
  "Live",
  "Stock markets",
  "Smartphones",
  "Asian music",
  "Songs",
  "Recently uploaded",
  "New to you",
];

export const YOUTUBE_VIDEOS_API =
  "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
