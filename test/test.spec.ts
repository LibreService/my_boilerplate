import { expect, test } from '@playwright/test'

const baseURL = 'http://localhost:4173/'

test('', async ({ page }) => {
  await page.goto(baseURL)

  await expect(page.locator('#container')).toHaveText('2')
})
