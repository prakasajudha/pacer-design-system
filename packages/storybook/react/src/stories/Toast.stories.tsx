import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Toast, ToastContainer, useToast, Button, type ToastPosition } from '@pacer-ui/react';

const meta = {
  id: 'components-toast',
  title: 'Components/Disclosure/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Toast notification component untuk menampilkan notifikasi sementara di aplikasi.',
          '',
          'Features:',
          '- 5 Variants: neutral, information, success, warning, error',
          '- Title dan Description support',
          '- Custom icon support',
          '- Auto close dengan delay (configurable)',
          '- Manual close button',
          '- API seperti toastify (useToast hook)',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    variant: 'neutral',
    title: 'Notification',
    description: 'This is a toast notification message',
    duration: 5000,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'information', 'success', 'warning', 'error'],
      description: 'Variant visual dari toast',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'neutral'" },
      },
    },
    title: {
      control: 'text',
      description: 'Title toast',
      table: {
        type: { summary: 'string' },
      },
    },
    description: {
      control: 'text',
      description: 'Description toast (muncul di bawah title)',
      table: {
        type: { summary: 'string' },
      },
    },
    duration: {
      control: 'number',
      description: 'Delay auto close dalam milliseconds (0 = tidak auto close)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5000' },
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Neutral: Story = {
  args: {
    variant: 'neutral',
    title: 'Notification',
    description: 'This is a neutral toast notification',
  },
};

export const Information: Story = {
  args: {
    variant: 'information',
    title: 'Information',
    description: 'This is an information toast notification',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Data berhasil disimpan',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning!',
    description: 'Pastikan semua data sudah diisi',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error!',
    description: 'Terjadi kesalahan saat menyimpan data',
  },
};

// Long Text (word-break / overflow-wrap)
export const LongText: Story = {
  args: {
    variant: 'information',
    title: 'IniTitleSengajaDibikinPanjangBangetTanpaSpasiSupayaNgetesWordBreakDanTidakMelebarKeSamping',
    description:
      'Contoh description berisi URL panjang: https://example.com/super/long/path/with/reallyreallyreallyreallyreallyreallylongsegment?query=abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    duration: 0,
  },
};

// Title Only
export const TitleOnly: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: undefined,
  },
};

// Custom Duration
export const CustomDuration: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'This toast will auto close after 10 seconds',
    duration: 10000,
  },
};

// No Auto Close
export const NoAutoClose: Story = {
  args: {
    variant: 'error',
    title: 'Error!',
    description: 'This toast will not auto close',
    duration: 0,
  },
};

// Interactive Example with useToast
const InteractiveComponent = () => {
  const toast = useToast();
  const [position, setPosition] = useState<ToastPosition>('top-right');

  const positions: ToastPosition[] = [
    'top-left',
    'top',
    'top-right',
    'right',
    'bottom-right',
    'bottom',
    'bottom-left',
    'left',
  ];

  const updatePosition = (newPosition: ToastPosition) => {
    setPosition(newPosition);
    toast.setPosition(newPosition);
  };

  const showNeutral = () => {
    toast.neutral('Notification', 'Anda memiliki pesan baru');
  };

  const showInformation = () => {
    toast.information('Info', 'Sistem akan melakukan maintenance');
  };

  const showSuccess = () => {
    toast.success('Success!', 'Data berhasil disimpan');
  };

  const showWarning = () => {
    toast.warning('Warning!', 'Pastikan semua data sudah diisi');
  };

  const showError = () => {
    toast.error('Error!', 'Terjadi kesalahan saat menyimpan data');
  };

  const showCustomDuration = () => {
    toast.success('Success!', 'This toast will close after 10 seconds', {
      duration: 10000,
    });
  };

  const showNoAutoClose = () => {
    toast.error('Error!', 'This toast will not auto close', {
      duration: 0,
    });
  };

  const clearAll = () => {
    toast.clear();
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Position:</label>
        <div className="flex flex-wrap gap-2">
          {positions.map((pos) => (
            <Button
              key={pos}
              onClick={() => updatePosition(pos)}
              variant={position === pos ? 'solid' : 'outline'}
              size="sm"
            >
              {pos}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Toast Variants:</label>
        <div className="flex flex-wrap gap-2">
          <Button onClick={showNeutral} variant="secondary" size="sm">
            Neutral
          </Button>
          <Button onClick={showInformation} variant="secondary" size="sm">
            Information
          </Button>
          <Button onClick={showSuccess} variant="solid" size="sm">
            Success
          </Button>
          <Button onClick={showWarning} variant="secondary" size="sm">
            Warning
          </Button>
          <Button onClick={showError} variant="solid" color="danger" size="sm">
            Error
          </Button>
          <Button onClick={showCustomDuration} variant="outline" size="sm">
            Custom Duration
          </Button>
          <Button onClick={showNoAutoClose} variant="outline" size="sm">
            No Auto Close
          </Button>
          <Button onClick={clearAll} variant="ghost" size="sm">
            Clear All
          </Button>
        </div>
      </div>
      <ToastContainer position={position} />
    </div>
  );
};

export const InteractiveExample: Story = {
  render: () => <InteractiveComponent />,
  parameters: {
    layout: 'fullscreen',
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      <Toast
        variant="neutral"
        title="Neutral"
        description="This is a neutral toast notification"
        duration={0}
      />
      <Toast
        variant="information"
        title="Information"
        description="This is an information toast notification"
        duration={0}
      />
      <Toast
        variant="success"
        title="Success!"
        description="Data berhasil disimpan"
        duration={0}
      />
      <Toast
        variant="warning"
        title="Warning!"
        description="Pastikan semua data sudah diisi"
        duration={0}
      />
      <Toast
        variant="error"
        title="Error!"
        description="Terjadi kesalahan saat menyimpan data"
        duration={0}
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
