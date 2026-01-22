import type { Meta, StoryObj } from '@storybook/vue3';
import { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton } from '@pacer-ui/vue';
import { ref, h, watch } from 'vue';

const meta = {
  title: 'Components/Modal',
  component: PtModal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Modal PACER sesuai Figma dengan compound components pattern.',
          '',
          'Components:',
          '- PtModal: Container utama dengan overlay dan backdrop',
          '- PtModalHeader: Header dengan title, description, icon (support children untuk custom)',
          '- PtModalBody: Body content',
          '- PtModalFooter: Footer dengan auto-render buttons jika ada onCancel/onConfirm (support children untuk custom)',
          '',
          'Props:',
          '- open / v-model:open: boolean - kontrol open/close',
          '- size: "sm" | "md" | "lg" (default: "md")',
          '- closeOnOverlayClick: boolean (default: true)',
          '- closeOnEscape: boolean (default: true)',
          '',
          'ModalHeader:',
          '- title: string (optional) - jika tidak pakai children',
          '- description: string (optional) - jika tidak pakai children',
          '- icon: Component (optional) - icon di kiri title',
          '- showCloseButton: boolean (default: true)',
          '- children: custom header content',
          '',
          'ModalFooter:',
          '- onCancel: () => void (optional) - auto-render Cancel button',
          '- onConfirm: () => void (optional) - auto-render Confirm button',
          '- onCancelText: string (default: "Cancel")',
          '- onConfirmText: string (default: "Continue")',
          '- children: custom footer content',
        ].join('\n'),
      },
    },
  },
  tags: ['autodocs'],
  args: {
    open: false,
    size: 'md',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'v-model:open - kontrol open/close state',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Ukuran modal: sm (400px), md (500px), lg (600px)',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Close modal ketika klik overlay/backdrop',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close modal ketika tekan Escape key',
    },
  },
} satisfies Meta<typeof PtModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Info icon SVG
const InfoIcon = () => h('svg', {
  'aria-hidden': 'true',
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  class: 'h-4 w-4',
}, [
  h('circle', { cx: '8', cy: '8', r: '6' }),
  h('path', { d: 'M8 6v2M8 10h.01' }),
]);

