import { test } from "node:test";
import assert from "node:assert";
import { formatDuration, youtubeIdFromUrl, youtubeEmbedUrl } from "./format";
import { categoryOf } from "./catalog";

test("formatDuration", () => {
  assert.strictEqual(formatDuration(0), "—");
  assert.strictEqual(formatDuration(2598), "43min");
  assert.strictEqual(formatDuration(43 * 60), "43min");
  assert.strictEqual(formatDuration(2 * 3600 + 43 * 60), "2h43");
});

test("youtubeIdFromUrl", () => {
  assert.strictEqual(youtubeIdFromUrl("https://www.youtube.com/watch?v=1TBtJ8pTANQ"), "1TBtJ8pTANQ");
  assert.strictEqual(youtubeIdFromUrl("https://youtu.be/abc123def45"), "");
});

test("youtubeEmbedUrl", () => {
  assert.strictEqual(youtubeEmbedUrl("abc"), "https://www.youtube.com/embed/abc");
});

test("categoryOf", () => {
  assert.strictEqual(categoryOf("other_modules/air-quality/005-xyz"), "air-quality");
  assert.strictEqual(categoryOf("organized/self-paced/01-abc"), "self-paced");
});
