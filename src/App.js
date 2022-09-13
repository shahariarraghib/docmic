import './App.css';
import Home from './Components/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// custom style for this application
export const myTheme = createTheme({
  palette: {
    primary: {
      main: '#2D89FF',
    },
    secondary: {
      main: '#642DFF',
    },
    paragraph1: {
      main: '#575757',
    },
    textB: {
      secondary: '#1E1E1E',
    },
   white: {
      secondary: '#FFFFFF',
    },
  },

});

function App() {
  
  return (
    <ThemeProvider theme={myTheme}>
   
      <Home></Home>
    
    </ThemeProvider>
  );
}

export default App;
