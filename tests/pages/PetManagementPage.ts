import { Page } from "@playwright/test";

export default class PetManagementPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async registerNewDog() {
		await this.page.getByRole("button", { name: "Registrations down" }).click();
		await this.page
			.getByRole("menuitem", { name: "Register a new dog" })
			.click();
	}
}
