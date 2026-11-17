import { expect, test } from '@playwright/test'

test('critical recruiter journey works', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Yousef Akmal/i })).toBeVisible()
  await expect(page.getByRole('link', { name: /Download CV/i }).first()).toHaveAttribute('href', '/assets/Yousef_Akmal_CV.pdf')
  await page.getByRole('button', { name: /60-sec recruiter view/i }).click()
  await expect(page.getByRole('dialog')).toContainText('350+ test cases')
  await page.getByRole('button', { name: /Close recruiter quick view/i }).click()
  const menu = page.getByRole('button', { name: /Toggle menu/i })
  if (await menu.isVisible()) await menu.click()
  await page.getByRole('link', { name: 'Projects', exact: true }).click()
  await expect(page.locator('#projects')).toBeInViewport()
})

test('project details expand and contact links are valid', async ({ page }) => {
  await page.goto('/#projects')
  await page.getByRole('button', { name: /View case details/i }).first().click()
  await expect(page.getByText('Repository or live demo not supplied.').first()).toBeVisible()
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(2)
  await expect(page.locator('a[href^="tel:"]')).toHaveCount(1)
})
