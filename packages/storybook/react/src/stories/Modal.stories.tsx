import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@pacer-ui/react';
import { useState, useEffect } from 'react';

const meta = {
  id: 'components-modal',
  title: 'Components/Disclosure/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: [
          'Komponen Modal PACER sesuai Figma dengan compound components pattern.',
          '',
          'Components:',
          '- Modal: Container utama dengan overlay dan backdrop',
          '- ModalHeader: Header dengan title, description, icon (support children untuk custom)',
          '- ModalBody: Body content',
          '- ModalFooter: Footer dengan auto-render buttons jika ada onCancel/onConfirm (support children untuk custom)',
          '',
          'Props:',
          '- open / onOpenChange: boolean - kontrol open/close',
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
      description: 'open - kontrol open/close state',
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Info icon component
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="8" cy="8" r="6" />
    <path d="M8 6v2M8 10h.01" />
  </svg>
);

export const Playground: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.open ?? false);
    const [headerTitle, setHeaderTitle] = useState(args.headerTitle || 'Confirm Action');
    const [headerDescription, setHeaderDescription] = useState(
      args.headerDescription || 'Are you sure you want to continue? This action cannot be undone.'
    );
    const [showHeaderIcon, setShowHeaderIcon] = useState(args.showHeaderIcon ?? true);
    const [showCloseButton, setShowCloseButton] = useState(args.showCloseButton ?? true);
    const [contentType, setContentType] = useState(args.contentType || 'placeholder');
    const [showCancel, setShowCancel] = useState(args.showCancel ?? true);
    const [showConfirm, setShowConfirm] = useState(args.showConfirm ?? true);
    const [cancelText, setCancelText] = useState(args.cancelText || 'Cancel');
    const [confirmText, setConfirmText] = useState(args.confirmText || 'Continue');

    useEffect(() => {
      if (args.open !== undefined) setIsOpen(args.open);
    }, [args.open]);

    useEffect(() => {
      if (args.headerTitle) setHeaderTitle(args.headerTitle);
    }, [args.headerTitle]);

    useEffect(() => {
      if (args.headerDescription) setHeaderDescription(args.headerDescription);
    }, [args.headerDescription]);

    useEffect(() => {
      if (args.showHeaderIcon !== undefined) setShowHeaderIcon(args.showHeaderIcon);
    }, [args.showHeaderIcon]);

    useEffect(() => {
      if (args.showCloseButton !== undefined) setShowCloseButton(args.showCloseButton);
    }, [args.showCloseButton]);

    useEffect(() => {
      if (args.contentType) setContentType(args.contentType);
    }, [args.contentType]);

    useEffect(() => {
      if (args.showCancel !== undefined) setShowCancel(args.showCancel);
    }, [args.showCancel]);

    useEffect(() => {
      if (args.showConfirm !== undefined) setShowConfirm(args.showConfirm);
    }, [args.showConfirm]);

    useEffect(() => {
      if (args.cancelText) setCancelText(args.cancelText);
    }, [args.cancelText]);

    useEffect(() => {
      if (args.confirmText) setConfirmText(args.confirmText);
    }, [args.confirmText]);

    const handleCancel = () => {
      console.log('Cancel clicked');
      setIsOpen(false);
    };

    const handleConfirm = () => {
      console.log('Confirm clicked');
      setIsOpen(false);
    };

    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal
          open={isOpen}
          onOpenChange={setIsOpen}
          size={args.size || 'md'}
          closeOnOverlayClick={args.closeOnOverlayClick !== undefined ? args.closeOnOverlayClick : true}
          closeOnEscape={args.closeOnEscape !== undefined ? args.closeOnEscape : true}
        >
          <ModalHeader
            title={headerTitle}
            description={headerDescription}
            icon={showHeaderIcon ? InfoIcon : undefined}
            showCloseButton={showCloseButton}
          />
          <ModalBody>
            {contentType === 'placeholder' && (
              <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
                <p className="text-sm text-slate-700">Replace Here</p>
              </div>
            )}
            {contentType === 'image' && (
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                  alt="Sample image"
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            )}
            {contentType === 'form' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    placeholder="Enter your message"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            )}
            {contentType === 'text' && (
              <div className="space-y-3">
                <p className="text-slate-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-slate-700">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-slate-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            )}
            {contentType === 'list' && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-md">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Item 1</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-md">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Item 2</span>
                </div>
                <div className="flex items-center gap-2 p-2 hover:bg-slate-50 rounded-md">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-700">Item 3</span>
                </div>
              </div>
            )}
          </ModalBody>
          <ModalFooter
            onCancel={showCancel ? handleCancel : undefined}
            onConfirm={showConfirm ? handleConfirm : undefined}
            onCancelText={cancelText}
            onConfirmText={confirmText}
          />
        </Modal>
      </div>
    );
  },
  args: {
    open: false,
    size: 'md',
    closeOnOverlayClick: true,
    closeOnEscape: true,
    headerTitle: 'Confirm Action',
    headerDescription: 'Are you sure you want to continue? This action cannot be undone.',
    showHeaderIcon: true,
    showCloseButton: true,
    contentType: 'placeholder',
    showCancel: true,
    showConfirm: true,
    cancelText: 'Cancel',
    confirmText: 'Continue',
  },
  argTypes: {
    headerTitle: { control: 'text', description: 'Title untuk ModalHeader' },
    headerDescription: { control: 'text', description: 'Description untuk ModalHeader' },
    showHeaderIcon: { control: 'boolean', description: 'Show icon di header' },
    showCloseButton: { control: 'boolean', description: 'Show close button di header' },
    contentType: {
      control: 'select',
      options: ['placeholder', 'image', 'form', 'text', 'list'],
      description: 'Jenis konten di ModalBody',
    },
    showCancel: { control: 'boolean', description: 'Show Cancel button di footer' },
    showConfirm: { control: 'boolean', description: 'Show Confirm button di footer' },
    cancelText: { control: 'text', description: 'Text untuk Cancel button' },
    confirmText: { control: 'text', description: 'Text untuk Confirm button' },
  },
};

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Title" description="Description" icon={InfoIcon} />
          <ModalBody>
            <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
              <p className="text-sm text-slate-700">Replace Here</p>
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    );
  },
};

