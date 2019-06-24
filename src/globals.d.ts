declare module '*.jpg';
declare module '*.png';

declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module 'typography-theme-fairy-gates';
