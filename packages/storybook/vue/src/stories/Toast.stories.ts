import type { Meta, StoryObj } from '@storybook/vue3';
import { PtToast, ToastContainer, useToast, PtButton } from '@pacer-ui/vue';
import { ref } from 'vue';

const meta = {
  id: 'components-toast',
  title: 'Components/Disclosure/Toast',
  component: PtToast,
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
          '- API seperti toastify (useToast composable)',
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
} satisfies Meta<typeof PtToast>;

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

// Description Only (using children)
export const DescriptionOnly: Story = {
  render: () => ({
    components: { PtToast },
    template: `
      <PtToast variant="information" :duration="0">
        <template #default>
          <span>This toast only has description text without title</span>
        </template>
      </PtToast>
    `,
  }),
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

// Interactive Example dengan useToast
export const InteractiveExample: Story = {
  render: () => ({
    components: { 
      PtButton,
      ToastContainer 
    },
    setup() {
      const toast = useToast();
      const position = ref('top' as const);

      const updatePosition = (newPosition: string) => {
        position.value = newPosition as any;
        toast.setPosition(newPosition as any);
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

      const positions = ['top-left', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left'];

      return {
        showNeutral,
        showInformation,
        showSuccess,
        showWarning,
        showError,
        showCustomDuration,
        showNoAutoClose,
        clearAll,
        position,
        updatePosition,
        positions,
      };
    },
    template: `
      <div class="flex flex-col gap-4 p-8">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium">Position:</label>
          <div class="flex flex-wrap gap-2">
            <PtButton 
              v-for="pos in positions" 
              :key="pos"
              @click="updatePosition(pos)" 
              :variant="position === pos ? 'solid' : 'outline'" 
              size="sm"
            >
              {{ pos }}
            </PtButton>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium">Toast Variants:</label>
          <div class="flex flex-wrap gap-2">
            <PtButton @click="showNeutral" variant="secondary" size="sm">Neutral</PtButton>
            <PtButton @click="showInformation" variant="secondary" size="sm">Information</PtButton>
            <PtButton @click="showSuccess" variant="solid" size="sm">Success</PtButton>
            <PtButton @click="showWarning" variant="secondary" size="sm">Warning</PtButton>
            <PtButton @click="showError" variant="solid" color="danger" size="sm">Error</PtButton>
            <PtButton @click="showCustomDuration" variant="outline" size="sm">Custom Duration</PtButton>
            <PtButton @click="showNoAutoClose" variant="outline" size="sm">No Auto Close</PtButton>
            <PtButton @click="clearAll" variant="ghost" size="sm">Clear All</PtButton>
          </div>
        </div>
        <ToastContainer :position="position" />
      </div>
    `,
  }),
  parameters: {
    layout: 'fullscreen',
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => ({
    components: { PtToast },
    template: `
      <div class="flex flex-col gap-4 p-8">
        <PtToast variant="neutral" title="Neutral" description="This is a neutral toast notification" :duration="0" />
        <PtToast variant="information" title="Information" description="This is an information toast notification" :duration="0" />
        <PtToast variant="success" title="Success!" description="Data berhasil disimpan" :duration="0" />
        <PtToast variant="warning" title="Warning!" description="Pastikan semua data sudah diisi" :duration="0" />
        <PtToast variant="error" title="Error!" description="Terjadi kesalahan saat menyimpan data" :duration="0" />
      </div>
    `,
  }),
  parameters: {
    layout: 'fullscreen',
  },
};
