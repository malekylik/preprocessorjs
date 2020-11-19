import { isEndOfLine } from './utils/token-check';

console.log('LF', isEndOfLine('\n'.charCodeAt(0)));
console.log('CR', isEndOfLine('\r'.charCodeAt(0)));
