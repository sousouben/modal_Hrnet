/**
 * Configuration de Babel pour transpiler le code.
 * @param {object} api - L'objet API fourni par Babel.
 * @returns {object} La configuration de Babel.
 */
module.exports = function (api) {
  // Active le cache pour améliorer les performances
  api.cache(true);

  // Présélections de Babel
  const presets = ["@babel/preset-env", "@babel/preset-react"];
  // Plugins de Babel
  const plugins = ["macros"];
  // Retourne la configuration de Babel
  return {
    presets,
    plugins,
  };
};
