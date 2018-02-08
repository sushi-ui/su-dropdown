export default (defaults, options, ctx) => {
  const populated = Object.assign(defaults, options);

  for (const key in populated) {
    if (populated.hasOwnProperty(key)) ctx[key] = populated[key];
  }
};
