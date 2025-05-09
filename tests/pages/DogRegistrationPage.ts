import { Page } from "@playwright/test";

export default class DogRegistrationPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async startApplication() {
		await this.page.getByRole("button", { name: "Confirm details" }).click();
		await this.page.getByRole("textbox", { name: "Pet date of birth" }).click();
		await this.page.getByRole("button", { name: "Start application" }).click();
	}

	async fillApplicationForm() {
		// Pet details
		await this.page
			.locator("label")
			.filter({ hasText: "Same as owners home address" })
			.locator("span")
			.first()
			.click();

		await this.page
			.locator("label")
			.filter({ hasText: "Yes" })
			.locator("span")
			.first()
			.click();

		await this.page
			.getByRole("textbox", { name: "Total number of dogs at this" })
			.fill("1");

		await this.page.getByRole("textbox", { name: "Pet name" }).fill("Hachiko");
		await this.page
			.getByRole("textbox", { name: "Pet date of birth" })
			.fill("01/01/2000");

		await this.page.getByRole("combobox", { name: "Gender" }).click();
		await this.page.getByRole("option", { name: "Male", exact: true }).click();

		await this.page.getByRole("combobox", { name: "Primary breed" }).click();
		await this.page
			.getByRole("option", { name: "Akita Japanese", exact: true })
			.click();
		await this.page.getByRole("textbox", { name: "Colour" }).fill("White");

		await this.page.getByRole("button", { name: "Next" }).click();

		// Pet activity
		await this.page
			.getByRole("radiogroup", {
				name: "Is the dog declared dangerous under The Dog Act 1976?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("radiogroup", {
				name: "Is the dog to be kept as a commercial security dog?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("radiogroup", {
				name: "Is the dog kept for purposes of the crown?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("radiogroup", {
				name: "Is the dog an assistance dog?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("radiogroup", {
				name: "Is the dog used to drove or tend to stock?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();

		await this.page.getByRole("button", { name: "Next" }).click();

		await this.page
			.getByRole("radiogroup", {
				name: "Do you wish to provide a delegate for your dog?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();

		await this.page.getByRole("button", { name: "Next" }).click();

		// Microchipping
		await this.page
			.getByRole("radiogroup", {
				name: "Is your pet microchipped?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("combobox", {
				name: "Reason for not microchipping",
			})
			.click();
		await this.page
			.getByRole("option", { name: "Health/Welfare Impact", exact: true })
			.click();
		await this.page
			.getByRole("radiogroup", {
				name: "Is the exemption granted by a veterinarian?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page.getByRole("button", { name: "Next" }).click();

		// Sterilisation
		await this.page
			.getByRole("radiogroup", {
				name: "Is your pet sterilised?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("combobox", {
				name: "Reason for not sterilising",
			})
			.click();
		await this.page
			.getByRole("option", { name: "Health/Welfare Impact", exact: true })
			.click();
		await this.page
			.getByRole("radiogroup", {
				name: "Was the exemption granted by a veterinarian?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page.getByRole("button", { name: "Next" }).click();

		// Source of pet
		await this.page
			.getByRole("radiogroup", {
				name: "Was your pet acquired in Australia?",
			})
			.locator("label")
			.filter({ hasText: "Yea" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("combobox", {
				name: "State",
			})
			.click();
		await this.page
			.getByRole("option", { name: "Western Australia", exact: true })
			.click();
		await this.page
			.getByRole("combobox", {
				name: "Where did you get your pet?",
			})
			.click();
		await this.page
			.getByRole("option", { name: "Pet Shop", exact: true })
			.click();

		await this.page
			.getByRole("textbox", { name: "Business Name" })
			.fill("Petbarn");
		await this.page.getByRole("button", { name: "Next" }).click();

		// Previous convictions
		await this.page
			.getByRole("radiogroup", {
				name: "Do you have any convictions for offences against the Dog Act 1976, Cat Act 2011 or Animal Welfare Act 2002 in the past 3 years?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page
			.getByRole("radiogroup", {
				name: "Are you currently banned, or have you ever been banned, from owning or keeping a cat under the Cat Act 2011 section 74(1)(c), or a dog under the Dog Act 1976 section 46A(2), either permanently or for a period specified in the order?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page.getByRole("button", { name: "Next" }).click();

		// Concession card
		await this.page
			.getByRole("radiogroup", {
				name: "Do you hold a concession card?",
			})
			.locator("label")
			.filter({ hasText: "No" })
			.locator("span")
			.first()
			.click();
		await this.page.getByRole("button", { name: "Next" }).click();

    // Registration period
		await this.page
			.getByRole("radiogroup", {
				name: "How long do you want to register your pet for?",
			})
			.locator("label")
			.filter({ hasText: "1 year" })
			.locator("span")
			.nth(2)
			.click();
		await this.page.getByRole("button", { name: "Next" }).click();

    // Review and declare
		await this.page
			.locator("label")
			.filter({ hasText: "I have read and accept the declaration" })
			.locator("span")
			.first()
			.click();

		await this.page.getByRole("button", { name: "Submit" }).click();
	}
}
