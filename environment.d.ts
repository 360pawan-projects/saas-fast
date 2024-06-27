declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PRODUCT_LINK: string;
      SUPPORT_FORM_KEY: string;
      LEMONSQUEEZY_WEBHOOK_SECRET: string;
      SITE_URL: string;
      MONGODB_URI: string;
      INVITATION_TOKEN_SECRET: string;
      USEPLUNK_SECRET: string;
      GITHUB_TOKEN: string;
    }
  }
}

export {};
