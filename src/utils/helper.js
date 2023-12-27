const nameList = [
  "Aditi Sharma",
  "Aarav Patel",
  "Ananya Singh",
  "Arjun Kumar",
  "Ayesha Verma",
  "Aryan Gupta",
  "Bhavya Reddy",
  "Dev Khanna",
  "Dia Joshi",
  "Esha Malhotra",
  "Gaurav Mehta",
  "Gitanjali Desai",
  "Harsh Chawla",
  "Ishika Suri",
  "Jai Kapoor",
  "Kavya Trivedi",
  "Kunal Sharma",
  "Lavanya Menon",
  "Manish Singh",
  "Mira Shah",
  "Nikhil Verma",
  "Neha Kapoor",
  "Omkar Patel",
  "Oishi Banerjee",
  "Pranav Kumar",
  "Pooja Gupta",
  "Rahul Sharma",
  "Riya Chatterjee",
  "Rajeev Mehta",
  "Sanya Mehra",
  "Shashank Singh",
  "Swara Iyer",
  "Shivansh Gupta",
  "Tanvi Malik",
  "Tarun Reddy",
  "Uma Sharma",
  "Utkarsh Joshi",
  "Vanya Kapoor",
  "Varun Agarwal",
  "Vidya Nair",
  "Vikrant Singh",
  "Yash Rajput",
  "Yamini Patel",
  "Zoya Khan",
  "Zain Sheikh",
  "Amitabh Verma",
  "Anjali Yadav",
  "Arnav Deshmukh",
  "Asha Khurana",
  "Avinash Patel",
  "Bhavna Jain",
  "Chirag Mehta",
  "Divya Singh",
  "Dhruv Kumar",
  "Eesha Gupta",
  "Farhan Khan",
  "Fatima Sheikh",
  "Girish Iyer",
  "Gunjan Kapoor",
  "Himanshu Sharma",
  "Ishani Shah",
  "Jatin Verma",
  "Jyoti Trivedi",
  "Kabir Agarwal",
  "Kanika Nair",
  "Kartik Reddy",
  "Lalita Mehta",
  "Manoj Singh",
  "Meera Suri",
  "Naman Chatterjee",
  "Nehal Desai",
  "Nidhi Mehra",
  "Om Prakash",
  "Preeti Patel",
  "Prateek Sharma",
  "Radha Menon",
  "Rahul Kapoor",
  "Rashmi Malik",
  "Samir Khanna",
  "Sanya Mehrotra",
  "Tara Yadav",
  "Uday Kumar",
  "Urvashi Singh",
  "Veer Sharma",
  "Vidushi Gupta",
  "Vivek Verma",
  "Yashika Mehta",
  "Zara Khan",
];
export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const randomComments = [
  "This video blew my mind!",
  "Who else is watching in 2023?",
  "I can't stop replaying this!",
  "This deserves more views.",
  "I wish I could like this twice.",
  "Is this real life or CGI?",
  "10/10 would recommend.",
  "I've never seen anything like this before.",
  "This made my day!",
  "Bravo! 👏",
  "I'm subscribing right now.",
  "This is the content I signed up for.",
  "Take my like and my heart.",
  "Speechless...",
  "I need more of this in my life.",
  "Just when I thought I've seen it all.",
  "My cat even stopped to watch this.",
  "This should be trending!",
  "Mind = Blown.",
  "I'm in awe.",
  "This deserves an award.",
  "I didn't know I needed this until now.",
  "This is why the internet was invented.",
  "I'm sending this to everyone I know.",
  "Can't believe I stumbled upon this masterpiece.",
  "This is better than Netflix.",
  "I want this as my ringtone.",
  "I've watched this 100 times and it never gets old.",
  "I've never hit the like button so fast.",
  "This is internet gold.",
  "Someone give the creator a cookie.",
  "This needs to go viral.",
  "Why isn't this trending?",
  "My new favorite thing on the internet.",
  "I showed this to my grandma, and she loved it!",
  "This is a work of art.",
  "I've found my happy place.",
  "I can't stop smiling.",
  "This cured my boredom.",
  "I didn't expect to be so entertained.",
  "I wish I could give this a million likes.",
  "This is better than a cup of coffee in the morning.",
  "I'm adding this to my playlist.",
  "This deserves to break the internet.",
  "This should be on the front page of YouTube.",
  "I'm telling my future kids about this.",
  "I'm officially a fan.",
  "This is internet perfection.",
  "I need a sequel ASAP.",
  "How is this not a viral sensation yet?",
  "This is the content we all need right now.",
  "My life is complete after watching this.",
  "This is what dreams are made of.",
  "I've never been so entertained in my life.",
  "Can we get a round of applause for the creator?",
  "I want to frame this and put it on my wall.",
  "I've never hit 'Subscribe' so fast in my life.",
  "This is the definition of epic.",
  "I've watched a lot of videos, but this is something else.",
  "I'm convinced this is magic.",
  "This is pure genius.",
  "This video deserves to be studied in film school.",
  "I didn't know I needed this until now.",
  "I can't believe this is free on the internet.",
  "This is better than cable TV.",
  "I need to bookmark this for bad days.",
  "This is my new happy place.",
  "I want to live in this video.",
  "I'm running out of ways to express how much I love this.",
  "I need to show this to my future self.",
  "This is the cure for boredom.",
  "This should be on everyone's bucket list.",
  "I've never seen anything more relatable.",
  "I want to frame this and put it on my wall.",
  "I can't stop thinking about this.",
  "This video is a masterpiece.",
  "I've never been so emotionally invested in a video before.",
  "I would pay to watch this.",
  "I need a moment to process how amazing this is.",
  "This is better than a blockbuster movie.",
  "I'm convinced this is the eighth wonder of the internet.",
  "I've never clicked on anything so fast in my life.",
  "This is the definition of entertainment.",
  "I can't believe this exists, and I'm grateful it does.",
  "This video is a national treasure.",
  "I want to meet the creator and shake their hand.",
  "I've never felt so alive watching a video.",
  "This video should be shown in schools.",
  "I'm speechless. And that's saying something.",
  "I didn't know joy until I watched this.",
  "This video is my spirit animal.",
  "I want to frame this and put it on my wall.",
  "I need a sequel, a prequel, and a spin-off.",
  "I would watch a 24/7 livestream of this.",
  "This is the kind of content the world needs right now.",
  "I've never seen anything more perfect.",
  "This video should be in a museum.",
  "I'm going to watch this every day for the rest of my life.",
];

