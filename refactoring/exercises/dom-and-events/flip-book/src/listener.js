import { reverseAndUpperHandler } from './handler.js';

export const listenerEvent= () => {
    document.getElementById('input').addEventListener('keyup', reverseAndUpperHandler);
};
