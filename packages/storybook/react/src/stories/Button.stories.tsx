import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@pacer-ui/react';
import { useEffect, useRef } from 'react';

const meta = {
  id: 'components-button',
  title: 'Components/Basic/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen tombol PACER sesuai guideline Figma.',
          '',
          'Ringkasan guideline:',
          '- sm: h-9 (36px), md: h-10 (40px)',
          '- gap antar item: 4px (gap-1)',
          '- radius: 6px (rounded-[6px])',
          '- typography: text-sm (14px) + leading-6 (24px)',
          '',
          'Untuk tombol ikon-only gunakan **IconButton** (wajib `aria-label`).',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Primary Action',
    variant: 'solid',
    size: 'md',
    shape: 'square',
    loading: false,
    color: 'primary',
    selected: false,
    focused: false,
  },
  argTypes: {
    shape: {
      control: 'inline-radio',
      options: ['square', 'rounded'],
      description: 'Square = rounded-lg + border 1px #000; rounded = rounded-full.',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: 'select',
      options: ['solid', 'secondary', 'outline', 'ghost', 'link-primary', 'link-secondary'],
      description: 'Pilihan gaya visual tombol.',
      table: {
        type: { summary: 'string' },
      },
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'Ukuran tombol (non-link). sm: 36px, md: 40px.',
      table: {
        type: { summary: 'string' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Tampilkan state loading.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan tombol.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'warning', 'neutral'],
      description: 'Color button: primary / danger / success / warning / neutral.',
      table: {
        type: { summary: 'string' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Aktifkan selected/toggled state.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    focused: {
      control: 'boolean',
      description: 'Tampilkan focused state (focus ring).',
      table: {
        type: { summary: 'boolean' },
      },
    },
    type: {
      table: { disable: true },
      description: 'Native HTML button type (button/submit/reset). Jarang perlu diubah.',
    },
    leftIcon: {
      control: false,
      description: `Ikon sebelum label tombol. Bisa berupa React component atau SVG element.
      
**Contoh:**
\`\`\`tsx
<Button 
  leftIcon={
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  }
>
  Download
</Button>
\`\`\`
      
Lihat story **WithLeftIcon** untuk contoh lengkap.`,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    rightIcon: {
      control: false,
      description: `Ikon setelah label tombol. Bisa berupa React component atau SVG element.
      
**Contoh:**
\`\`\`tsx
<Button 
  rightIcon={
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  }
>
  Continue
</Button>
\`\`\`
      
Lihat story **WithRightIcon** untuk contoh lengkap.`,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    children: {
      control: 'text',
      description: 'Konten tombol.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component untuk handle focused state
const FocusableButton = ({ focused, className, ...props }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focused && buttonRef.current) {
      // Focus button
      buttonRef.current.focus();
      // Trigger focus-visible dengan menambahkan class yang memicu keyboard focus
      // Browser akan menganggap ini sebagai keyboard focus
      buttonRef.current.classList.add('storybook-focused');
    } else if (!focused && buttonRef.current) {
      buttonRef.current.classList.remove('storybook-focused');
      if (document.activeElement === buttonRef.current) {
        buttonRef.current.blur();
      }
    }
  }, [focused]);

  return (
    <Button
      ref={buttonRef}
      className={className}
      {...props}
      data-focused={focused ? 'true' : undefined}
    />
  );
};

export const Playground: Story = {
  render: (args) => <FocusableButton {...args} />,
  args: {
    children: 'Primary Action',
  },
};

export const Solid: Story = {
  args: {
    children: 'Solid Button',
    variant: 'solid',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Action',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link-primary',
    children: 'Link Button',
  },
};

export const LinkSecondary: Story = {
  args: {
    variant: 'link-secondary',
    children: 'Link Secondary',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Size',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium (md)',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Processing',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    children: 'Delete',
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    children: 'Selected',
  },
};

export const Focused: Story = {
  render: (args) => <FocusableButton {...args} />,
  args: {
    focused: true,
    children: 'Focused Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled State',
  },
};

// Simple icon components untuk contoh
const ArrowRightIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlusIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const WithLeftIcon: Story = {
  args: {
    variant: 'solid',
    children: 'Download',
  },
  render: (args) => (
    <Button {...args} leftIcon={<DownloadIcon />}>
      {args.children}
    </Button>
  ),
};

export const WithRightIcon: Story = {
  args: {
    variant: 'solid',
    children: 'Continue',
  },
  render: (args) => (
    <Button {...args} rightIcon={<ArrowRightIcon />}>
      {args.children}
    </Button>
  ),
};

export const WithIcons: Story = {
  args: {
    variant: 'solid',
    children: 'Submit',
  },
  render: (args) => (
    <Button {...args} leftIcon={<PlusIcon />} rightIcon={<CheckIcon />}>
      {args.children}
    </Button>
  ),
};

// Matriks varian sesuai Figma PACER (84 designs): variant × color × size × state
const VARIANTS: Array<{ variant: typeof meta.args.variant; label: string }> = [
  { variant: 'solid', label: 'Solid' },
  { variant: 'secondary', label: 'Secondary' },
  { variant: 'outline', label: 'Outline' },
  { variant: 'ghost', label: 'Ghost' },
  { variant: 'link-primary', label: 'Link Primary' },
  { variant: 'link-secondary', label: 'Link Secondary' },
];
const SIZES: Array<'sm' | 'md'> = ['sm', 'md'];

export const VariantMatrixPrimary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Primary (brand) × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {VARIANTS.filter((v) => v.variant !== 'link-primary' && v.variant !== 'link-secondary').map(
        ({ variant, label }) => (
          <div key={variant}>
            <p className="text-sm font-medium text-slate-700 mb-2">{label}</p>
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((size) => (
                <Button key={size} variant={variant} size={size} color="primary">
                  Button {size}
                </Button>
              ))}
            </div>
          </div>
        )
      )}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Link Primary / Link Secondary</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link-primary" color="primary">
            Link Primary
          </Button>
          <Button variant="link-secondary" color="primary">
            Link Secondary
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const VariantMatrixDanger: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Danger × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {VARIANTS.filter((v) => v.variant !== 'link-primary' && v.variant !== 'link-secondary').map(
        ({ variant, label }) => (
          <div key={variant}>
            <p className="text-sm font-medium text-slate-700 mb-2">{label} (Danger)</p>
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((size) => (
                <Button key={size} variant={variant} size={size} color="danger">
                  Delete {size}
                </Button>
              ))}
            </div>
          </div>
        )
      )}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Link Danger</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link-primary" color="danger">
            Link Danger
          </Button>
        </div>
      </div>
    </div>
  ),
};

/** 33 designs Figma PACER – Success: solid, secondary, outline, ghost × sm/md + states + icon */
export const VariantMatrixSuccess: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Success × size. Sesuai 33 design Figma PACER.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {VARIANTS.filter((v) => v.variant !== 'link-primary' && v.variant !== 'link-secondary').map(
        ({ variant, label }) => (
          <div key={variant}>
            <p className="text-sm font-medium text-slate-700 mb-2">{label} (Success)</p>
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((size) => (
                <Button key={size} variant={variant} size={size} color="success">
                  Confirm {size}
                </Button>
              ))}
            </div>
          </div>
        )
      )}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Link Success</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link-primary" color="success">
            Link Success
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const VariantMatrixWarning: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Warning × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {VARIANTS.filter((v) => v.variant !== 'link-primary' && v.variant !== 'link-secondary').map(
        ({ variant, label }) => (
          <div key={variant}>
            <p className="text-sm font-medium text-slate-700 mb-2">{label} (Warning)</p>
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((size) => (
                <Button key={size} variant={variant} size={size} color="warning">
                  Warning {size}
                </Button>
              ))}
            </div>
          </div>
        )
      )}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Link Warning</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link-primary" color="warning">
            Link Warning
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const VariantMatrixNeutral: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Semua varian Neutral × size. Sesuai design Figma PACER.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-8">
      {VARIANTS.filter((v) => v.variant !== 'link-primary' && v.variant !== 'link-secondary').map(
        ({ variant, label }) => (
          <div key={variant}>
            <p className="text-sm font-medium text-slate-700 mb-2">{label} (Neutral)</p>
            <div className="flex flex-wrap items-center gap-3">
              {SIZES.map((size) => (
                <Button key={size} variant={variant} size={size} color="neutral">
                  Cancel {size}
                </Button>
              ))}
            </div>
          </div>
        )
      )}
      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Link Neutral</p>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="link-primary" color="neutral">
            Link Neutral
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const VariantMatrixStates: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default, Disabled, Loading, Selected untuk Solid Primary.',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="solid" color="primary" size="md">
        Default
      </Button>
      <Button variant="solid" color="primary" size="md" disabled>
        Disabled
      </Button>
      <Button variant="solid" color="primary" size="md" loading>
        Loading
      </Button>
      <Button variant="solid" color="primary" size="md" selected>
        Selected
      </Button>
    </div>
  ),
};

