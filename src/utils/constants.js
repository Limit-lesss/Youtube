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

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

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
