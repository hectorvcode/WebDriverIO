/**
 * 1. Absolute path
 * html/body/div/div/form/input
 * 
 * 2. Absolute path
 * //input
 * 
 * 3. Direct child
 * //form/input
 * 
 * 4. Child element of any level
 * //body//input
 * 
 * 5. Search by text
 * //a[text()='Home’] OR //a[contains(text(),’Home')]
 * 
 * 6. Search by attributes
 * //input[@id=“myInput”] OR //div[@class=“someContainer”] OR //li[@alt=“Alternative”]
 * 
 * 7. Search by attribute name
 * //input[@id] OR //div[@class] OR //li[@alt]
 * 
 * 8. Search by parent element
 *///li[@alt]/.. (an item with id=menuwill be found)