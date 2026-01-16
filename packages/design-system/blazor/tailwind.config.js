const presetModule = require('@pacer-ui/tailwind-preset');
const preset = presetModule.default || presetModule;

module.exports = {
    presets: [preset],
    content: [
        './Components/**/*.{razor,html,cs}',
        './**/*.razor',
    ],
};
