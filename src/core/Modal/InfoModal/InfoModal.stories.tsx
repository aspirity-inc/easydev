import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';

import { InfoModal, ModalBody, ModalFooter, ModalHeader } from '.';

const metaInfoModal: Meta<typeof InfoModal> = {
  title: 'Core/Modals/InfoModal',
  component: InfoModal,
  argTypes: {},
};
export default metaInfoModal;

const Template: StoryFn<typeof InfoModal> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const ModalImage = (
    <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
      rocket_launch
    </div>
  );

  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <InfoModal {...args} open={open} onClose={handleClose}>
        <ModalHeader />
        <ModalBody
          image={ModalImage}
          title="Window"
          text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
        out a whole chunk of information relating to their mortgage, for example."
        />
        <ModalFooter
          footerContent={() => (
            <>
              <Button size="sm" rounded="sm">
                learn more
              </Button>
              <Button variant="secondary" size="sm" rounded="sm">
                got it
              </Button>
            </>
          )}
        />
      </InfoModal>
    </>
  );
};

const TemplatePortal: StoryFn<typeof InfoModal> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const ModalImage = (
    <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
      rocket_launch
    </div>
  );

  const portal = document.getElementById('portalElement');

  return (
    <>
      <Button onClick={handleOpen}>Open portal modal window</Button>
      <InfoModal {...args} open={open} onClose={handleClose} portal={portal}>
        <ModalHeader />
        <ModalBody
          image={ModalImage}
          title="Window"
          text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
        out a whole chunk of information relating to their mortgage, for example."
        />
        <ModalFooter
          footerContent={() => (
            <>
              <Button size="sm" rounded="sm">
                learn more
              </Button>
              <Button variant="secondary" size="sm" rounded="sm">
                got it
              </Button>
            </>
          )}
        />
      </InfoModal>
      <div
        id="portalElement"
        style={{ position: 'relative', border: '1px solid #aaa', padding: '12px', width: '800px', height: '600px' }}
      >
        Portal field
      </div>
    </>
  );
};

export const NoPortalInfoModal: StoryFn<typeof InfoModal> = Template.bind({});
NoPortalInfoModal.args = {};

export const PortalInfoModal: StoryFn<typeof InfoModal> = TemplatePortal.bind({});
PortalInfoModal.args = {};

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
