let quotes = [];

async function fetchQuotes() {
  try {
    const response = await fetch('data/shakespeare_insults.json');
    quotes = await response.json();
  } catch (error) {
    console.error('Error loading insults:', error);
    quotes = [
      'Thou pribbling ill-nurtured knave!',
      'Away, you three-inch fool!',
      'Thou art a boil, a plague sore!',
    ];
  }
}

async function initPage() {
  document.body.style.visibility = 'hidden';

  await fetchQuotes();

  showRandomQuote();
  document.body.style.visibility = 'visible';
}

function showRandomQuote() {
  if (quotes.length === 0) return;
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('shakespeare-burn').textContent = quotes[randomIndex];
}

document.querySelector('button').addEventListener('click', showRandomQuote);

window.addEventListener('DOMContentLoaded', initPage);
