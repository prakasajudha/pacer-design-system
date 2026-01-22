import type { Meta, StoryObj } from '@storybook/vue3';
import { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent } from '@pacer-ui/vue';
import { ref, watch, h } from 'vue';

const meta = {
  title: 'Components/Tabs',
  component: PtTabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Tabs PACER sesuai Figma dengan compound components pattern.',
          '',
          'Components:',
          '- PtTabs: Container utama',
          '- PtTabsList: Container untuk tab triggers',
          '- PtTabsTrigger: Individual tab button',
          '- PtTabsContent: Content untuk setiap tab',
          '',
          'Props:',
          '- variant: "default" | "line" (default: "default")',
          '  - default: background abu-abu, selected dengan bg putih + shadow',
          '  - line: border bottom, selected dengan border biru tebal',
          '- stretch: boolean (default: false) - stretch container dan tab items untuk mengisi width',
          '',
          'Model:',
          '- v-model (modelValue): string | number - value dari tab yang aktif',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    modelValue: 'tab1',
    variant: 'default',
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'v-model: value dari tab yang aktif',
    },
    variant: {
      control: 'select',
      options: ['default', 'line'],
      description: 'Variant style: default (background) atau line (border bottom)',
    },
    tabs: {
      control: 'object',
      description: 'Array of objects untuk tabs: [{ value, label, content }]',
    },
  },
} satisfies Meta<typeof PtTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => ({
    components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
    setup() {
      const defaultTabs = [
        { value: 'tab1', label: 'Tab 1', content: 'This is the content for the first tab.' },
        { value: 'tab2', label: 'Tab 2', content: 'This is the content for the second tab.' },
        { value: 'tab3', label: 'Tab 3', content: 'This is the content for the third tab.' },
      ];
      const tabs = ref(args.tabs || defaultTabs);
      const activeTab = ref<string | number>(args.modelValue ?? tabs.value[0].value);
      
      // Sync with args changes from Storybook controls
      watch(
        () => args.modelValue,
        (v) => {
          if (v !== undefined) {
            activeTab.value = v;
          }
        },
        { immediate: true }
      );
      
      // Sync tabs array from args
      watch(
        () => args.tabs,
        (newTabs) => {
          if (newTabs && Array.isArray(newTabs) && newTabs.length > 0) {
            tabs.value = newTabs;
            // Ensure activeTab is valid
            if (!tabs.value.find(t => t.value === activeTab.value)) {
              activeTab.value = tabs.value[0].value;
            }
          }
        },
        { immediate: true, deep: true }
      );
      
      return { args, activeTab, tabs };
    },
    template: `
      <div class="w-[600px] space-y-4">
        <PtTabs v-bind="args" v-model="activeTab" @update:modelValue="(v) => { activeTab = v; args.modelValue = v; }">
          <PtTabsList :stretch="args.stretch">
            <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
          </PtTabsList>
          <PtTabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
            <div class="mt-4 p-4 bg-slate-50 rounded-lg">
              <h3 class="text-lg font-semibold mb-2">Content for {{ tab.label }}</h3>
              <p class="text-slate-600">{{ tab.content }}</p>
            </div>
          </PtTabsContent>
        </PtTabs>
        <div class="mt-4 text-sm text-slate-600">
          Active tab: {{ activeTab }}
        </div>
      </div>
    `,
  }),
  args: {
    modelValue: 'tab1',
    variant: 'default',
    stretch: false,
    tabs: [
      { value: 'tab1', label: 'Tab 1', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Tab 2', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Tab 3', content: 'This is the content for the third tab.' },
    ],
  },
  argTypes: {
    stretch: {
      control: 'boolean',
      description: 'Stretch container dan labels untuk mengisi seluruh width (w-full + justify-between)',
    },
    tabs: {
      control: 'object',
      description: 'Array of objects untuk tabs: [{ value, label, content }]',
    },
  },
};

export const Default: Story = {
  render: () => {
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];
    const activeTab = ref(tabs[0].value);
    return {
      components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
      setup: () => ({ activeTab, tabs }),
      template: `
        <div class="w-[600px]">
          <PtTabs v-model="activeTab" variant="default">
            <PtTabsList>
              <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
            </PtTabsList>
            <PtTabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
              <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Content for {{ tab.label }}</h3>
                <p class="text-slate-600">{{ tab.content }}</p>
              </div>
            </PtTabsContent>
          </PtTabs>
        </div>
      `,
    };
  },
};

