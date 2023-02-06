export declare interface Config {
  hostname?: string;
  port: number;
  pages: { [key: string]: string };
  externals: { [key: string]: string };
}
