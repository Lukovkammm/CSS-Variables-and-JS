const settings = document.querySelector('.settings');
const inputs = settings.querySelectorAll('input');
const reset = settings.querySelector('.reset');

function handlerSettings() {
    let suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

function resetAll() {
    document.documentElement.removeAttribute('style');
}

inputs.forEach(input => input.addEventListener('change', handlerSettings));
inputs.forEach(input => input.addEventListener('mousemove', handlerSettings));
reset.addEventListener('click', resetAll);
