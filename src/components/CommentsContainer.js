import React from 'react'
const commentsData = [
  {
    name: "Emma Johnson",
    text: "This video is amazing! I learned so much.",
    replies: [],
  },
  {
    name: "Liam Smith",
    text: "I totally agree! The tips were really helpful.",
    replies: [
      {
        name: "Olivia Brown",
        text: "Right? I especially loved the part about time management.",
        replies: [],
      },
      {
        name: "Noah Davis",
        text: "Could you elaborate on that?",
        replies: [
          {
            name: "Liam Smith",
            text: "Sure! It helped me organize my tasks better.",
            replies: [
              {
                name: "Emma Johnson",
                text: "That’s a great approach! I need to try that.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ava Wilson",
    text: "I didn’t expect that twist at the end!",
    replies: [],
  },
  {
    name: "Oliver Martinez",
    text: "The editing in this video is top-notch!",
    replies: [],
  },
  {
    name: "Sophia Anderson",
    text: "Can you do a part 2? I want to see more!",
    replies: [],
  },
  {
    name: "Mason Thompson",
    text: "I love how you explain things so clearly.",
    replies: [
      {
        name: "Isabella Garcia",
        text: "Agreed! It makes it so easy to understand.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};


export default CommentsContainer