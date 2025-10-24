declare module 'virtual:starlight/user-config' {
    const config: {
      social?: Record<string, string> | Array<{
        icon: string;
        link?: string;
        href?: string;
        label?: string;
      }>;
      [key: string]: any;
    };
    export default config;
  }