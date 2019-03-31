import { UiActionsTypes } from '../actions/ui-action';
const initialState = {
  isSidenavOpen: true,
  isMobile: false
};

export default (state = initialState, { type }) => {
  switch (type) {

    case UiActionsTypes.sidenav.open:
      return { isSidenavOpen: true };

    case UiActionsTypes.sidenav.close:
      return { isSidenavOpen: false };

    case UiActionsTypes.sidenav.toggle:
      return { isSidenavOpen: !state.isSidenavOpen };

    default:
      return state;
  }
};
