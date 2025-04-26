const saveBtn = document.getElementById('saveBtn');
const fillBtn = document.getElementById('fillBtn');

// When you click Save Button
saveBtn.addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const about = document.getElementById('about').value;

  const userData = { name, email, phone, about };

  // Send data to server (Node.js server)
  fetch('http://localhost:3000/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message);
  })
  .catch(err => {
    console.error('Error:', err);
  });
});

// When you click Fill Form Button
fillBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: fillForm
    });
  });
});

// Function to fill form automatically
function fillForm() {
  fetch('http://localhost:3000/get-latest')
    .then(res => res.json())
    .then(user => {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        if (input.name.toLowerCase().includes('name')) {
          input.value = user.name;
        } else if (input.name.toLowerCase().includes('email')) {
          input.value = user.email;
        } else if (input.name.toLowerCase().includes('phone') || input.name.toLowerCase().includes('mobile')) {
          input.value = user.phone;
        } else {
          input.value = user.about;
        }
      });
    })
    .catch(err => console.error('Error:', err));
}
