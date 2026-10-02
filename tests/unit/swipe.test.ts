import { describe, expect, it } from "vitest";
import { directionFor, lockAxis, shouldCommit, targetFor } from "../../app/utils/swipe";

describe("lockAxis", () => {
  it("waits until the finger has travelled far enough", () => {
    expect(lockAxis(4, 3)).toBeNull();
  });

  it("locks to x when the move is clearly horizontal", () => {
    expect(lockAxis(30, 10)).toBe("x");
    expect(lockAxis(-30, 10)).toBe("x");
  });

  it("locks to y for vertical and ambiguous diagonal moves", () => {
    expect(lockAxis(5, 30)).toBe("y");
    expect(lockAxis(20, 20)).toBe("y");
  });
});

describe("directionFor", () => {
  it("maps a leftward swipe to the next section and a rightward one to the previous", () => {
    expect(directionFor(-50)).toBe("next");
    expect(directionFor(50)).toBe("prev");
  });
});

describe("targetFor", () => {
  it("walks the sections in PAGES order", () => {
    expect(targetFor("/", "next")).toBe("/projects");
    expect(targetFor("/projects", "next")).toBe("/blog");
    expect(targetFor("/blog", "next")).toBe("/about");
    expect(targetFor("/about", "prev")).toBe("/blog");
    expect(targetFor("/projects", "prev")).toBe("/");
  });

  it("does not wrap around at the ends", () => {
    expect(targetFor("/", "prev")).toBeNull();
    expect(targetFor("/about", "next")).toBeNull();
  });

  it("returns from a blog post to the blog index, and ignores a forward swipe there", () => {
    expect(targetFor("/blog/3", "prev")).toBe("/blog");
    expect(targetFor("/blog/3", "next")).toBeNull();
  });

  it("does nothing on a path outside the sections", () => {
    expect(targetFor("/nope", "next")).toBeNull();
    expect(targetFor("/nope", "prev")).toBeNull();
  });
});

describe("shouldCommit", () => {
  it("commits a long swipe in either direction", () => {
    expect(shouldCommit(-120, 0.1)).toBe(true);
    expect(shouldCommit(120, -0.1)).toBe(true);
  });

  it("ignores a short, slow drag", () => {
    expect(shouldCommit(-60, 0.1)).toBe(false);
  });

  it("commits a quick flick over a modest distance", () => {
    expect(shouldCommit(-50, -0.8)).toBe(true);
  });

  it("ignores a fast twitch with almost no travel", () => {
    expect(shouldCommit(-20, -1.2)).toBe(false);
  });
});
