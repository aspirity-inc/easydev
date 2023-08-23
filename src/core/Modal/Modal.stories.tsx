import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';

import { Modal } from './Modal';
import { ModalBody } from './ModalBody';
import { StyledImage, StyledTitle, StyledText } from './ModalBody/styles';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

const metaBaseModal: Meta<typeof Modal> = {
  title: 'Core/Modal/Modal',
  component: Modal,
};
export default metaBaseModal;

const Template: StoryFn<typeof Modal> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <Modal {...args} open={open} onClose={handleClose}>
        {children}
      </Modal>
    </>
  );
};

const TemplatePortal: StoryFn<typeof Modal> = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const portal = document.getElementById('portalElement');

  return (
    <>
      <Button onClick={handleOpen}>Open portal modal window</Button>
      <Modal {...args} open={open} onClose={handleClose} portal={portal}>
        {children}
      </Modal>
      <div
        id="portalElement"
        style={{ position: 'relative', border: '1px solid #aaa', padding: '12px', width: '600px', height: '300px' }}
      >
        Portal field
      </div>
    </>
  );
};

const TemplateNoPortalWithModalElements: StoryFn<typeof Modal> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const ModalImage = (
    <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
      rocket_launch
    </div>
  );

  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <Modal {...args} open={open} onClose={handleClose}>
        <ModalBody>
          <StyledImage>{ModalImage}</StyledImage>
          <StyledTitle variant="h3">Window</StyledTitle>
          <StyledText variant="body3">
            This information could be helpful for streamlining the rest of the process, preventing the user having to
            fill out a whole chunk of information relating to their mortgage, for example.
          </StyledText>
        </ModalBody>
        <ModalFooter>
          <>
            <Button size="sm" rounded="sm">
              learn more
            </Button>
            <Button variant="secondary" size="sm" rounded="sm">
              got it
            </Button>
          </>
        </ModalFooter>
      </Modal>
    </>
  );
};

const TemplateNoPortalWithCustomBgColor: StoryFn<typeof Modal> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const ModalImage = (
    <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
      rocket_launch
    </div>
  );

  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <Modal {...args} open={open} onClose={handleClose}>
        <ModalHeader onClose={handleClose} />
        <ModalBody>
          <StyledImage>{ModalImage}</StyledImage>
          <StyledTitle variant="h3">Window</StyledTitle>
          <StyledText variant="body3" centered>
            This information could be helpful for streamlining the rest of the process, preventing the user having to
            fill out a whole chunk of information relating to their mortgage, for example.
          </StyledText>
        </ModalBody>
        <ModalFooter>
          <>
            <Button size="sm" rounded="sm">
              learn more
            </Button>
            <Button variant="secondary" size="sm" rounded="sm">
              got it
            </Button>
          </>
        </ModalFooter>
      </Modal>
    </>
  );
};

export const NoPortalModalWindow: StoryFn<typeof Modal> = Template.bind({});
NoPortalModalWindow.args = {
  children:
    'This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a whole chunk of information relating to their mortgage, for example.',
  closeBtn: true,
  portal: null,
};

export const PortalModalWindow: StoryFn<typeof Modal> = TemplatePortal.bind({});
PortalModalWindow.args = {
  children:
    'This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a whole chunk of information relating to their mortgage, for example.',
  closeBtn: true,
};

export const NoPortalModalWindowWithModalElements: StoryFn<typeof Modal> = TemplateNoPortalWithModalElements.bind({});
NoPortalModalWindowWithModalElements.args = {
  closeBtn: true,
  portal: null,
};

export const NoPortalModalWindowWithCustomBgColor: StoryFn<typeof Modal> = TemplateNoPortalWithCustomBgColor.bind({});
NoPortalModalWindowWithCustomBgColor.args = {
  closeBtn: false,
  portal: null,
  bgColor: 'lightblue',
};
