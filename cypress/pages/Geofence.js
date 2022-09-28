import { DashboardPageFields } from "../utilities/helper"
import { AddGFFields } from "../utilities/helper"
export class Geofence{
   
    createGeofence(name,location,description){
        
        cy.get(DashboardPageFields.mapSection).click()
        cy.get(DashboardPageFields.geofenceTab).click()
        cy.get(DashboardPageFields.addGFBtn).click()
        cy.get(DashboardPageFields.createGFItem).click()
        let GeoFenceName=name+(Math.random() + 1).toString(36).substring(7)
        cy.get(AddGFFields.GFName).type(GeoFenceName)
        cy.get(AddGFFields.location).type(location)
        cy.wait(10000)
        cy.get(AddGFFields.container).find(AddGFFields.selection).contains(location).click()
        cy.get(AddGFFields.checkbox).uncheck()
        cy.get(AddGFFields.description).type(description)
        cy.get(AddGFFields.saveBtn).click({force: true})
        cy.wait(10000)
        cy.get('.list-content .content-info [title="'+GeoFenceName+'"]',{timeout:30000}).should(($x) => {
            expect($x).to.be.visible;
        })

    }
}