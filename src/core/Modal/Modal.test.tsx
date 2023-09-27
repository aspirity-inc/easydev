import { FC } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { CloseButton, Modal, ModalBody, ModalFooter, ModalHeader, ModalProps } from '.';

const mockModalText = 'Modal text';

test('open, onClose', () => {
  const ModalComponent: FC<ModalProps> = ({ open, onClose }) => (
    <EasydevProvider>
      <Modal open={open} onClose={onClose}>
        <CloseButton onClick={onClose} />
        {mockModalText}
      </Modal>
    </EasydevProvider>
  );

  let open = true;
	
  const onClose = () => {
    open = !open;
  };
  const { rerender } = render(<ModalComponent open={open} onClose={onClose} />);

  const modalOpen = screen.getByText(mockModalText).parentNode;
  expect(modalOpen).toHaveAttribute('open');
  expect(modalOpen).not.toHaveStyleRule('opacity', '0');

  const closeBtn = screen.getByText('close');
  fireEvent.click(closeBtn as Element);

  rerender(<ModalComponent open={open} onClose={onClose} />);

  const modalClose = screen.getByText(mockModalText).parentNode;
  expect(modalClose).toHaveStyleRule('opacity', '0');
});

test('portal, click on gray screen to close ', async () => {
  const mockFn = vi.fn();

  const { container } = render(
    <div>
      <div id="id_portal" style={{ height: 400, width: 1000 }}>
        portal
      </div>
    </div>
  );

  const portal = container.querySelector('#id_portal');

  render(
    <EasydevProvider>
      <Modal open={true} onClose={mockFn} portal={portal} style={{ height: 200, width: 1000 }}>
        <CloseButton onClick={mockFn} />
        {mockModalText}
      </Modal>
    </EasydevProvider>
  );

  expect(portal?.querySelector('.easy_modal-item')).toBeInTheDocument();

  fireEvent.click(screen.getByText('portal').childNodes[1]);
  expect(mockFn).toBeCalledTimes(1);
});

test('modal content', () => {
  const mockFn = vi.fn();
  const { container } = render(
    <EasydevProvider>
      <Modal open={true} onClose={mockFn} portal={null}>
        <ModalHeader onClose={mockFn} />
        <ModalBody />
        <ModalFooter />
      </Modal>
    </EasydevProvider>
  );

  expect(container.querySelector('.easy_modal-header')).toBeInTheDocument();
  expect(container.querySelector('.easy_modal-body')).toBeInTheDocument();
  expect(container.querySelector('.easy_modal-footer')).toBeInTheDocument();
});
