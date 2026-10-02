import { expect, test } from "@nuxt/test-utils/playwright";
import type { CDPSession } from "@playwright/test";

// Swiping is touch-only, so these run on the Pixel 7 project and skip on desktop.
test.skip(({ isMobile }) => !isMobile, "touch only");

type Point = { x: number; y: number };

// Real touch events through CDP, so the browser produces the pointer events the swipe listens to.
async function touchDrag(client: CDPSession, from: Point, to: Point, steps = 10) {
  const send = (type: string, touchPoints: Point[]) =>
    client.send("Input.dispatchTouchEvent", { type, touchPoints });

  await send("touchStart", [from]);
  for (let i = 1; i <= steps; i++) {
    await send("touchMove", [
      { x: from.x + ((to.x - from.x) * i) / steps, y: from.y + ((to.y - from.y) * i) / steps },
    ]);
    await new Promise((resolve) => setTimeout(resolve, 8));
  }
  await send("touchEnd", []);
}

test.describe("section swipe", () => {
  let client: CDPSession;
  let width: number;

  test.beforeEach(async ({ page, goto }) => {
    client = await page.context().newCDPSession(page);
    width = page.viewportSize()!.width;
    await goto("/", { waitUntil: "hydration" });
  });

  test("a swipe left moves to the next section", async ({ page }) => {
    await touchDrag(client, { x: width * 0.8, y: 400 }, { x: width * 0.2, y: 405 });
    await expect(page).toHaveURL(/\/projects$/);
  });

  test("a swipe right goes back", async ({ page, goto }) => {
    await goto("/projects", { waitUntil: "hydration" });
    await touchDrag(client, { x: width * 0.2, y: 400 }, { x: width * 0.8, y: 405 });
    await expect(page).toHaveURL(/\/$/);
  });

  test("a short drag does not navigate", async ({ page }) => {
    await touchDrag(client, { x: width * 0.6, y: 400 }, { x: width * 0.5, y: 402 });
    await expect(page).toHaveURL(/\/$/);
  });

  test("a vertical scroll does not navigate", async ({ page }) => {
    await touchDrag(client, { x: width * 0.5, y: 600 }, { x: width * 0.48, y: 200 });
    await expect(page).toHaveURL(/\/$/);
  });

  test("a touch starting at the screen edge is left to the browser", async ({ page }) => {
    await touchDrag(client, { x: 5, y: 400 }, { x: width * 0.9, y: 405 });
    await expect(page).toHaveURL(/\/$/);
  });

  test("the first section has nowhere to go to the right", async ({ page }) => {
    await touchDrag(client, { x: width * 0.2, y: 400 }, { x: width * 0.8, y: 405 });
    await expect(page).toHaveURL(/\/$/);
  });
});
