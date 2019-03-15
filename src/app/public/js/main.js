fetch('http://localhost:3000')
  .then(res => {
    const isSuccess = res.status === 200;

    document.body.style.background =
      isSuccess
        ? '#4A4'
        : '#A44';

    document.querySelector("h1").textContent =
      isSuccess
        ? `Success`
        : `Fail`;
  })
  .catch(err => console.log(err));