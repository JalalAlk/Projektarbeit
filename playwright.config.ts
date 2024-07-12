import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests-examples',
  fullyParallel: true,
  forbidOnly: !!process.env.CI, // Verbiete 'test.only' in der Testsuite, wenn CI aktiviert ist
  retries: process.env.CI ? 2 : 0, // Wiederholungsversuche für fehlgeschlagene Tests (auf 2 gesetzt, wenn CI aktiviert ist)
  workers: process.env.CI ? 1 : undefined, // Anzahl der Worker für parallele Ausführung (auf 1 gesetzt, wenn CI aktiviert ist)
  reporter: 'html', // Verwendeter Reporter für die Testergebnisse

  webServer: {
    command: 'npm run preview', // Befehl zum Starten des lokalen Webservers
    url: 'http://localhost:4321/', // URL des lokalen Webservers
    timeout: 120 * 1000, // Timeout für Anfragen an den Webserver (2 Minuten)
    reuseExistingServer: !process.env.CI, // Wiederverwendung eines bereits laufenden Webservers, wenn möglich (nicht in CI-Umgebung)
  },

  use: {
    baseURL: 'http://localhost:4321/', // Basis-URL für die Tests
    trace: 'on-first-retry', // Erfassen von Traces bei erster Wiederholung eines fehlgeschlagenen Tests
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }, // Konfiguration für Chromium (Desktop)
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }, // Konfiguration für Firefox (Desktop)
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }, // Konfiguration für WebKit (Desktop)
    },
  ],
};

export default config;