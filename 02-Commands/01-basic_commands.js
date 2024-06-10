/**
 * Basic Commands
 * WDIO browser commands are used to directly perform certain actions with the browser and elements on the web page. There are few examples of basic WDIO commands to interact with elements on the page
 */

/**
 * $()
 * The $ command is a short way to call the findElement command in order to fetch a single element on the page
 * Parameters
 * selector(String, Function, Matcher) - selector, JS Function or Matcher object to fetch a certain element
 */
const doctorsButton = await $("div[routerLink='/doctors']");

/**
 * $$()
 * The $ is a short way to call the findElements command in order to fetch multiple elements on the page similar to the $$ command from the browser scope. The difference when calling it from an element scope is that the driver will look within the children of that element
 * Parameters
 * selector (String, Function, Matcher) - selector, JS Function, or Matcher object to fetch multiple elements
 */
const doctorNames = await $$("div[routerLink='/doctors'] li");

/**
 * click()
 * This issues a WebDriver click commando for the selected elment, which generally scrools to and then clicks the selected element when no options are passed. When options object is passed it uses action class instead of webdriver click which give added capabilities like passing button type, coordinates, etc. By default, when using options a release action command is send after performing the click action pass option.skipRelease=true to skip this aciton
 * Parameter(object)
 * options.button(Number) - which mouse button should be clicked[0, "left", 1, "middle", 2, "right"]
 * options.x (Number) - the number of horizontal pixels from the center of an element
 * options.y(Number) - the number of vertical pixels from the center of an element
 */
const doctorsButton2 = await $("div[routerLink='/doctors'");
await doctorsButton2.click();

/**
 * setValue()
 * Send a sequence of key strokes to an element(clears value before). If the element doesn't need to be cleared first then use addValue. You can also use unicode characters like Left arrow of BAck spaced. WebdriverIO will take care of translating them into unicode characters. You'll find al supported characters there. To do that, the value hast to correspond to a key from the table. It can be disabled by setting translateToUnicode optional parameter to false
 * Parameters
 * value (string, number, Array.) - value to be added
 * options (optional) (CommandOptions) - command options (optional).
 */
const doctorNameInput = await $("#Name input");
await doctorNameInput.setValue("John Doe");

/**
 * addValue()
 * Add a value to an object found by given selector. You can also use unicode characters like Left arrow of Back space. WebdriverIO will take care of translating them into unicode characters. You will find all supported characters here. To do that, the value has to correspond to a key from the table. It can be disabled by setting translateToUnicode optional parameter to false
 * Parameters
 * value (string, number, Array.) - value to be added
 * options (optional) (CommandOptions) - command options (optional).
 */
const doctorNameInput2 = await $("#Name input");
await doctorNameInput2.addValue("John Doe");

/**
 * isDisplayed()
 * Returns true if the selected DOM-element is displayed
 */
const doctorNameInput3 = await $("#Name input");
await doctorNameInput3.isDisplayed(); //true or false

/**
 * isExisting()
 * Returns true if element exists in the DOM
 */
const doctorNameInput4 = await $("#Name input");
await doctorNameInput4.isExisting();

/**
 * waitForDisplayed()
 * Wait for an element for the provided amount of milliseconds to be displayed or not displayed
 * Parameter
 * options.timeout(optional) (Number) - time in ms (default:500)
 * options.reverse(optional) (Boolean) - if true it waits for the opposite(default:false)
 * options.timeoutMsg(optional) (String) - if exists it overrides the default error message
 * options.interval(optional) (Number) - interval between checks (default: waitforInterval)
 * $(selector).waitForDisplayed({ timeout, reverse, timeoutMsg, interval })
 */
const doctorNameInput5 = await $("#Name input");

await doctorNameInput5.waitForDisplayed();
await doctorNameInput5.waitForDisplayed({
  timeout: 3000,
  reverse: true,
  timeoutMsg: "Desired element did not disappear",
  interval: 300,
});

/**
 * waitForExist()
 * Wait for an element for the provided amount of milliseconds to be present within the DOM. Returns true if the selector matches at least one element that exists in the DOM, otherwise throws an error. If the reverse flag is true, the command will instead return true if the selector doesn't match any elements
 * Parameter
 * options.timeout (optional) (Number) - time in ms (default: 500)
 * options.reverse (optional) (Boolean) - if true it waits for the opposite (default: false)
 * options.timeoutMsg (optional) (String) - if exists it overrides the default error message
 * options.interval (optional) (Number) - interval between checks (default: waitforInterval)
 */
const doctorNameInput6 = await $('#Name input');

await doctorNameInput6.waitForExist();
await doctorNameInput6.waitForExist({
  timeout: 3000,
  reverse: true,
  timeoutMsg: 'Desired element did not disappear',
  interval:300
});
