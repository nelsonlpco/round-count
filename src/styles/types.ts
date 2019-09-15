import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string,
      mainDark: string,
      text: string,
    }
  }
}
