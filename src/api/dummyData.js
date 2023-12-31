export const USERS = [
  { username: "amyrobson" },
  { username: "juliusomo" },
  { username: "maxblagun" },
  { username: "ramsesmiron" },
];

export const INITIAL_COMMENTS = [
  {
    id: 1,
    content:
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "2023-06-30T01:01:01.000Z",
    username: "amyrobson",
    replyToCommentId: null,
    replyToUsername: null,
    votes: [
      { username: "juliusomo", value: 1 },
      { username: "maxblagun", value: 1 },
      { username: "ramsesmiron", value: 1 },
    ],
  },
  {
    id: 2,
    content:
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    createdAt: "2023-06-30T01:01:01.000Z",
    username: "maxblagun",
    replyToCommentId: null,
    replyToUsername: null,
    votes: [
      { username: "amyrobson", value: 1 },
      { username: "juliusomo", value: 1 },
      { username: "ramsesmiron", value: 1 },
    ],
  },
  {
    id: 3,
    content:
      "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
    createdAt: "2023-06-30T01:01:01.000Z",
    username: "ramsesmiron",
    replyToCommentId: 2,
    replyToUsername: "maxblagun",
    votes: [
      { username: "amyrobson", value: 1 },
      { username: "juliusomo", value: 1 },
      { username: "maxblagun", value: 1 },
    ],
  },
  {
    id: 4,
    content:
      "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
    createdAt: "2023-06-30T01:01:01.000Z",
    username: "juliusomo",
    replyToCommentId: 2,
    replyToUsername: "maxblagun",
    votes: [
      { username: "amyrobson", value: 1 },
      { username: "maxblagun", value: 1 },
      { username: "ramsesmiron", value: 1 },
    ],
  },
];
