import { Page } from "@playwright/test";

export default class HomePage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async clickPetManagementLink() {
		await this.page.getByRole("link", { name: "Pet Management" }).click();
	}
}
