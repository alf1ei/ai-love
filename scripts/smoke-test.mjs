import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

test("dashboard contains core product modules", () => {
  for (const label of [
    "Preference DNA",
    "Creator Intelligence",
    "Gift Budget Guard",
    "Conversation Copilot",
    "Compatibility Engine",
  ]) {
    assert.ok(html.includes(label), `missing module: ${label}`);
  }
});

test("demo enforces manual-only money and messaging boundaries", () => {
  assert.match(html, /不会真实支付|没有发生支付/);
  assert.match(html, /不会自动发送|不会自动发送消息|由你决定/);
});

test("dashboard includes local persistence and budget guard", () => {
  assert.match(html, /localStorage/);
  assert.match(html, /monthlyLimit/);
  assert.match(html, /超过月度预算上限/);
});

test("dashboard has responsive layout and accessible viewport", () => {
  assert.match(html, /name="viewport"/);
  assert.match(html, /@media\(max-width:650px\)/);
});
