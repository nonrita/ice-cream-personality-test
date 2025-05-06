import type { IceCreamProfile } from '../types/iceCream';

export const iceCreamData: Record<string, IceCreamProfile> = {
  vanilla: {
    label: 'バニラ',
    description: 'あなたはシンプルで誠実な性格です。',
  },
  chocolate: {
    label: 'チョコレート',
    description: 'あなたは情熱的でエネルギッシュな性格です。',
  },
  strawberry: {
    label: 'ストロベリー',
    description: 'あなたは優しく、思いやりのある性格です。',
  },
  matcha: {
    label: '抹茶',
    description: 'あなたは落ち着いていて、知的な性格です。',
  },
};
