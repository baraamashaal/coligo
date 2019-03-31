import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette:{
    background:{
      default:'#fafafa',
      paper:"#fff"
    },
  },
  ui: {
    sidenav: {
      width: 240
    }
  }
});