export const Line: Story = {
  render: () => {
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];
    const activeTab = ref(tabs[0].value);
    return {
      components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
      setup: () => ({ activeTab, tabs }),
      template: `
        <div class="w-[600px]">
          <PtTabs v-model="activeTab" variant="line">
            <PtTabsList>
              <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
            </PtTabsList>
            <PtTabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
              <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Content for {{ tab.label }}</h3>
                <p class="text-slate-600">{{ tab.content }}</p>
              </div>
            </PtTabsContent>
          </PtTabs>
        </div>
      `,
    };
  },
};

export const StretchLabels: Story = {
  render: () => {
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];
    const activeTab1 = ref(tabs[0].value);
    const activeTab2 = ref(tabs[0].value);
    return {
      components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
      setup: () => ({ activeTab1, activeTab2, tabs }),
      template: `
        <div class="w-[600px] space-y-8">
          <div>
            <div class="text-sm font-medium text-slate-700 mb-2">Stretch: False</div>
            <PtTabs v-model="activeTab1" variant="default">
              <PtTabsList>
                <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
              </PtTabsList>
              <PtTabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Content for {{ tab.label }}</h3>
                  <p class="text-slate-600">{{ tab.content }}</p>
                </div>
              </PtTabsContent>
            </PtTabs>
          </div>
          <div>
            <div class="text-sm font-medium text-slate-700 mb-2">Stretch: True</div>
            <PtTabs v-model="activeTab2" variant="default">
              <PtTabsList stretch>
                <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
              </PtTabsList>
              <PtTabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Content for {{ tab.label }}</h3>
                  <p class="text-slate-600">{{ tab.content }}</p>
                </div>
              </PtTabsContent>
            </PtTabs>
          </div>
        </div>
      `,
    };
  },
};

export const LineStretchLabels: Story = {
  render: () => {
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];
    const activeTab = ref(tabs[0].value);
    return {
      components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
      setup: () => ({ activeTab, tabs }),
      template: `
        <div class="w-[600px] space-y-8">
          <div>
            <div class="text-sm font-medium text-slate-700 mb-2">Stretch: False</div>
            <PtTabs v-model="activeTab" variant="line">
              <PtTabsList>
                <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
              </PtTabsList>
            </PtTabs>
          </div>
          <div>
            <div class="text-sm font-medium text-slate-700 mb-2">Stretch: True</div>
            <PtTabs v-model="activeTab" variant="line">
              <PtTabsList stretch>
                <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
              </PtTabsList>
            </PtTabs>
          </div>
        </div>
      `,
    };
  },
};

export const Disabled: Story = {
  render: () => {
    const tabs = [
      { value: 'tab1', label: 'Tab 1', content: 'This is the content for the first tab.', disabled: false },
      { value: 'tab2', label: 'Tab 2 (Disabled)', content: 'This tab is disabled.', disabled: true },
      { value: 'tab3', label: 'Tab 3', content: 'This is the content for the third tab.', disabled: false },
    ];
    const activeTab = ref(tabs[0].value);
    return {
      components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
      setup: () => ({ activeTab, tabs }),
      template: `
        <div class="w-[600px]">
          <PtTabs v-model="activeTab" variant="default">
            <PtTabsList>
              <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value" :disabled="tab.disabled">{{ tab.label }}</PtTabsTrigger>
            </PtTabsList>
            <PtTabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
              <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Content for {{ tab.label }}</h3>
                <p class="text-slate-600">{{ tab.content }}</p>
              </div>
            </PtTabsContent>
          </PtTabs>
        </div>
      `,
    };
  },
};

export const ManyTabs: Story = {
  render: () => {
    const tabs = [
      { value: 'tab1', label: 'Tab 1', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Tab 2', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Tab 3', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Tab 4', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Tab 5', content: 'This is the content for the fifth tab.' },
    ];
    const activeTab = ref(tabs[0].value);
    return {
      components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
      setup: () => ({ activeTab, tabs }),
      template: `
        <div class="w-[600px]">
          <PtTabs v-model="activeTab" variant="default">
            <PtTabsList>
              <PtTabsTrigger v-for="tab in tabs" :key="tab.value" :value="tab.value">{{ tab.label }}</PtTabsTrigger>
            </PtTabsList>
            <PtTabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
              <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">Content for {{ tab.label }}</h3>
                <p class="text-slate-600">{{ tab.content }}</p>
              </div>
            </PtTabsContent>
          </PtTabs>
        </div>
      `,
    };
  },
};

