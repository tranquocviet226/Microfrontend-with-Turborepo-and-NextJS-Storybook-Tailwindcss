const sharedConfig = require('tailwind-config/tailwind.config.js')

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  ...sharedConfig,
}
