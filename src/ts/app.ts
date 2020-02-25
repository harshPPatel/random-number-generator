// eslint-disable-next-line
import NumberGenerator from './NumberGenerator';

const randomNumberElement: HTMLElement = document.querySelector('#random-number');
const lowerLimitElement: HTMLInputElement = document.querySelector('#lower-limit');
const upperLimitElement: HTMLInputElement = document.querySelector('#upper-limit');
const submitButtonElement: HTMLButtonElement = document.querySelector('#submit-button');

let generator: NumberGenerator = null;

function generateNumber(e: Event): void {
  // Preventing default behaviour
  e.preventDefault();

  // Config for Generator
  const config = {
    lowerLimit: +lowerLimitElement.value,
    upperLimit: +upperLimitElement.value,
  };

  // Returning from function if limit it too big
  if (config.upperLimit > 100000) { return; }

  try {
    // Creating instance of number generator
    generator = new NumberGenerator(config);
    // Updating random number with new random number
    randomNumberElement.textContent = generator.generate().toString();
  } catch {
    // Updating random number with error
    randomNumberElement.textContent = 'Error!';
  }
}

submitButtonElement.addEventListener('click', generateNumber);