export const Playground: Story = {
  render: (args = {}) => ({
    components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
    setup() {
      const safeArgs = args || {};
      const isOpen = ref(safeArgs.open ?? false);
      const headerTitle = ref(safeArgs.headerTitle || 'Confirm Action');
      const headerDescription = ref(safeArgs.headerDescription || 'Are you sure you want to continue? This action cannot be undone.');
      const showHeaderIcon = ref(safeArgs.showHeaderIcon ?? true);
      const showCloseButton = ref(safeArgs.showCloseButton ?? true);
      const contentType = ref(safeArgs.contentType || 'placeholder');
      const showCancel = ref(safeArgs.showCancel ?? true);
      const showConfirm = ref(safeArgs.showConfirm ?? true);
      const cancelText = ref(safeArgs.cancelText || 'Cancel');
      const confirmText = ref(safeArgs.confirmText || 'Continue');
      
      const handleCancel = () => {
        console.log('Cancel clicked');
        isOpen.value = false;
      };
      
      const handleConfirm = () => {
        console.log('Confirm clicked');
        isOpen.value = false;
      };
      
      // Watch args changes
      watch(() => safeArgs.open, (v) => {
        if (v !== undefined) isOpen.value = v;
      });
      watch(() => safeArgs.headerTitle, (v) => { if (v) headerTitle.value = v; });
      watch(() => safeArgs.headerDescription, (v) => { if (v) headerDescription.value = v; });
      watch(() => safeArgs.showHeaderIcon, (v) => { if (v !== undefined) showHeaderIcon.value = v; });
      watch(() => safeArgs.showCloseButton, (v) => { if (v !== undefined) showCloseButton.value = v; });
      watch(() => safeArgs.contentType, (v) => { if (v) contentType.value = v; });
      watch(() => safeArgs.showCancel, (v) => { if (v !== undefined) showCancel.value = v; });
      watch(() => safeArgs.showConfirm, (v) => { if (v !== undefined) showConfirm.value = v; });
      watch(() => safeArgs.cancelText, (v) => { if (v) cancelText.value = v; });
      watch(() => safeArgs.confirmText, (v) => { if (v) confirmText.value = v; });
      
      return { 
        args: safeArgs, 
        isOpen, 
        handleCancel, 
        handleConfirm,
        headerTitle,
        headerDescription,
        showHeaderIcon,
        showCloseButton,
        contentType,
        showCancel,
        showConfirm,
        cancelText,
        confirmText,
        InfoIcon,
      };
    },
    template: `
      <div>
        <PtButton 
          @click="isOpen = true"
          variant="solid"
          size="sm"
        >
          Open Modal
        </PtButton>
        <PtModal 
          :size="(args && args.size) || 'md'"
          :close-on-overlay-click="(args && args.closeOnOverlayClick !== undefined) ? args.closeOnOverlayClick : true"
          :close-on-escape="(args && args.closeOnEscape !== undefined) ? args.closeOnEscape : true"
          v-model:open="isOpen"
        >
          <PtModalHeader 
            :title="headerTitle" 
            :description="headerDescription"
            :icon="showHeaderIcon ? InfoIcon : undefined"
            :show-close-button="showCloseButton"
          />
          <PtModalBody>
            <!-- Placeholder Content -->
            <div v-if="contentType === 'placeholder'" class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
              <p class="text-sm text-slate-700">Replace Here</p>
            </div>
            
            <!-- Image Content -->
            <div v-else-if="contentType === 'image'" class="flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                alt="Sample image"
                class="w-full h-auto rounded-md object-cover"
              />
            </div>
            
            <!-- Form Content -->
            <div v-else-if="contentType === 'form'" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  placeholder="Enter your message"
                  rows="4"
                  class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
            
            <!-- Text Content -->
            <div v-else-if="contentType === 'text'" class="space-y-3">
              <p class="text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p class="text-slate-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p class="text-slate-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            
            <!-- List Content -->
            <div v-else-if="contentType === 'list'" class="space-y-2">
              <div class="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-md">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-slate-700">Item 1</span>
              </div>
              <div class="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-md">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-slate-700">Item 2</span>
              </div>
              <div class="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-md">
                <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span class="text-slate-700">Item 3</span>
              </div>
            </div>
          </PtModalBody>
          <PtModalFooter 
            :on-cancel="showCancel ? handleCancel : undefined"
            :on-confirm="showConfirm ? handleConfirm : undefined"
            :on-cancel-text="cancelText"
            :on-confirm-text="confirmText"
          />
        </PtModal>
      </div>
    `,
  }),
  args: {
    open: false,
    size: 'md' as const,
    closeOnOverlayClick: true,
    closeOnEscape: true,
    headerTitle: 'Confirm Action',
    headerDescription: 'Are you sure you want to continue? This action cannot be undone.',
    showHeaderIcon: true,
    showCloseButton: true,
    contentType: 'placeholder' as const,
    showCancel: true,
    showConfirm: true,
    cancelText: 'Cancel',
    confirmText: 'Continue',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'v-model:open - kontrol open/close state',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Ukuran modal: sm (400px), md (500px), lg (600px)',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Close modal ketika klik overlay/backdrop',
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Close modal ketika tekan Escape key',
    },
    headerTitle: {
      control: 'text',
      description: 'Title untuk ModalHeader',
    },
    headerDescription: {
      control: 'text',
      description: 'Description untuk ModalHeader',
    },
    showHeaderIcon: {
      control: 'boolean',
      description: 'Tampilkan icon di header',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Tampilkan close button di header',
    },
    contentType: {
      control: 'select',
      options: ['placeholder', 'image', 'form', 'text', 'list'],
      description: 'Jenis konten di ModalBody',
    },
    showCancel: {
      control: 'boolean',
      description: 'Tampilkan Cancel button di footer',
    },
    showConfirm: {
      control: 'boolean',
      description: 'Tampilkan Confirm button di footer',
    },
    cancelText: {
      control: 'text',
      description: 'Text untuk Cancel button',
    },
    confirmText: {
      control: 'text',
      description: 'Text untuk Confirm button',
    },
  },
};

