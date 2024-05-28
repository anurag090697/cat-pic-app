const elem = React.createElement(
  "h1",
  { style: { color: "green" } },
  "Topics Covered"
);

const firstDiv = React.createElement(
  "div",
  { className: "first-div" },
  React.createElement(
    "p",

    null,
    "This is the first project I've created with React."
  )
);

const secondDiv = React.createElement(
  "div",
  { className: "second-div" },
  React.createElement(
    "p",
    null,
    "This page is created",
    React.createElement(
      "a",

      {
        className: "anchT",
        href: "https://www.youtube.com/watch?v=xPPUOXg5_1A",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      "Click here to view something good"
    ),
    " using CDN link"
  )
);

const thirdDiv = React.createElement(
  "div",
  { className: "third-div" },
  React.createElement("p", null, "This is the layout required for this project")
);

const container = React.createElement(
  "div",
  { className: "container" },
  elem,
  firstDiv,
  secondDiv,
  thirdDiv
);

ReactDOM.render(container, document.getElementById("root"));
