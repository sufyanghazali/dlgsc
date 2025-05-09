import { test as base } from "@playwright/test";
import SalesforcePage from "../pages/SalesforcePage";
import HomePage from "../pages/HomePage";
import PetManagementPage from "../pages/PetManagementPage";
import DogRegistrationPage from "../pages/DogRegistrationPage";

const test = base.extend<{ homePage: HomePage }>({
	homePage: async ({ page }, use) => {
		const salesforcePage = new SalesforcePage(page);
		await salesforcePage.navigate();
		await salesforcePage.login(
			"sufyan.ghazali@dlgsc.wa.gov.au.petswatest",
			"PlanitAutomation234%"
		);
		await salesforcePage.loginAsUser("Pet Owner Broome");
	},
});

test("test", async ({ homePage, page }) => {
	await homePage.clickPetManagementLink();

	const petManagementPage = new PetManagementPage(page);
	await petManagementPage.registerNewDog();

	const dogRegistrationPage = new DogRegistrationPage(page);
	await dogRegistrationPage.fillApplicationForm();
});
