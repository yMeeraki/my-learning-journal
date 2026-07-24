const blogPostCards = [
  {
    id: 1,
    date: "JULY 20, 2026",
    title: "Learning HTML Fundamentals",
    description:
      "HTML is the foundation of every website. Understanding semantic elements and page structure has made building websites much more organized and accessible.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    alt: "Laptop displaying HTML code",
    ariaLabel: "Read the article Learning HTML Fundamentals",
    link: "post1.html",
  },
  {
    id: 2,
    date: "JULY 17, 2026",
    title: "Exploring CSS Layouts",
    description:
      "Learning Flexbox and Grid has completely changed the way I create responsive layouts.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
    alt: "Developer working on website layout",
    ariaLabel: "Read the article Exploring CSS Layouts",
    link: "post2.html",
  },
  {
    id: 3,
    date: "JULY 14, 2026",
    title: "My First JavaScript Project",
    description:
      "JavaScript transformed my static web pages into interactive experiences.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    alt: "JavaScript code on a computer screen",
    ariaLabel: "Read the article My First JavaScript Project",
    link: "post3.html",
  },
  {
    id: 4,
    date: "JULY 10, 2026",
    title: "Understanding Responsive Design",
    description:
      "Designing websites that look great on desktops, tablets, and phones has become an essential skill.",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    alt: "Responsive web design workspace",
    ariaLabel: "Read the article Understanding Responsive Design",
    link: "post4.html",
  },
  {
    id: 5,
    date: "JULY 6, 2026",
    title: "Building Better Projects",
    description:
      "Instead of only following tutorials, I started creating projects on my own.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    alt: "Developer coding on a laptop",
    ariaLabel: "Read the article Building Better Projects",
    link: "post5.html",
  },
  {
    id: 6,
    date: "JULY 2, 2026",
    title: "Why Consistency Matters",
    description:
      "Learning a little every day has helped me improve more than trying to learn everything at once.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    alt: "Notebook and laptop on a study desk",
    ariaLabel: "Read the article Why Consistency Matters",
    link: "post6.html",
  },
];

function blogPostsDOM() {
  document.querySelector("main").innerHTML = blogPostCards.map((postCard) => {
    return `      <a
        href="./pages/${postCard.link}"
        aria-label="${postCard.ariaLabel}"
      >
        <article class="card">
          <img
            src="${postCard.image}"
            alt="${postCard.alt}"
          />
          <h5>${postCard.date}</h5>
          <h3>${postCard.title}</h3>
          <p>
            ${postCard.description}
          </p>
        </article>
      </a>`;
  }).join("");
}
blogPostsDOM();
