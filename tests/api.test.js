test('login API responds', async () => {
  const res = await fetch('http://localhost:8000/API/Login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login: 'test', password: 'test' })
  });

  expect(res.status).toBe(200);

  const text = await res.text();
  expect(text.length).toBeGreaterThan(0);
});