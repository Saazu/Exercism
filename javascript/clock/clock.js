//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import { stringifyNumber } from './clock_helper';

export class Clock {
  constructor(hour, minute = 0) {
    const _date = new Date(0, 0, 0, hour, minute, 0, 0, 0)

    this.hour = _date.getHours();
    this.minutes = _date.getMinutes();
  }

  toString() {
    return `${stringifyNumber(this.hour)}:${stringifyNumber(this.minutes)}`;
  }

  plus(mins) {
    return new Clock(this.hour, (this.minutes + mins))
  }

  minus(mins) {
    return new Clock(this.hour, (this.minutes - mins))
  }

  equals(otherClock) {
    return this.toString() === otherClock.toString();
  }
}