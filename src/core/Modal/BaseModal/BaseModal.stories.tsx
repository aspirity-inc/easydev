import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';

import { BaseModal } from '.';

const metaBaseModal: Meta<typeof BaseModal> = {
  title: 'Core/Modals/BaseModal',
  component: BaseModal,
  argTypes: {},
};
export default metaBaseModal;

const Template: StoryFn<typeof BaseModal> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <BaseModal {...args} open={open} onClose={handleClose}>
        {children}
      </BaseModal>
    </>
  );
};

const TemplatePortal: StoryFn<typeof BaseModal> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const portal = document.getElementById('portalElement');

  return (
    <>
      <Button onClick={handleOpen}>Open portal modal window</Button>
      <BaseModal {...args} open={open} onClose={handleClose} portal={portal}>
        {children}
      </BaseModal>
      <div
        id="portalElement"
        style={{ position: 'relative', border: '1px solid #aaa', padding: '12px', width: '600px', height: '300px' }}
      >
        Portal field
      </div>
    </>
  );
};

export const NoPortalModalWindow: StoryFn<typeof BaseModal> = Template.bind({});
NoPortalModalWindow.args = {
  children:
    'This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a whole chunk of information relating to their mortgage, for example.',
  closeBtn: true,
};

export const PortalModalWindow: StoryFn<typeof BaseModal> = TemplatePortal.bind({});
PortalModalWindow.args = {
  children:
    'This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a whole chunk of information relating to their mortgage, for example.',
  closeBtn: true,
};

// const TemplateEasydev: StoryFn<typeof Modal> = ({ ...args }) => {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const ModalImage = (
//     <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
//       rocket_launch
//     </div>
//   );

//   return (
//     <>
//       <Button onClick={handleOpen}>Open easydev modal window</Button>
//       <Modal {...args} open={open} onClose={handleClose}>
//         <ModalHeader closeBtn />
//         <ModalBody
//           image={ModalImage}
//           title="Window"
//           text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
//         out a whole chunk of information relating to their mortgage, for example."
//         />
//         <ModalFooter>
//           <Button size="sm" rounded="sm">
//             learn more
//           </Button>
//           <Button variant="secondary" size="sm" rounded="sm">
//             got it
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// };

// export const TemplateEasydevModal: StoryFn<typeof Modal> = TemplateEasydev.bind({});
// TemplateEasydevModal.args = {};

// const TemplateUser: StoryFn<typeof Modal> = ({ ...args }) => {
//   const [open, setOpen] = useState(false);

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleOpen = () => {
//     setOpen(true);
//   };

//   return (
//     <>
//       <Button onClick={handleOpen}>Open user modal window</Button>
//       <Modal {...args} open={open} onClose={handleClose}>
//         <ModalHeader closeBtn>Some extra title content</ModalHeader>
//         <ModalBody
//           title="Window"
//           text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
//         out a whole chunk of information relating to their mortgage, for example."
//         >
//           Some extra user content
//         </ModalBody>
//         <ModalFooter>
//           <Button size="lg" rounded="lg" onClick={handleClose}>
//             back to site
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// };

// export const TemplateUserModal: StoryFn<typeof Modal> = TemplateUser.bind({});
// TemplateUserModal.args = {};
