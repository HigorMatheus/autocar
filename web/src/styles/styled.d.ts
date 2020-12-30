import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      titleInPrimary: string;
      textInputy: string;
      primarydark: string;
      border: string;
      textTitle: string;
      backgroundProduct: string;
      background: string;
      backgroundComplement: string;
      backgroundInput: string;
      borderInput: string;
      bgtext: string;
      textComplement: string;
      textBase: string;
      lineInWhite: string;
      inputBackground: string;
      buttonText: string;
      boxBase: string;
      boxFooter: string;
      smallInfo: string;
      backgroundNav: string;
    };
  }
}
