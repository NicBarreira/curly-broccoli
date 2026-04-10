document.querySelector('.btn-login').addEventListener('click', () => {
    const nome = document.querySelector('input[placeholder="enter your name"]').value;

    const genero = document.querySelector('input[name="gender"]:checked').value;

    localStorage.setItem('visitorName', nome);
    localStorage.setItem('visitorGender', genero);

    window.location.href = 'portifolio.html';
});