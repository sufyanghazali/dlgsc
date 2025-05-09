import { Page } from "@playwright/test";

export default class SalesforcePage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async navigate() {
		await this.page.goto("/");
	}

	async login(email: string, password: string) {
		await this.page.getByRole("textbox", { name: "username" }).fill(email);
		await this.page.getByRole("textbox", { name: "password" }).fill(password);
		await this.page.getByRole("button", { name: "Log In to Sandbox" }).click();
	}

	async loginAsUser(accountName) {
		await this.page.getByRole("link", { name: "Account" }).click();
		await this.page
			.getByRole("button", { name: "Select a List View: Accounts" })
			.click();
		await this.page.getByRole("option", { name: "All Accounts" }).click();
		await this.page
			.getByRole("searchbox", { name: "Search this list..." })
			.fill(accountName);
		await this.page.keyboard.press("Enter");
		await this.page.getByRole("link", { name: accountName }).click();
		await this.page.getByRole("button", { name: "Show more actions" }).click();
		await this.page
			.getByRole("menuitem", { name: "Log in to Experience as User" })
			.click();
	}
}
