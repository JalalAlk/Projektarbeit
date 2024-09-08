import { test, expect } from '@playwright/test';

test('Homepage Tests › Überprüfung der Filmkarten', async ({ page }) => {
  // Gehe zur Startseite
  await page.goto('http://localhost:4321/');

  // Warte auf das Laden der Filmkarten
  await page.waitForSelector('.movie-grid');

  // Definiere die erwarteten Filme aus deiner Astrid-Datei
  const movies = [
    { title: "OPPENHEIMER", description: "Während des Zweiten Weltkriegs beauftragt Generalleutnant Leslie Groves Jr. den Physiker J. Robert Oppenheimer mit der federführenden Mitarbeit am streng geheimen Manhattan-Projekt: Oppenheimer und ein Team von Wissenschaftlern arbeiten jahrelang an der Entwicklung und Konstruktion der Atombombe" },
    { title: "Killers of the Flower Moon", description: "In den 1920er-Jahren werden Mitglieder des indianischen Stammes der Osage im Bundesstaat Oklahoma ermordet, nachdem auf ihrem Land Öl gefunden worden ist. Das löst eine groß angelegte Untersuchung einer völlig neuen Polizeieinheit, dem FBI, aus" },
    { title: "Titanic", description: "England, 1912: An Bord der Titanic, des größten Passagierschiffs der Welt, begegnen sich Rose, ein Mädchen der gehobenen Gesellschaft, und der mittellose Maler Jack. Als Jack beobachtet, wie Rose über die Reling klettert, um sich ins Meer zu stürzen, und ihren sicheren Tod abwenden kann" },
    // Fügen Sie weitere Filme hinzu, wie in Ihrer Astrid-Datei definiert
  ];

  // Iteriere über die Filme und überprüfe jede Filmkarte
  for (const movie of movies) {
    // Finde die Filmkarte basierend auf dem Titel
    const titleSelector = `.card-title:has-text("${movie.title}")`;
    const descriptionSelector = `.card-description:has-text("${movie.description}")`;

    // Warte darauf, dass die Elemente sichtbar sind
    await page.waitForSelector(titleSelector);
    await page.waitForSelector(descriptionSelector);

    // Überprüfe, ob die Elemente existieren und nicht null sind
    const titleElement = await page.$(titleSelector);
    const descriptionElement = await page.$(descriptionSelector);

    // Erwartungen prüfen
    expect(titleElement).toBeNull();
expect(descriptionElement).toBeTruthy();
  }
});