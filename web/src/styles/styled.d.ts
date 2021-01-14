import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      text: string;
      textInPrimary: string;
      textTitle: string;
      textComplement: string;
      textBase: string;
      inputColor: string;
      inputPlaceholder: string;
      inputBackground: string;
      backgroundNav: string;
      productBackground: string;
      productPrice: string;
      buttonText: string;
      buttonBackground: string;
      isErrorred: string;
      isFocused: string;
    };
  }
}