export const Default: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Title" 
              description="Description"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
                <p class="text-sm text-slate-700">Replace Here</p>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const WithImage: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal with Image
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Upload Image" 
              description="Select an image to upload"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" 
                  alt="Sample image"
                  class="w-full h-auto rounded-md object-cover"
                />
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
              on-confirm-text="Upload"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const WithForm: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal with Form
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Contact Us" 
              description="Fill out the form below and we'll get back to you"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea 
                    placeholder="Enter your message"
                    rows="4"
                    class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
              on-confirm-text="Send"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const WithText: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal with Text
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Terms and Conditions" 
              description="Please read the following terms carefully"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="space-y-3 max-h-[300px] overflow-y-auto">
                <p class="text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p class="text-slate-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p class="text-slate-700">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-confirm="() => isOpen = false"
              on-confirm-text="I Agree"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const WithList: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal with List
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Select Item" 
              description="Choose an item from the list below"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="space-y-2">
                <div class="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-slate-700 flex-1">Item 1 - Description of item 1</span>
                </div>
                <div class="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-slate-700 flex-1">Item 2 - Description of item 2</span>
                </div>
                <div class="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-slate-700 flex-1">Item 3 - Description of item 3</span>
                </div>
                <div class="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                  <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span class="text-slate-700 flex-1">Item 4 - Description of item 4</span>
                </div>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
              on-confirm-text="Select"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const Small: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Small Modal
          </PtButton>
          <PtModal v-model:open="isOpen" size="sm">
            <PtModalHeader 
              title="Title" 
              description="Description"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
                <p class="text-sm text-slate-700">Replace Here</p>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const Large: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Large Modal
          </PtButton>
          <PtModal v-model:open="isOpen" size="lg">
            <PtModalHeader 
              title="Title" 
              description="Description"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md min-h-[271px]">
                <p class="text-sm text-slate-700">Replace Here</p>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const CustomHeader: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal with Custom Header
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader>
              <div class="flex gap-2 items-center w-full">
                <div class="text-2xl">🎉</div>
                <div class="flex-1">
                  <h2 class="font-semibold text-xl leading-none tracking-[-0.6px] text-slate-900">Custom Header</h2>
                  <p class="mt-1 font-normal text-base leading-6 text-slate-500">This is a custom header using children</p>
                </div>
              </div>
            </PtModalHeader>
            <PtModalBody>
              <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
                <p class="text-sm text-slate-700">Replace Here</p>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const CustomFooter: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal with Custom Footer
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Title" 
              description="Description"
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
                <p class="text-sm text-slate-700">Replace Here</p>
              </div>
            </PtModalBody>
            <PtModalFooter>
              <PtButton 
                @click="isOpen = false"
                variant="solid"
                color="danger"
                size="sm"
              >
                Delete
              </PtButton>
              <PtButton 
                @click="isOpen = false"
                variant="outline"
                size="sm"
              >
                Cancel
              </PtButton>
              <PtButton 
                @click="isOpen = false"
                variant="solid"
                size="sm"
              >
                Save
              </PtButton>
            </PtModalFooter>
          </PtModal>
        </div>
      `,
    };
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal without Close Button
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Title" 
              description="Description"
              :icon="InfoIcon"
              :show-close-button="false"
            />
            <PtModalBody>
              <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
                <p class="text-sm text-slate-700">Replace Here</p>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-cancel="() => isOpen = false"
              :on-confirm="() => isOpen = false"
            />
          </PtModal>
        </div>
      `,
    };
  },
};

export const OnlyConfirm: Story = {
  render: () => {
    const isOpen = ref(false);
    return {
      components: { PtModal, PtModalHeader, PtModalBody, PtModalFooter, PtButton },
      setup: () => ({ isOpen, InfoIcon }),
      template: `
        <div>
          <PtButton 
            @click="isOpen = true"
            variant="solid"
            size="sm"
          >
            Open Modal with Only Confirm
          </PtButton>
          <PtModal v-model:open="isOpen" size="md">
            <PtModalHeader 
              title="Success!" 
              description="Your action has been completed successfully."
              :icon="InfoIcon"
            />
            <PtModalBody>
              <div class="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
                <p class="text-sm text-slate-700">Replace Here</p>
              </div>
            </PtModalBody>
            <PtModalFooter 
              :on-confirm="() => isOpen = false"
              on-confirm-text="OK"
            />
          </PtModal>
        </div>
      `,
    };
  },
};
