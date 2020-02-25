/**
 * Represents the input parameters for NumberGenerator Class
 * @interface ClassInput
 */
interface ClassInput {
  /**
   * Represents the upper limit for class
   * @type {number} upper limit
   * @memberof ClassInput
   */
  upperLimit: number,
  /**
   * Represents the lower limit for class
   * @type {number} lower limit
   * @memberof ClassInput
   */
  lowerLimit: number,
}

/**
 * Represents random number generator
 */
export default class NumberGenerator {
  /**
   * Represents the number limit for class
   * @type {number} number limit
   * @memberof NumberGenerator
   */
  lowerLimit: number;

  /**
   * Represents the upper limit for class
   * @type {number} upper limit
   * @memberof randomNumber
   */
  upperLimit: number;

  /**
   * Constructs new instance of NumberGenerator
   * @param {ClassInput} params configuration object for Number Generator instance
   * @memberof NumberGenerator
   */
  constructor(params: ClassInput) {
    if (params.lowerLimit >= params.upperLimit) {
      throw new Error('Lower limit can not be higher or equal to upper limit');
    }
    this.lowerLimit = params.lowerLimit;
    this.upperLimit = params.upperLimit;
  }

  /**
   * Generated new random number between provided limits
   * @returns {number} Random number between provided limits
   * @memberof NumberGenerator
   */
  generate(): number {
    const randomNumber: number = Math.floor(Math.random() * this.upperLimit) + this.lowerLimit;
    return randomNumber;
  }
}
