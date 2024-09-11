import { test, expect } from '@playwright/test';

test('Homepage Tests › Überprüfung der Filmkarten', async ({ page }) => {
  
  await page.goto('http://localhost:4321/');

  
  await page.waitForSelector('.movie-grid');

  
  const movies = [
    { title: "OPPENHEIMER", description: "Während des Zweiten Weltkriegs beauftragt Generalleutnant Leslie Groves Jr. den Physiker J. Robert Oppenheimer mit der federführenden Mitarbeit am streng geheimen Manhattan-Projekt: Oppenheimer und ein Team von Wissenschaftlern arbeiten jahrelang an der Entwicklung und Konstruktion der Atombombe" },
    { title: "Killers of the Flower Moon", description: "In den 1920er-Jahren werden Mitglieder des indianischen Stammes der Osage im Bundesstaat Oklahoma ermordet, nachdem auf ihrem Land Öl gefunden worden ist. Das löst eine groß angelegte Untersuchung einer völlig neuen Polizeieinheit, dem FBI, aus" },
    { title: "Titanic", description: "England, 1912: An Bord der Titanic, des größten Passagierschiffs der Welt, begegnen sich Rose, ein Mädchen der gehobenen Gesellschaft, und der mittellose Maler Jack. Als Jack beobachtet, wie Rose über die Reling klettert, um sich ins Meer zu stürzen, und ihren sicheren Tod abwenden kann" },
    
  ];

  
  for (const movie of movies) {
    
    const titleSelector = `.card-title:has-text("${movie.title}")`;
    const descriptionSelector = `.card-description:has-text("${movie.description}")`;

    
    await page.waitForSelector(titleSelector);
    await page.waitForSelector(descriptionSelector);

    
    const titleElement = await page.$(titleSelector);
    const descriptionElement = await page.$(descriptionSelector);

    
    expect(titleElement).toBeTruthy();
    expect(descriptionElement).toBeTruthy();
  }
});