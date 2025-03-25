function loadBlog(jsonPath) {
    fetch(jsonPath)
      .then(response => response.json())
      .then(articles => {
        const container = document.getElementById('blog-container');
        articles.forEach(article => {
          const section = document.createElement('section');
          section.innerHTML = `
            <h2>${article.title}</h2>
            <p><strong>${article.date}</strong>｜<em>${article.category}</em></p>
            <p>${article.content}</p>
            <hr>
          `;
          container.appendChild(section);
        });
      })
      .catch(error => {
        console.error('記事の読み込みに失敗しました', error);
      });
  }
  