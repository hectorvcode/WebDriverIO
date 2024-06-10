/**
 * $()
 * The $ command is a short way to call the findElement command in order to fetch a single element on the page
 * Parameters:
 * selector(String, Function, Matcher) - selector, JS Function or matcher object to fetch a certain element
 * const doctorsButton = await $("div[routerLink='/doctors']");
 */

/**
 * $$()
 * The $ is a short way to call the findElements command in order to fetch multiple elements on the page similar to the $$ command from the browser scope. The difference when calling it from an elment scope is that the driver will look within the children of that element
 * Parameters
 * selector (String, Function, Matcher) - selector, JS Function, or Matcher object to fetch multiple elements
 * const doctorNames = await $$("div[routerLink='/doctors'] li");
 */

