const thisYear = new Date().getFullYear();
const startTimeOfThisYear = new Date(
  `${thisYear}-01-01T00:00:00+00:00`
).getTime();
const endTimeOfThisYear = new Date(
  `${thisYear}-12-31T23:59:59+00:00`
).getTime();
const progressOfThisYear =
  (Date.now() - startTimeOfThisYear) /
  (endTimeOfThisYear - startTimeOfThisYear);
const progressBarOfThisYear = generateProgressBar();

function generateProgressBar() {
  const progressBarCapacity = 30;
  const passedProgressBarIndex = parseInt(
    progressOfThisYear * progressBarCapacity
  );
  const progressBar =
    "█".repeat(passedProgressBarIndex) +
    "▁".repeat(progressBarCapacity - passedProgressBarIndex);
  return `{ ${progressBar} }`;
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(
  2
)} %

---

⏰ Updated on ${new Date().toUTCString()}

---
### My GitHub Contributions    

![](https://raw.githubusercontent.com/MasonEast/MasonEast/main/assets/github-contribution-grid-snake.svg)          

### About me      

[![Mason's GitHub stats](https://github-readme-stats.vercel.app/api?username=MasonEast&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)
![Mason's Most used languages](https://github-readme-stats.vercel.app/api/top-langs/?username=MasonEast&layout=compact&hide_border=true&langs_count=10)

I'm mason, a man like the wind.

- 🔭 I’m currently working on manbang
- 🌱 I’m currently learning golang
- 💬 Ask me about ...
- 📫 How to reach me: 2224742726@qq.com
- 😄 hobby: chinese chess, fitness，game
- ⚡ Fun fact: ...
\
`;

console.log(readme);
