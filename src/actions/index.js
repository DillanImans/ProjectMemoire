export const currentLinkAction = (link) => {
  return {
    type: "CURRENT_LINK",
    payload: link
  }
}

export const modalOpeningAction = (openedModal) => {
  return {
    type: "MODAL_OPEN",
    payload: openedModal
  }
}