export const WithImage: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal with Image
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Upload Image" description="Select an image to upload" icon={InfoIcon} />
          <ModalBody>
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
                alt="Sample image"
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
            onConfirmText="Upload"
          />
        </Modal>
      </div>
    );
  },
};

export const WithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal with Form
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Contact Us" description="Fill out the form below and we'll get back to you" icon={InfoIcon} />
          <ModalBody>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
            onConfirmText="Send"
          />
        </Modal>
      </div>
    );
  },
};

export const WithText: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal with Text
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Terms and Conditions" description="Please read the following terms carefully" icon={InfoIcon} />
          <ModalBody>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-slate-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-slate-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </ModalBody>
          <ModalFooter onConfirm={() => setIsOpen(false)} onConfirmText="I Agree" />
        </Modal>
      </div>
    );
  },
};

export const WithList: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal with List
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Select Item" description="Choose an item from the list below" icon={InfoIcon} />
          <ModalBody>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 flex-1">Item 1 - Description of item 1</span>
              </div>
              <div className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 flex-1">Item 2 - Description of item 2</span>
              </div>
              <div className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 flex-1">Item 3 - Description of item 3</span>
              </div>
              <div className="flex items-center gap-2 p-3 hover:bg-slate-50 rounded-md cursor-pointer border border-slate-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700 flex-1">Item 4 - Description of item 4</span>
              </div>
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
            onConfirmText="Select"
          />
        </Modal>
      </div>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Small Modal
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
          <ModalHeader title="Title" description="Description" icon={InfoIcon} />
          <ModalBody>
            <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
              <p className="text-sm text-slate-700">Replace Here</p>
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Large Modal
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="lg">
          <ModalHeader title="Title" description="Description" icon={InfoIcon} />
          <ModalBody>
            <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md min-h-[271px]">
              <p className="text-sm text-slate-700">Replace Here</p>
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    );
  },
};

export const CustomHeader: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal with Custom Header
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader>
            <div className="flex gap-2 items-center w-full">
              <div className="text-2xl">🎉</div>
              <div className="flex-1">
                <h2 className="font-semibold text-xl leading-none tracking-[-0.6px] text-slate-900">Custom Header</h2>
                <p className="mt-1 font-normal text-base leading-6 text-slate-500">This is a custom header using children</p>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
              <p className="text-sm text-slate-700">Replace Here</p>
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    );
  },
};

export const CustomFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal with Custom Footer
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Title" description="Description" icon={InfoIcon} />
          <ModalBody>
            <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
              <p className="text-sm text-slate-700">Replace Here</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="solid" color="danger" size="sm" onClick={() => setIsOpen(false)}>
              Delete
            </Button>
            <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="solid" size="sm" onClick={() => setIsOpen(false)}>
              Save
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  },
};

export const NoCloseButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal without Close Button
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Title" description="Description" icon={InfoIcon} showCloseButton={false} />
          <ModalBody>
            <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
              <p className="text-sm text-slate-700">Replace Here</p>
            </div>
          </ModalBody>
          <ModalFooter
            onCancel={() => setIsOpen(false)}
            onConfirm={() => setIsOpen(false)}
          />
        </Modal>
      </div>
    );
  },
};

export const OnlyConfirm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button variant="solid" size="sm" onClick={() => setIsOpen(true)}>
          Open Modal with Only Confirm
        </Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="md">
          <ModalHeader title="Success!" description="Your action has been completed successfully." icon={InfoIcon} />
          <ModalBody>
            <div className="bg-blue-50 border border-blue-500 border-dashed flex items-center justify-center px-2.5 py-12 rounded-md">
              <p className="text-sm text-slate-700">Replace Here</p>
            </div>
          </ModalBody>
          <ModalFooter onConfirm={() => setIsOpen(false)} onConfirmText="OK" />
        </Modal>
      </div>
    );
  },
};
