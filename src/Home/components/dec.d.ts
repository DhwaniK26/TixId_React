declare module "react-slick" {
    import { Component } from "react";
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      nextArrow?: React.ReactNode;
      prevArrow?: React.ReactNode;
      responsive?: Array<{ breakpoint: number; settings: Settings }>;
      // Add other props as needed
    }
  
    export default class Slider extends Component<Settings> {}
  }

  declare module '*.png' {
    const value: string;
    export default value;
  }
