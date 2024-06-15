describe("execute", () => {
  beforeEach(async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
  });

  it("execute() with params", async () => {
    const doctor = await $("a[href='#/doctor-details/5']");
    await browser.execute(function (doctor) {
      doctor.style.border = "red solid 3px";
    }, doctor);
    await browser.pause(3000);
  });
});

/* describe("Test suite", () => {
  it("First test", async () => {
    await browser.url(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard"
    );
    const pageTitle = await browser.getTitle();

    //console.log("Titulo de pagina", pageTitle);

    expect(pageTitle).toEqual(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
  });

  it("Second test", async () => {
    await $("div.doctors").click();
    await $("//button[text()='Add New Doctor']").click();
    await $("input[name='Name']").setValue("John Doe");
    await $("//button[text()='Save']").click();
    
    const emailError = await $("label#Email-info");
    expect(await emailError.getText()).toEqual("Enter valid email");
  });
}); */
