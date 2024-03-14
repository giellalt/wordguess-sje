import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'á',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  'å',
  'ŋ',

  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  'ö',
  'ä',

  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
