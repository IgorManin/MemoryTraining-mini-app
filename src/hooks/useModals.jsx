import React from 'react';

// export const MODALS = {
//   ModalPage: 'modalPage',
//   ModalCard: 'modalCard',
// };
//
// export const MODALS_CONTENT_COMPONENTS = {
//   losingModal: LosingModal,
// };
//
// export const useModals = () => {
//   const [{ id, type, props }, setActiveModal] = useState({
//     type: null,
//   });
//
//   const Content = MODALS_CONTENT_COMPONENTS[id];
//
//   const goModal = (modalId, props) => {
//     if (modalId) {
//       setActiveModal({ type: MODALS.ModalCard, id: modalId, props });
//     } else {
//       setActiveModal({ type: null });
//     }
//     console.log(type);
//   };
//
//   return {
//     goModal,
//     type,
//     content: <Content {...props} />,
//   };
// };
