<!-- js/blogLoader.js -->
function loadBlog(jsonPath) {
  fetch(jsonPath)
    .then(response => response.json())
    .then(articles => {
      const container = document.getElementById('blog-container');
      articles.forEach(article => {
        const section = document.createElement('div');
        section.className = 'article-card';
        section.innerHTML = `
          ${article.image ? `<img src="${article.image}" class="article-img">` : ''}
          <h2>${article.title}</h2>
          <p class="date">${article.date} ｜ ${article.category}</p>
          <p>${article.content}</p>
        `;
        container.appendChild(section);
      });
    })
    .catch(error => {
      console.error('記事の読み込みに失敗しました', error);
    });
}
