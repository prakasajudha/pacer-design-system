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
          '- md: h-10 (40px), sm: h-9 (36px)',
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
    loading: false,
    color: 'primary',
    selected: false,
    focused: false,
  },
  argTypes: {
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
      description: 'Ukuran tombol (non-link).',
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
      options: ['primary', 'danger'],
      description: 'Color button: primary (default) / danger.',
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

export const Large: Story = {
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