export const WithIcons: Story = {
  render: () => {
    const tabs = [
      { value: 'tab1', label: 'Home', content: 'This is the home tab content.' },
      { value: 'tab2', label: 'Settings', content: 'This is the settings tab content.' },
      { value: 'tab3', label: 'Profile', content: 'This is the profile tab content.' },
    ];
    const activeTab = ref(tabs[0].value);
    
    // House icon SVG
    const HouseIcon = () => h('svg', {
      'aria-hidden': 'true',
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'h-4 w-4 shrink-0'
    }, [
      h('path', { d: 'M8 2L2 7v7h3v-4h2v4h3V7L8 2z' })
    ]);
    
    // Settings icon SVG
    const SettingsIcon = () => h('svg', {
      'aria-hidden': 'true',
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'h-4 w-4 shrink-0'
    }, [
      h('circle', { cx: '8', cy: '8', r: '2' }),
      h('path', { d: 'M8 2v2M8 12v2M2 8h2M12 8h2' })
    ]);
    
    // User icon SVG
    const UserIcon = () => h('svg', {
      'aria-hidden': 'true',
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      class: 'h-4 w-4 shrink-0'
    }, [
      h('circle', { cx: '8', cy: '6', r: '2' }),
      h('path', { d: 'M3 14c0-2 2-4 5-4s5 2 5 4' })
    ]);
    
    return {
      components: { PtTabs, PtTabsList, PtTabsTrigger, PtTabsContent },
      setup: () => ({ activeTab, tabs, HouseIcon, SettingsIcon, UserIcon }),
      template: `
        <div class="w-[600px] space-y-8">
          <div>
            <div class="text-sm font-medium text-slate-700 mb-2">Icons on Left (Default Variant)</div>
            <PtTabs v-model="activeTab" variant="default">
              <PtTabsList>
                <PtTabsTrigger value="tab1">
                  <component :is="HouseIcon" />
                  <span class="ml-1">Home</span>
                </PtTabsTrigger>
                <PtTabsTrigger value="tab2">
                  <component :is="SettingsIcon" />
                  <span class="ml-1">Settings</span>
                </PtTabsTrigger>
                <PtTabsTrigger value="tab3">
                  <component :is="UserIcon" />
                  <span class="ml-1">Profile</span>
                </PtTabsTrigger>
              </PtTabsList>
              <PtTabsContent value="tab1">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Home Content</h3>
                  <p class="text-slate-600">This is the home tab content.</p>
                </div>
              </PtTabsContent>
              <PtTabsContent value="tab2">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Settings Content</h3>
                  <p class="text-slate-600">This is the settings tab content.</p>
                </div>
              </PtTabsContent>
              <PtTabsContent value="tab3">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Profile Content</h3>
                  <p class="text-slate-600">This is the profile tab content.</p>
                </div>
              </PtTabsContent>
            </PtTabs>
          </div>
          <div>
            <div class="text-sm font-medium text-slate-700 mb-2">Icons on Right (Line Variant)</div>
            <PtTabs v-model="activeTab" variant="line">
              <PtTabsList>
                <PtTabsTrigger value="tab1">
                  <span>Home</span>
                  <component :is="HouseIcon" class="ml-1" />
                </PtTabsTrigger>
                <PtTabsTrigger value="tab2">
                  <span>Settings</span>
                  <component :is="SettingsIcon" class="ml-1" />
                </PtTabsTrigger>
                <PtTabsTrigger value="tab3">
                  <span>Profile</span>
                  <component :is="UserIcon" class="ml-1" />
                </PtTabsTrigger>
              </PtTabsList>
              <PtTabsContent value="tab1">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Home Content</h3>
                  <p class="text-slate-600">This is the home tab content.</p>
                </div>
              </PtTabsContent>
              <PtTabsContent value="tab2">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Settings Content</h3>
                  <p class="text-slate-600">This is the settings tab content.</p>
                </div>
              </PtTabsContent>
              <PtTabsContent value="tab3">
                <div class="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 class="text-lg font-semibold mb-2">Profile Content</h3>
                  <p class="text-slate-600">This is the profile tab content.</p>
                </div>
              </PtTabsContent>
            </PtTabs>
          </div>
        </div>
      `,
    };
  },
};
