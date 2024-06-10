/**
 * The WDIO testrunner comes with a built in assertion library that allows you to make powerful assertions on various aspects of the browser or elements within your (web) application. It extends Jests Matchers functionality with additional, for e2e testing optimized, matchers (Consider these matchers when working with web-elements testing since they have built-in waiters).
 */

/**
 * toBeDisplayed
 * Calls isDisplayed on given element
 */
const elem = await $("#someElem");
await expect(elem).toBeDisplayed();

/**
 * toExist
 * Calls isExisting on given element
 */
const elem2 = await $("#someElem");
await expect(elem2).toExist();

/**
 * toBePresent
 * Same as toExist
 */
const elem3 = await $("#someElem");
await expect(elem3).toBePresent();

/**
 * toBeExisting
 * Same as toExist
 */
const elem4 = await $("#someElem");
await expect(elem4).toBeExisting();

/**
 * toBeFocused
 * Checks if element has focus. This assertion only works in a web context
 */
const elem5 = await $("#someElem");
await expect(elem5).toBeFocused();

/**
 * toHaveAttribute
 * Checks if an element has a certain attribute with a specific value
 */
const myInput = await $("input");
await expect(myInput).toHaveAttribute("class", "form-control");

/**
 * toHaveAttr
 * Same as toHaveAttribute
 */
const myInput2 = await $("input");
await expect(myInput2).toHaveAttr("class", "form-control");

/**
 * toHaveAttributeContaining
 * (Deprecated use expect.stringContaining())
 */
const myInput3 = await $("input");
await expect(myInput3).toHAveAttribute("class", expect.stringContaining("form"));

/**
 * toHaveText
 * Checks if element has a specific text. Can also be called with an array as parameter in the case where the element can have different texts
 */

await browser.url("https://webdriver.io/");
const elem6 = await $(".container");
await expect(elem6).toHaveText(
  "Next-gen browser and mobile automation test framework for Node.js"
);
await expect(elem6).toHaveText([
  "Next-gen browser and mobile automation test framework for Node.js",
  "Get Started",
]);

/**
 * toHaveTextContaining
 * (Deprecated use expect.stringContaining())
 */
await browser.url("https://webdriver.io");
await expect(browser).toHaveUrl(expect.stringContaining("webdriver"));
