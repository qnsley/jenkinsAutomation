import { test, expect } from '@playwright/test';

test.describe('running a pipeline test with Jenkins @jenkins', () => {
  test('Validate todo list buttons', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');

    // enter two intems into todo page
    const enterTodo = await page.getByPlaceholder('What needs to be done?');
    enterTodo.fill('JJ Abrams')
    enterTodo.press('Enter')
    enterTodo.fill('JJ Scar')
    enterTodo.press('Enter')

    // mark items as done
    const markDone = await page.getByTestId('todo-item').nth(0)

    // validate those 2 items have been marked
    markDone.getByLabel('Toggle Todo').check()

    await expect(markDone).toHaveClass('completed');
  });
})
