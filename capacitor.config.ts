import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tahircreations.app',
  appName: 'Quick Test by Tahir',
  webDir: 'www',
  server: {
    androidScheme: 'https',
    cleartext: false,
    allowNavigation: ['*']
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#0f172a',
      androidScaleType: 'CENTER_CROP',
      showSpinner: true,
      spinnerColor: '#38bdf8'
    },
    StatusBar: {
      style: 'DARK',
      backgroundColor: '#0f172a',
      overlaysWebView: false
    }
  },
  android: {
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false
  }
};

export default config;
