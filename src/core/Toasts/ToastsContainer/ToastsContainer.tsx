import { useCallback, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

import { StyledContainer } from './styles';
import { notifyFunction } from './toastEmitters';
import { Toast } from '..';
import { ToastItemType, toastPositions } from '../types';

let TOAST_ID = 0;

type ToastContainerType = {
  limit?: number;
};

export const ToastContainer = ({ limit }: ToastContainerType) => {
  const [toasts, setToasts] = useState<ToastItemType[]>([]);
  const [visibleToasts, setVisibleToasts] = useState<ToastItemType[]>([]);

  useEffect(() => {
    notifyFunction((args: ToastItemType) => createToats(args));
  }, []);

  useEffect(() => {
    limit ? setVisibleToasts([...toasts.slice(0, limit)]) : setVisibleToasts([...toasts]);
  }, [toasts, limit]);

  const createToats = (args: ToastItemType) => {
    setToasts((prevToasts) => {
      return [
        ...prevToasts,
        {
          ...args,
          position: args.position || 'top-right',
          toastId: TOAST_ID++,
        },
      ];
    });
  };

  const deleteToasts = useCallback((id: number | undefined) => {
    setToasts((prevToasts) => {
      const filteredToasts = prevToasts.filter((toast) => toast.toastId !== id);
      return [...filteredToasts];
    });
  }, []);

  return createPortal(
    <>
      {toastPositions.map((pos) => {
        const filteredByPositionToasts = visibleToasts.filter((toast) => toast.position === pos);

        return filteredByPositionToasts.length ? (
          <StyledContainer $position={pos} key={pos}>
            {filteredByPositionToasts.map((toast) => (
              <Toast key={toast.toastId} {...toast} onDelete={deleteToasts} />
            ))}
          </StyledContainer>
        ) : null;
      })}
    </>,
    document.body
  );
};
