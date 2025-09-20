import { test, expect } from '@playwright/test'

test.describe('Counter Application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('should display initial message', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('This is a counter application')
  })

  test('should increment counter', async ({ page }) => {
    const counterButton = page.locator('button').first()
    
    await expect(counterButton).toContainText('count is 0')
    await counterButton.click()
    await expect(counterButton).toContainText('count is 1')
    await counterButton.click()
    await expect(counterButton).toContainText('count is 2')
  })

  test('should edit count via modal', async ({ page }) => {
    // Open modal
    await page.locator('button:has-text("Edit count")').click()
    
    // Check modal is visible
    await expect(page.locator('.modal')).toBeVisible()
    
    // Edit value
    await page.locator('input[type="number"]').fill('42')
    await page.locator('button:has-text("Save")').click()
    
    // Verify count updated
    await expect(page.locator('button').first()).toContainText('count is 42')
  })
})
