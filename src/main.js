import './style.css';
const API = 'https://translate.iswebdev.ru';
const output = document.getElementById('output');
const input = document.getElementById('input');

input.addEventListener('input', async e => {
  const res = await fetch(`${API}/translate`, {
    method: 'POST',
    body: JSON.stringify({
      q: e.currentTarget.value,
      source: 'ru',
      target: 'en',
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  const data = await res.json();
  output.innerText = data.translatedText;
});
