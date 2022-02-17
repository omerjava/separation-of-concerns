/**
 *
 */
export const typeCaster = (x, userInput) => {
    let newValue;
    if (x === 'string') {
      newValue = String(userInput);
    } else if (x === 'number') {
      newValue = Number(userInput);
    } else if (x === 'boolean') {
      newValue = Boolean(userInput);
    } else {
      newValue = undefined;
    }
    return newValue;
};
