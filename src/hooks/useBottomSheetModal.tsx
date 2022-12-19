import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';

export function useBottomSheetModal() {
  const reference = useRef<BottomSheetModal>(null);
  const showModal = useCallback(() => {
    reference.current?.present();
  }, []);
  return { reference, showModal };
}
