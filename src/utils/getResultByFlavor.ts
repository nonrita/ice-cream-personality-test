import { iceCreamData } from '../data/flavorResult';

export const getResultByFlavor = (flavor: string) => {
  return (
    iceCreamData[flavor] ?? {
      label: '不明',
      description: '該当する性格が見つかりませんでした。',
    }
  );
};
