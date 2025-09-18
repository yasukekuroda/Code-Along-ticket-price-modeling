# ticket-price-modeling

## お題

https://cinemacity.co.jp/ticket/

この料金表に基づいて映画料金を決定するドメインモデルを作る。
料金表は 2022/11/12 時点のものを参照した。

## 考慮しないもの

- 同伴者
- ※特別興行の場合は上記の限りではございません。
- ※【極上爆音上映】はレイトショー割適用外です。
- ※パーク 80 の割引は終了しました。すでに券をお持ちの方は有効期限までお使いいただけます。

## 本質的な部分

### 宣言的なプラン利用条件と料金

プランごとに class を作り、「顧客属性からプラン利用可否を判断するメソッド」と「日時から料金を計算するメソッド」を持たせる設計とした。
プランごとの class を見るだけで、そのプランの利用条件と料金を把握できるようになっている。

```TypeScript
// src/domain/plan/cinemaCitizenPlan.ts
export const CinemaCitizenPlan: Plan = class {
  static readonly MAXIMUM_AGE = 59;

  static planName(): string {
    return "シネマシティズン";
  }

  static isAvailable(cunstomer: Customer): boolean {
    if (cunstomer.age.value > this.MAXIMUM_AGE) return false;
    if (cunstomer.cinemaCitizenCategory !== CINEMA_CITIZEN_CATEGORY.Member)
      return false;

    return true;
  }

  static price(date: CinemaDate): Price {
    if (date.isWeekDay()) return new Price(1000);
    if (date.isLateShow()) return new Price(1000);
    if (date.isCinemaDay()) return new Price(1200);

    return new Price(1300);
  }
};

```

### 直感的に理解しやすい料金判定ロジック

料金判定ロジックでは、「顧客属性から利用可能なプラン一覧を取得する」「利用可能なプランのうち、現在日時から最も価格が安くなるプランを取得する」という二段階に分けて処理を実行している。
実際に人間が料金計算する際の思考に近いロジックとした。

```TypeScript
// src/domain/bestPlanCalculator.ts
export class BestPlanCalculator {
  static calculate(cunstomer: Customer, date: CinemaDate): Plan {
    const availablePlans = allPlans.availablePlans(cunstomer);
    if (availablePlans.count() === 0)
      throw new Error("利用できるプランがありません");

    return availablePlans.bestPricePlan(date);
  }
}
```

## Prerequisites

Node.js

## Getting Started

```bash
$ git clone git@github.com:yutakuroda/ticket-price-modeling.git
$ cd ticket-price-modeling
$ npm i
```

## Usage

現在日時を元に最適なプランを選択して表示する

```bash
$ npx ts-node src/index.ts
```

テストを実行する

```bash
$ npm test
```

フォーマットする

```bash
$ npm run format
```

## 注意点

- 祝日には対応していない
- テストケースは網羅的ではない
- 複数のプランで同一料金になる場合にどちらのプランが選択されるかは考慮していない
- 小学生以下で障がい者手帳を持つ場合の判定ができていない
題