fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.map(d=>{
            const html = `
                <tr>
                    <td>${d.userId}</td>
                    <td>${d.id}</td>
                    <td>${d.title}</td>
                    <td>${d.body}</td>

                </tr>
            `;
            document.querySelector('tbody').insertAdjacentHTML('beforeend', html);

        });
    });