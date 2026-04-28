const fetch = require('node-fetch');

test('login API returns valid response', async () => {
  const response = await fetch('http://localhost/API/Login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: 'test',
      password: 'test'
    })
  });

  const data = await response.json();

  expect(response.status).toBe(200);
  expect(data).toHaveProperty('error');
});
