import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@pacer-ui/react';

const Mail = () => (
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
    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const Check = () => (
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

const meta = {
  id: 'components-input',
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Bidang input dengan label, helper text, dan state error sesuai komponen Input di paket @pacer-ui/react.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Email',
    placeholder: 'nama@pertamina.com',
    helperText: 'Gunakan email kantor Pertamina.',
    type: 'email',
    fullWidth: false,
    disabled: false,
    error: false,
    errorMessage: '',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'Tipe input HTML.',
    },
    label: {
      control: 'text',
      description: 'Label yang ditampilkan di atas input.',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder untuk memberikan petunjuk isi.',
    },
    helperText: {
      control: 'text',
      description: 'Pesan pendukung ketika tidak ada error.',
    },
    error: {
      control: 'boolean',
      description: 'State error.',
    },
    errorMessage: {
      control: 'text',
      description: 'Pesan error (ditampilkan saat error true).',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Membuat input memenuhi lebar kontainer.',
    },
    disabled: {
      control: 'boolean',
      description: 'Nonaktifkan input.',
    },
    startIcon: {
      control: false,
      description: 'Ikon sebelum field, tampil ketika tidak loading.',
    },
    endIcon: {
      control: false,
      description: 'Ikon setelah field, tampil ketika tidak loading.',
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: 'Kami akan mengirimkan info update ke email ini.',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    errorMessage: 'Format email tidak valid.',
    helperText: undefined,
    defaultValue: 'user@example',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Minimal 8 karakter',
    type: 'password',
    helperText: 'Gunakan kombinasi huruf dan angka.',
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Email',
    helperText: 'Email sudah diverifikasi.',
    startIcon: <Mail />,
    endIcon: <Check />,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    helperText: undefined,
    placeholder: 'Input dinonaktifkan',
  },
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    helperText: undefined,
    placeholder: 'Placeholder tanpa label',
  },
};

export const Mandatory: Story = {
  args: {
    label: 'Email',
    isMandatory: true,
    helperText: undefined,
  },
};

export const WithTooltip: Story = {
  args: {
    label: 'Email',
    showTooltip: true,
    tooltipInformation: 'Gunakan email aktif yang sudah terdaftar di sistem.',
    helperText: undefined,
  },
};

export const MandatoryWithTooltip: Story = {
  args: {
    label: 'Email',
    isMandatory: true,
    showTooltip: true,
    tooltipInformation: 'Field ini wajib diisi untuk melanjutkan proses.',
    helperText: undefined,
  },
};
