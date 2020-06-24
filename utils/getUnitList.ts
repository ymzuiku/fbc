export default (n: string, v:string) => {
  return [
    [`.${n}-0`, `${v}: 0;`],
    [`.${n}-px`, `${v}: var(--pt-px);`],
    [`.${n}-none`, `${v}: var(--pt-none);`],
    [`.${n}-auto`, `${v}: var(--pt-auto);`],
    [`.${n}-xs`, `${v}: var(--pt-xs);`],
    [`.${n}-sm`, `${v}: var(--pt-sm);`],
    [`.${n}-md`, `${v}: var(--pt-md);`],
    [`.${n}-lg`, `${v}: var(--pt-lg);`],
    [`.${n}-xl`, `${v}: var(--pt-xl);`],
    [`.${n}-2xl`, `${v}: var(--pt-2xl);`],
    [`.${n}-3xl`, `${v}: var(--pt-3xl);`],
    [`.${n}-4xl`, `${v}: var(--pt-4xl);`],
    [`.${n}-5xl`, `${v}: var(--pt-5xl);`],
    [`.${n}-6xl`, `${v}: var(--pt-6xl);`],
    [`.${n}-vw`, `${v}: var(--vw);`],
    [`.${n}-vh`, `${v}: var(--vh);`],
    [`.${n}-screen-xs`, `${v}: var(--screen-xs);`],
    [`.${n}-screen-sm`, `${v}: var(--screen-sm);`],
    [`.${n}-screen-md`, `${v}: var(--screen-md);`],
    [`.${n}-screen-lg`, `${v}: var(--screen-lg);`],
    [`.${n}-screen-xl`, `${v}: var(--screen-xl);`],
    [`.${n}-0/12`, `${v}: 0%;`],
    [`.${n}-1/12`, `${v}: 8.333333%;`],
    [`.${n}-2/12`, `${v}: 16.666667%;`],
    [`.${n}-3/12`, `${v}: 25%;`],
    [`.${n}-4/12`, `${v}: 33.333333%;`],
    [`.${n}-5/12`, `${v}: 41.666667%;`],
    [`.${n}-6/12`, `${v}: 50%;`],
    [`.${n}-7/12`, `${v}: 58.333333%;`],
    [`.${n}-8/12`, `${v}: 66.666667%;`],
    [`.${n}-9/12`, `${v}: 75%;`],
    [`.${n}-10/12`, `${v}: 83.333333%;`],
    [`.${n}-11/12`, `${v}: 91.666667%;`],
    [`.${n}-12/12`, `${v}: 100%;`],
  ];
};

export const getUnitLiList = (n: string, v:string) => {
  return [
    [`.${n}-0`, `${v}: 0;`],
    [`.${n}-px`, `${v}: var(--pt-px);`],
    [`.${n}-none`, `${v}: var(--pt-none);`],
    [`.${n}-auto`, `${v}: var(--pt-auto);`],
    [`.${n}-xs`, `${v}: var(--pt-xs);`],
    [`.${n}-sm`, `${v}: var(--pt-sm);`],
    [`.${n}-md`, `${v}: var(--pt-md);`],
    [`.${n}-lg`, `${v}: var(--pt-lg);`],
    [`.${n}-xl`, `${v}: var(--pt-xl);`],
    [`.${n}-2xl`, `${v}: var(--pt-2xl);`],
    [`.${n}-3xl`, `${v}: var(--pt-3xl);`],
    [`.${n}-4xl`, `${v}: var(--pt-4xl);`],
    [`.${n}-5xl`, `${v}: var(--pt-5xl);`],
    [`.${n}-6xl`, `${v}: var(--pt-6xl);`],
  ];
};
