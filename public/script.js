const terminal = document.getElementById('terminal');
const input = document.getElementById('command');

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        terminal.innerHTML += `\n> ${input.value}`;
        input.value = '';

        if (cmd === 'serverdata') {
            terminal.innerHTML += `\n booting to serverdata...`;
            window.location.href = '/serverdata.json';
        } else {
            terminal.innerHTML += `\nCommand not found: ${cmd}`;
        }

        // Scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
    }
});
