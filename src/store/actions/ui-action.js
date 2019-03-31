export const UiActionsTypes = {
  sidenav: {
    open: 'OPEN_SIDENAV',
    close: 'CLOSE_SIDENAV',
    toggle: 'TOGGLE_SIDENAV'
  }
};

// export const UiActionsCreators = {
//   sidenav: {
//     open: () => ({
//       type: UiActionsTypes.sidenav.open
//     }),
//     close: () => ({
//       type: UiActionsTypes.sidenav.close
//     }),
//     toggle: () => ({
//       type: UiActionsTypes.sidenav.toggle
//     })
//   }
// };

export const openSidenav = () => ({
  type: UiActionsTypes.sidenav.open
});
export const closeSidenav = () => ({
  type: UiActionsTypes.sidenav.close
});
export const toggleSidenav = () => ({
  type: UiActionsTypes.sidenav.toggle
});

// export const toggleSidenav = () => dispatch => {
//   setTimeout(() => {
//     dispatch(togglesSidenav());
//   }, 2000);
// }