export const VariantMatrixWithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Primary Solid dengan left icon per size (sesuai Figma).',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      {SIZES.map((size) => (
        <Button key={size} variant="solid" color="primary" size={size} leftIcon={<PlusIcon />}>
          Button
        </Button>
      ))}
    </div>
  ),
};

export const Success: Story = {
  args: {
    color: 'success',
    children: 'Confirm',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    children: 'Warning',
  },
};

export const Neutral: Story = {
  args: {
    color: 'neutral',
    children: 'Cancel',
  },
};

/** 148 designs Figma PACER: semua variant × color × size + states (default, disabled, loading, selected). */
const COLORS_148: Array<{ color: 'primary' | 'danger' | 'success' | 'warning' | 'neutral'; label: string }> = [
  { color: 'primary', label: 'Primary' },
  { color: 'danger', label: 'Danger' },
  { color: 'success', label: 'Success' },
  { color: 'warning', label: 'Warning' },
  { color: 'neutral', label: 'Neutral' },
];

export const All148Designs: Story = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'Grid lengkap 148 design Figma PACER: variant × color × size (sm/md) + states (default, disabled, loading, selected). Verifikasi warna dan state sesuai Figma.',
      },
    },
  },
  render: () => (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <h2 className="text-lg font-semibold text-slate-900">Variant × Color × Size</h2>
      {COLORS_148.map(({ color, label }) => (
        <div key={color}>
          <h3 className="text-sm font-medium text-slate-600 mb-3">{label}</h3>
          <div className="flex flex-col gap-3">
            {(['solid', 'secondary', 'outline', 'ghost'] as const).map((variant) => (
              <div key={variant} className="flex flex-wrap items-center gap-2">
                <span className="w-20 text-xs text-slate-500 capitalize">{variant}</span>
                <Button variant={variant} color={color} size="sm">
                  {label} sm
                </Button>
                <Button variant={variant} color={color} size="md">
                  {label} md
                </Button>
              </div>
            ))}
            <div className="flex flex-wrap items-center gap-2">
              <span className="w-20 text-xs text-slate-500">link</span>
              <Button variant="link-primary" color={color}>
                Link Primary
              </Button>
              {color === 'primary' && (
                <Button variant="link-secondary" color={color}>
                  Link Secondary
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}

      <h2 className="text-lg font-semibold text-slate-900 mt-10">States (Default, Disabled, Loading, Selected)</h2>
      {COLORS_148.map(({ color, label }) => (
        <div key={color}>
          <h3 className="text-sm font-medium text-slate-600 mb-2">{label}</h3>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="solid" color={color} size="md">
              Default
            </Button>
            <Button variant="solid" color={color} size="md" disabled>
              Disabled
            </Button>
            <Button variant="solid" color={color} size="md" loading>
              Loading
            </Button>
            <Button variant="solid" color={color} size="md" selected>
              Selected
            </Button>
          </div>
        </div>
      ))}

      <h2 className="text-lg font-semibold text-slate-900 mt-10">With icon (Solid × Color × Size)</h2>
      <div className="flex flex-wrap gap-3">
        {COLORS_148.map(({ color }) => (
          <Button key={color} variant="solid" color={color} size="md" leftIcon={<PlusIcon />}>
            Button
          </Button>
        ))}
      </div>
    </div>
  ),
};
