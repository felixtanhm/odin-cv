const utils = (() => {
  function capitalise(word) {
    const firstLetter = word[0].toUpperCase();
    return firstLetter + word.substring(1);
  }

  return { capitalise };
})();

export default utils;
