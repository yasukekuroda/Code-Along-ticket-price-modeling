export class CinemaDate extends Date {
  readonly MONDAY_OF_WEEK = 1;
  readonly FRIDAY_OF_WEEK = 5;
  readonly LATE_SHOW_HOUR = 20;
  readonly CINEMA_DAY_OF_MONTH = 1;

  isWeekday(): boolean {
    return (
      this.getDay() >= this.MONDAY_OF_WEEK &&
      this.getDay() <= this.FRIDAY_OF_WEEK
    );
  }

  isLateShow(): boolean {
    return this.getHours() >= this.LATE_SHOW_HOUR;
  }

  isCinemaDay(): boolean {
    return this.getDate() === this.CINEMA_DAY_OF_MONTH;
  }
}
