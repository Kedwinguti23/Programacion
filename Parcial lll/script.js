const button = document.getElementById('loadData');
const userList = document.getElementById('userList');

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json(); 
        })

        .then(users => {
            userList.innerHTML = '';
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
});
           