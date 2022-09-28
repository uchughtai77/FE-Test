import {Login} from '../pages/Login'
import { Role } from '../pages/Role';
import { Geofence } from '../pages/Geofence'
let data;
describe('e2e Fleet Test', () => {
  
  before(function () {
    cy.fixture('testData').then(function (testdata) {
        data = testdata;
    })
})
  it('automates the task one', () => {
    const login=new Login()
    login.navigate()
    login.validateHomePage(data.homePageText)
    login.loginUser(data.username,data.password)
    const geofence = new Geofence()
    geofence.createGeofence(data.GFName,data.GFLocation,data.GFdescription)
    const role = new Role()
    role.createRole(data.roleName)
    
  })
})