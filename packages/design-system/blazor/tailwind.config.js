const presetModule = require('@pacer-ui/tailwind-preset');
const preset = presetModule.default || presetModule;

module.exports = {
  presets: [preset],
  content: [
    './Components/**/*.{razor,html,cs}',
    './**/*.razor',
  ],
  safelist: [
    // Explicit badge colors that are broken
    'bg-slate-900', 'bg-slate-100', 'text-slate-900', 'text-slate-50',
    'bg-yellow-500', 'text-yellow-500', 
    'bg-green-600', 'bg-green-50', 'text-green-600',
    'bg-purple-600', 'text-purple-600',
    'bg-pink-600', 'text-pink-600',
    'bg-orange-600', 'text-orange-600',
    'rounded-full', 'rounded-md', 'rounded-lg',
    'px-2.5', 'py-0.5', 'px-2', 'py-1',
    // All color names used by components (Tailwind palette + semantic)
    {
      pattern:
        /^(bg|text|border)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|brand|error|success|warning|info)-(50|100|200|300|400|500|600|700|800|900)$/,
    },
    // Spacing utilities
    {
      pattern:
        /^(p|px|py|pt|pr|pb|pl|m|mx|my|mt|mr|mb|ml)-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|8|10|12|16|20|24)$/,
    },
    // All border radius options (including rounded-full)
    {
      pattern: /^rounded(-none|-sm|-md|-lg|-xl|-2xl|-3xl|-full)?$/,
    },
    // Typography
    {
      pattern: /^(text-(xs|sm|base|lg|xl|2xl)|font-(normal|medium|semibold|bold))$/,
    },
    // Sizing
    {
      pattern: /^(w|h|min-w|min-h|max-w|max-h)-.+$/,
    },
    // Layout helpers
    {
      pattern: /^(flex|inline-flex|grid|block|inline-block|hidden)$/,
    },
    {
      pattern: /^(items|justify|content|place-items|place-content)-(start|end|center|between|around|evenly)$/,
    },
    {
      pattern: /^gap-(0|0\.5|1|1\.5|2|2\.5|3|3\.5|4|5|6|8|10)$/,
    },
    // Shadows & rings
    {
      pattern:
        /^(shadow|shadow-(sm|md|lg|xl|2xl)|ring|ring-(1|2|4)|ring-(brand|error|success|warning|red|blue|green|yellow)-(300|400|500))$/,
    },
  ],
};
