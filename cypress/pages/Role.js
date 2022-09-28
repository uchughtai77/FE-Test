import { SettingsFields } from "../utilities/helper";
export class Role {
    createRole(name){
        cy.get(SettingsFields.settingsSection).click()
        cy.wait(10000)
        cy.get(SettingsFields.rolesTab).click()
        cy.get(SettingsFields.addRoleBtn).click()
        let roleName=name+(Math.random() + 1).toString(36).substring(7)
        cy.get(SettingsFields.roleName).type(roleName)
        cy.get(SettingsFields.reportsToggle).click()
        cy.get(SettingsFields.allCheckbox).each(($el, index, list) => {
            cy.wrap($el).uncheck()
        });
        cy.get(SettingsFields.tripCheckbox).check()
        cy.get(SettingsFields.saveBtn).contains("Save").click()
    }
}