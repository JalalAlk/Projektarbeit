import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests-examples',
  fullyParallel: true,
  forbidOnly: !!process.env.CI, 
  retries: process.env.CI ? 2 : 0, 
  workers: process.env.CI ? 1 : undefined, 
  reporter: 'html', 

  webServer: {
    command: 'npm run preview', 
    url: 'http://localhost:4321/', 
    timeout: 120 * 1000, 
    reuseExistingServer: !process.env.CI, 
  },

  use: {
    baseURL: 'http://localhost:4321/', 
    trace: 'on-first-retry',   
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'] }, 
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        launchOptions: {
          slowMo: 1000, 
        },
        video: 'on' 
      },
      timeout: 30 * 1000, 
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }, 
    },
  ],
};


export default config;