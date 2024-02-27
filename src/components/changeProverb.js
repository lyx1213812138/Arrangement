import { watch } from 'vue';
import proverbStr from '../assets/proverb.txt?raw';

export default async function f(nowProverb, footerStyle) {
  console.log(proverbStr);
  const proverbs = proverbStr.split(/\r?\n/).filter(val => val);
  // .filter(val => val) 删除空白行
  const randomNum = Math.floor(Math.random() * proverbs.length);
  nowProverb.value = proverbs[randomNum];

  watch(nowProverb, newValue => {
    const fontSize = 38 * 30 / newValue.length;
    if (fontSize < 30) footerStyle.value = `font-size: ${fontSize}px; line-height: 37px`;
    // console.log(footerStyle.value);
  })
};



