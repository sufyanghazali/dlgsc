import { test } from "@playwright/test";
require("dotenv").config();
const path = require("path");
import { LoginPage, LandingPage, StartApplicationPage } from "../pages";
import fs from "fs";
  
// Load configuration from JSON file
const configPath = path.resolve(__dirname, "Config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
const envUrls = {
	preprod: {
		powerApps: "https://pets-wa-gov-au--petswatest.sandbox.my.salesforce.com/",
		crmDynamics: "",
	},
	test: {
		powerApps: "https://pets-wa-gov-au--petswatest.sandbox.my.salesforce.com/",
		crmDynamics: "",
	},
};
//Fetch env variable - default to pre-prod if not provided
const environment = (process.env.NODE_ENV || "preprod").trim().toLowerCase();
//Select the URLs based on the environments
const powerAppsUrl = envUrls[environment]?.powerApps;
const crmDynamicsUrl = envUrls[environment]?.crmDynamics;

test.describe("Dog registration", () => {
	test("test", async ({ page }) => {
		const loginPage = new LoginPage(page);
		const landingPage = new LandingPage(page);
		const startApplicationPage = new StartApplicationPage(page);

		await test.step("Navigate to the Website: Given the user wants to register their dog, when they navigate to the applications website, then the homepage should be displayed.", async () => {
			await loginPage.navigate(powerAppsUrl);
		});

		await test.step("Login to Salesforce Sandbox: Given the user is on the login page, when they enter their Salesforce Sandbox credentials and submit, then they should be logged into the Salesforce Sandbox environment.", async () => {
			await loginPage.loginToSalesforceSandbox(
				config.login.email,
				config.login.password
			);
		});

		await test.step("Start to Apply to Register Pets: Given the user is logged into the application, when they select the option to register a pet, then the pet registration process should begin.", async () => {
			await landingPage.startToApplyToRegisterPets();
		});

		await test.step("Verify Application Base Page: Given the user has started the pet registration process, when they access the application base page, then the page should display all necessary sections for pet registration.", async () => {
			await startApplicationPage.verifyApplicationBasePage();
		});

		await test.step("Start with Dog Registration: Given the user is on the application base page, when they choose to register a dog, then the dog registration form should be presented.", async () => {
			await startApplicationPage.startWithDogRegistration();
		});

		await test.step("Verify application steps on the Page: Given the user is filling out the registration form, when they access the form, then appropriate tabs for the applications steps should be displayed on the page.", async () => {
			await startApplicationPage.verifyApplicationStepsOnThePage();
		});

		await test.step("Fill Pet Details: Given the user is on the dog registration form, when they fill in the pet details section, then the information should be saved and ready for the next section.", async () => {
			await startApplicationPage.fillPetDetails();
		});

		await test.step("Fill Pet Activity Details: Given the user has completed the pet details, when they enter the details of the pet activity, then the information of the pet should be saved correctly.", async () => {
			await startApplicationPage.fillPetActivityDetails();
		});

		await test.step("Fill Owner Delegate: Given the user has completed the pet details, when they enter the details of the owner delegate, then the information of the delegate should be saved correctly.", async () => {
			await startApplicationPage.enterOwnerDelegate();
		});

		await test.step("Fill Microchipping Details: Given the user has completed the owner delegate details, when they enter the microchipping details of the pet, then the microchipping information of the pet should be saved correctly.", async () => {
			await startApplicationPage.enterMicrochippingDetails();
		});

		await test.step("Fill Pet Sterilisation Details: Given the user has completed the pet microchipping details, when they enter the Sterilisation details of the pet activity, then the Sterilisation information of the pet should be saved correctly.", async () => {
			await startApplicationPage.enterSterilisationDetails();
		});

		await test.step("Fill Pet Source Details: Given the user has completed the pet Sterilisation details, when they enter the details of the source of the pet, then the information of the source should be saved correctly.", async () => {
			await startApplicationPage.enterSourceofPetDetails();
		});

		await test.step("Complete Previous Conviction and Concession Card Information: Given the user has filled in the property details, when they provide information about previous convictions and concession cards, then this information should be recorded as part of the application.", async () => {
			await startApplicationPage.completePreviousConvictionAndConcessionCardInformation();
		});

		await test.step("Complete Registration Period Information: Given the user has filled in the Previous Conviction and Concession Card details, when they provide information about Registration period, then this information should be recorded as part of the application.", async () => {
			await startApplicationPage.selectRegistrationPeriod();
		});

		await test.step("Review and declare: Given the user has completed all sections of the registration form, when they review the information and submit the application, then the application should be successfully submitted for processing.", async () => {
			await startApplicationPage.reviewAndDeclare();
		});

		await test.step("Verify Application Submission: Given the user has completed all sections of the registration form, when they review the information and submit the application, then the application should be successfully submitted for processing.", async () => {
			await startApplicationPage.verifySuccessOrErrorMessage();
		});
	});
});
