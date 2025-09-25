export class Price {
  readonly MINIMUM_PRICE = 0;
  readonly MAXIMUM_PRICE = 30000;

  constructor(public readonly value: number) {
    if (!Number.isInteger(value)) throw new Error("価格が不正です");
    if (value < this.MINIMUM_PRICE) throw new Error("価格が不正です");
    if (value > this.MAXIMUM_PRICE) throw new Error("価格が不正です");
  }
}
