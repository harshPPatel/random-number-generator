// eslint-disable-next-line
import NumberGenerator from '../src/ts/NumberGenerator';

test('invalid lower limit', () => {
  const config = {
    lowerLimit: 12,
    upperLimit: 1,
  };
  // eslint-disable-next-line
  let generator = null;

  function createGenerator() {
    generator = new NumberGenerator(config);
  }

  expect(createGenerator).toThrowError(/^Lower limit can not be higher or equal to upper limit$/);
});

test('valid random integer', () => {
  const config = {
    lowerLimit: 3,
    upperLimit: 11,
  };
  const generator: NumberGenerator = new NumberGenerator(config);
  const randomNumber: number = generator.generate();

  expect(randomNumber).toBeGreaterThanOrEqual(config.lowerLimit);
  expect(randomNumber).toBeLessThanOrEqual(config.upperLimit);
});
