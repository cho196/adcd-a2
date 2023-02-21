import { test, expect } from "@playwright/test";
var weedsPage = "http://localhost:3000/weeds";

test.describe("Table tests", () => {
  test("Count table", async ({ page }) => {
    await page.goto(weedsPage);
    await expect(page.locator("table")).toHaveCount(1);
  });
  test("Count th", async ({ page }) => {
    await page.goto(weedsPage);
    await expect(page.locator("th")).toHaveCount(5);
  });
  test("Table vertical align", async ({ page }) => {
    await page.goto(weedsPage);
    const table = page.locator("table");
    const grabbedDisplay = await table.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("vertical-align");
    });
    expect(grabbedDisplay).toBe("top");
  });
  test("Table font size", async ({ page }) => {
    await page.goto(weedsPage);
    const table = page.locator("table");
    const grabbedBackground = await table.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("font-size");
    });
    expect(grabbedBackground).toBe("14px");
  });
  test("Table font color", async ({ page }) => {
    await page.goto(weedsPage);
    const table = page.locator("table");
    const grabbedFontColor = await table.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("color");
    });
    expect(grabbedFontColor).toBe("#000");
  });
  test("Table border", async ({ page }) => {
    await page.goto(weedsPage);
    const table = page.locator("table");
    const grabbedBorder = await table.evaluate((ele) => {
      return window.getComputedStyle(ele).getPropertyValue("border");
    });
    expect(grabbedBorder).toBe("1px solid #ccc");
  });
});
