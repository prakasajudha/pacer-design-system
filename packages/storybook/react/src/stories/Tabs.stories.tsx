import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@pacer-ui/react';
import { useState, useEffect } from 'react';

const meta = {
  id: 'components-tabs',
  title: 'Components/Basic/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Tabs PACER sesuai Figma dengan compound components pattern.',
          '',
          'Components:',
          '- Tabs: Container utama',
          '- TabsList: Container untuk tab triggers',
          '- TabsTrigger: Individual tab button',
          '- TabsContent: Content untuk setiap tab',
          '',
          'Props:',
          '- variant: "default" | "line" (default: "default")',
          '  - default: background abu-abu, selected dengan bg putih + shadow',
          '  - line: border bottom, selected dengan border biru tebal',
          '- stretch: boolean (default: false) - stretch container dan tab items untuk mengisi width',
          '',
          'Model:',
          '- value: string | number - value dari tab yang aktif',
          '- onValueChange: (value: string | number) => void',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    value: 'tab1',
    variant: 'default',
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'value dari tab yang aktif',
    },
    variant: {
      control: 'select',
      options: ['default', 'line'],
      description: 'Variant style: default (background) atau line (border bottom)',
    },
    stretch: {
      control: 'boolean',
      description: 'Stretch container dan labels untuk mengisi seluruh width (w-full + justify-between)',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = useState<string | number>(args.value ?? 'tab1');
    const [tabs] = useState([
      { value: 'tab1', label: 'Tab 1', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Tab 2', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Tab 3', content: 'This is the content for the third tab.' },
    ]);

    useEffect(() => {
      if (args.value !== undefined) {
        setActiveTab(args.value);
      }
    }, [args.value]);

    return (
      <div className="w-[600px] space-y-4">
        <Tabs value={activeTab} onValueChange={(v) => { setActiveTab(v); args.value = v; }} variant={args.variant}>
          <TabsList stretch={args.stretch}>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Content for {tab.label}</h3>
                <p className="text-slate-600">{tab.content}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-4 text-sm text-slate-600">
          Active tab: {activeTab}
        </div>
      </div>
    );
  },
  args: {
    value: 'tab1',
    variant: 'default',
    stretch: false,
  },
};

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];

    return (
      <div className="w-[600px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Content for {tab.label}</h3>
                <p className="text-slate-600">{tab.content}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const Line: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];

    return (
      <div className="w-[600px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="line">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Content for {tab.label}</h3>
                <p className="text-slate-600">{tab.content}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const StretchLabels: Story = {
  render: () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    const [activeTab2, setActiveTab2] = useState('tab1');
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];

    return (
      <div className="w-[600px] space-y-8">
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Stretch: False</div>
          <Tabs value={activeTab1} onValueChange={setActiveTab1} variant="default">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Content for {tab.label}</h3>
                  <p className="text-slate-600">{tab.content}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Stretch: True</div>
          <Tabs value={activeTab2} onValueChange={setActiveTab2} variant="default">
            <TabsList stretch>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Content for {tab.label}</h3>
                  <p className="text-slate-600">{tab.content}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    );
  },
};

export const LineStretchLabels: Story = {
  render: () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    const [activeTab2, setActiveTab2] = useState('tab1');
    const tabs = [
      { value: 'tab1', label: 'Label', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Label', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Label', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Label', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Label', content: 'This is the content for the fifth tab.' },
    ];

    return (
      <div className="w-[600px] space-y-8">
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Stretch: False</div>
          <Tabs value={activeTab1} onValueChange={setActiveTab1} variant="line">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Stretch: True</div>
          <Tabs value={activeTab2} onValueChange={setActiveTab2} variant="line">
            <TabsList stretch>
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [
      { value: 'tab1', label: 'Tab 1', content: 'This is the content for the first tab.', disabled: false },
      { value: 'tab2', label: 'Tab 2 (Disabled)', content: 'This tab is disabled.', disabled: true },
      { value: 'tab3', label: 'Tab 3', content: 'This is the content for the third tab.', disabled: false },
    ];

    return (
      <div className="w-[600px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Content for {tab.label}</h3>
                <p className="text-slate-600">{tab.content}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const ManyTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const tabs = [
      { value: 'tab1', label: 'Tab 1', content: 'This is the content for the first tab.' },
      { value: 'tab2', label: 'Tab 2', content: 'This is the content for the second tab.' },
      { value: 'tab3', label: 'Tab 3', content: 'This is the content for the third tab.' },
      { value: 'tab4', label: 'Tab 4', content: 'This is the content for the fourth tab.' },
      { value: 'tab5', label: 'Tab 5', content: 'This is the content for the fifth tab.' },
    ];

    return (
      <div className="w-[600px]">
        <Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Content for {tab.label}</h3>
                <p className="text-slate-600">{tab.content}</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    // House icon SVG
    const HouseIcon = () => (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0"
      >
        <path d="M8 2L2 7v7h3v-4h2v4h3V7L8 2z" />
      </svg>
    );

    // Settings icon SVG
    const SettingsIcon = () => (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0"
      >
        <circle cx="8" cy="8" r="2" />
        <path d="M8 2v2M8 12v2M2 8h2M12 8h2" />
      </svg>
    );

    // User icon SVG
    const UserIcon = () => (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0"
      >
        <circle cx="8" cy="6" r="2" />
        <path d="M3 14c0-2 2-4 5-4s5 2 5 4" />
      </svg>
    );

    return (
      <div className="w-[600px] space-y-8">
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Icons on Left (Default Variant)</div>
          <Tabs value={activeTab} onValueChange={setActiveTab} variant="default">
            <TabsList>
              <TabsTrigger value="tab1">
                <HouseIcon />
                <span className="ml-1">Home</span>
              </TabsTrigger>
              <TabsTrigger value="tab2">
                <SettingsIcon />
                <span className="ml-1">Settings</span>
              </TabsTrigger>
              <TabsTrigger value="tab3">
                <UserIcon />
                <span className="ml-1">Profile</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Home Content</h3>
                <p className="text-slate-600">This is the home tab content.</p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Settings Content</h3>
                <p className="text-slate-600">This is the settings tab content.</p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Profile Content</h3>
                <p className="text-slate-600">This is the profile tab content.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <div className="text-sm font-medium text-slate-700 mb-2">Icons on Right (Line Variant)</div>
          <Tabs value={activeTab} onValueChange={setActiveTab} variant="line">
            <TabsList>
              <TabsTrigger value="tab1">
                <span>Home</span>
                <HouseIcon className="ml-1" />
              </TabsTrigger>
              <TabsTrigger value="tab2">
                <span>Settings</span>
                <SettingsIcon className="ml-1" />
              </TabsTrigger>
              <TabsTrigger value="tab3">
                <span>Profile</span>
                <UserIcon className="ml-1" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tab1">
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Home Content</h3>
                <p className="text-slate-600">This is the home tab content.</p>
              </div>
            </TabsContent>
            <TabsContent value="tab2">
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Settings Content</h3>
                <p className="text-slate-600">This is the settings tab content.</p>
              </div>
            </TabsContent>
            <TabsContent value="tab3">
              <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Profile Content</h3>
                <p className="text-slate-600">This is the profile tab content.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  },
};
