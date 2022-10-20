declare interface IFirstCaCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'FirstCaCommandSetStrings' {
  const strings: IFirstCaCommandSetStrings;
  export = strings;
}
