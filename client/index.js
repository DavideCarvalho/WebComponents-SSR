(async () => {
  const dataStream = await fetch('http://localhost:3000/hello');
  const data = await dataStream.text();
  console.log(data);
  document.body.innerHTML += data;
})();
