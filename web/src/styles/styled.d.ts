import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      li: string;
      text: string;
      inputColor: string;
      inputPlaceholder: string;
      strongSchedule: string;
      productBackground: string;
      dayPicker: string;
      dayAvailableBackground: string;
      dayAvailableBackgroundHover: string;
      background: string;
      productBackground: string;
      primaryLighter: string;
      primaryLight: string;
      primary: string;
      primaryDark: string;
      primaryDarker: string;
      secondary: string;
      secondaryDark: string;
      titleInPrimary: string;
      textInPrimary: string;
      textTitle: string;
      textComplement: string;
      textBase: string;
      lineInWhite: string;
      inputBackground: string;
      buttonText: string;
      boxBase: string;
      boxFooter: string;
      smallInfo: string;
    };
  }
}