export const generateRandomMessage = () => {
  return randomComments[Math.floor(Math.random() * randomComments.length)];
};

export const duration = (contentDetails) => {
  let duration = contentDetails;
  duration = duration.replace("PT", "");
  let H = duration.slice(
    0,
    duration.indexOf("H") === -1 ? 0 : duration?.indexOf("H")
  );
  let M = duration.slice(
    duration.indexOf("H") + 1,
    duration.indexOf("M") === -1 ? 0 : duration.indexOf("M")
  );
  let S = duration.slice(duration.indexOf("M") + 1, duration.indexOf("S"));
  if (M.length === 1) {
    M = "0" + M;
  }
  if (S.length === 1) {
    S = "0" + S;
  }
  if (S.length === 0) {
    S = "00" + S;
  }
  if (M.length === 0) {
    M = "00" + M;
  }
  return H ? H + ":" + M + ":" + S : M + ":" + S;
};

export const views = (count) => {
  const viewCount = count;
  let views;
  if (viewCount?.length > 7) {
    views = Math.round(parseInt(viewCount) / 1000000);
    return (views += "M");
  } else if (viewCount?.length > 6) {
    views = (parseInt(viewCount) / 1000000).toFixed(1);
    return (views += "M");
  } else if (viewCount?.length > 3) {
    views = (parseInt(viewCount) / 1000).toFixed(1);
    return (views += "K");
  } else {
    return count;
  }
};

export const findTimeDiff = (date) => {
  const startTime = new Date(date);
  const endTime = new Date();

  const timeDifference = endTime - startTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks === 0) {
    if (days === 0)
      return hours === 1 ? hours + " hour ago " : hours + " hours ago";
    else if (hours === 0) {
      return minutes === 1 ? minutes + " minute ago" : minutes + " minutes ago";
    } else if (minutes === 0) {
      return seconds === 1 ? seconds + " second ago" : seconds + " seconds ago";
    } else {
      return days === 1 ? days + " day ago " : days + " days ago";
    }
  } else {
    return weeks === 1 ? weeks + " week ago " : weeks + " weeks ago";
  }
};

export const subscribers = (count) => {
  let subs;
  if (count?.length > 6) {
    subs = parseInt(count) / 1000000;
    return (subs = subs.toFixed(2) + "M");
  } else if (count?.length === 6) {
    subs = parseInt(count) / 1000;
    return (subs = subs + "K");
  } else if (count?.length > 3) {
    subs = parseInt(count) / 1000;
    return (subs = subs.toFixed(2) + "K");
  } else return count;
};

export const likes = (count) => {
  let subs;
  if (count > 1000000) {
    subs = count / 1000000;
    return (subs = subs.toFixed(2) + "M");
  } else if (count > 1000) {
    subs = count / 1000;
    return (subs = subs.toFixed(2) + "K");
  } else return count;
};
