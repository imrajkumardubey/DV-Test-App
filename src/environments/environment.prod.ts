export const environment = {
  production: true,
  appUrl: '',
  server: {
      apiVersionPath: ``,
      apiBaseUrl: ``,
      imageHostingBaseUrl: ``,
      apiSecret: ``,
      apiSecretKeyName: `X-Authorization`,
      apiTokenKeyName: 'Authorization'
  },
  socialAuth: {
      google: {
          CLIENT_ID: '',
          CLIENT_SECRET: ''
      },
      linkedin: {
          CLIENT_ID: '',
          CLIENT_SECRET: ''
      },
      facebook: {
          CLIENT_ID: '',
          CLIENT_SECRET: ''
      }
  },
  googleMaps: {
      apiKey: ''
  }
};
