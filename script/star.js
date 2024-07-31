const style = ["style1", "style2", "style3"];
const opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity3"];
const twinkle = [
  "twinkle1",
  "twinkle1",
  "twinkle1",
  "twinkle2",
  "twinkle2",
  "twinkle3",
  "twinkle4",
];

const getRandomStars = (max) => Math.floor(Math.random() * max);

const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
  const wrapper = document.querySelector(".wrapper");

  const screenWidth = screen.width;
  const screenHeight = screen.height;

  const x = getRandomStars(screenWidth);
  const y = getRandomStars(screenHeight);

  const position = {
    left: `${x}px`,
    top: `${y}px`,
  };

  const s = getRandomStars(style.length);
  const o = getRandomStars(opacity.length);
  const t = getRandomStars(twinkle.length);

  const className = `star ${style[s]} ${opacity[o]} ${twinkle[t]}`;

  const span = document.createElement("span");
  Object.assign(span.style, position);
  span.className = className;

  wrapper.append(span);
}
