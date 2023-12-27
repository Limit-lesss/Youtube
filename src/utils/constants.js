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
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=IN&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_CHANNEL_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY_CHANNEL +
  "&id=";

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.org/?" +
  encodeURIComponent(
    "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  );

export const VIDEO_DATA_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY_VIDEO +
  "&id=";

export const commentData = [
  {
    name: "Somya",
    text: "Nice video",
    replies: [
      {
        name: "Ninu",
        text: "Awesome",
        replies: [],
      },
      {
        name: "Sweta",
        text: "So beautiful, so elegant, just looking like a wow ",
        replies: [
          {
            name: "Adarsh",
            text: "😍",
            replies: [
              {
                name: "Hitesh",
                text: "😍",
                replies: [],
              },
              {
                name: "Anurag",
                text: "❤️",
                replies: [
                  {
                    name: "Menu",
                    text: "Share this video",
                    replies: [],
                  },
                  {
                    name: "Mohit",
                    text: "❤️",
                    replies: [
                      {
                        name: "Aarav",
                        text: "❤️",
                        replies: [],
                      },
                      {
                        name: "Aarav",
                        text: "❤️",
                        replies: [],
                      },
                      {
                        name: "Aarav",
                        text: "❤️",
                        replies: [
                          {
                            name: "Genius",
                            text: "Hello dear how r u?",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ankit",
    text: "My time has come.",
    replies: [],
  },
  {
    name: "Mehul",
    text: "Insane",
    replies: [],
  },
  {
    name: "Laddu",
    text: "This video gonna be fire 🔥🔥",
    replies: [],
  },
  {
    name: "Unknown",
    text: "I really love this video",
    replies: [
      {
        name: "Stranger",
        text: "How r u my friend?",
        replies: [],
      },
      {
        name: "Unknown",
        text: "Fine nd u?",
        replies: [],
      },
    ],
  },
  {
    name: "Zero",
    text: "🙈",
    replies: [],
  },
];

export const LIVE_CHAT_COUNT = 100;
export const COMMENT_DATA_URL =
  "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&textFormat=plainText&order=relevance&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY_COMMENT +
  "&videoId=";

export const REPLY_DATA_URL =
  "https://www.googleapis.com/youtube/v3/comments?part=snippet&textFormat=plainText&moderationStatus=heldForReview&maxResults=10&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY_COMMENT_REPLY +
  "&parentId=";

export const SEARCH_RESULT_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relevanceLanguage=hi&reasonCode=IN&type=video&maxResults=25&videoDuration=medium&key=" +
  process.env.REACT_APP_GOOGLE_API_KEY_COMMENT + "&q=";
