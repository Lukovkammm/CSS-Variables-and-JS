const settings = document.querySelector('.settings');
const inputs = settings.querySelectorAll('input');

function handlerSettings() {
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handlerSettings));
inputs.forEach(input => input.addEventListener('mousemove', handlerSettings));

