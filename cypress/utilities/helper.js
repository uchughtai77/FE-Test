export const loginPageFields = {
    title:'h1#kc-page-title',
    username:'input#username',
    password:'input#password',
    loginButton:'input[name="login"][type="submit"]'
}
export const DashboardPageFields = {
    searchBar:'input[placeholder="Search assets, geofences or addresses"]',
    navToggle:'div.menu-toggle',
    mapSection:'.k-overflow-y-auto a.menu-item[href="/map"]',
    geofenceTab:'li[aria-label="Geofences"]',
    addGFBtn:'button[role="menu"][type="button"]',
    createGFItem:'ul[role="menu"] li.k-focus[role="menuitem"]',
    createGFForm:'div[aria-modal="true"][role="dialog"]',
    
    
}
export const AddGFFields = {
    GFName:'.name-container .k-state-empty .k-textbox .k-input-inner',
    location:'.global-search .k-input-inner[placeholder="Search"]',
    container:'div.category-container',
    selection:'.category-item-label',
    checkbox:'.k-form-field-checkbox-wrap [type="checkbox"]',
    GFType:'',
    description:'.k-textarea textarea.k-input-inner',
    saveBtn:'.k-dialog .k-button-solid-primary'
}
export const SettingsFields = {
    settingsSection:'a[href="/settings"] .k-text-ellipsis',
    rolesTab:'li.k-menu-item [href="/settings/roles"]',
    addRoleBtn:'.k-button-solid-primary[title="Add new"]',
    roleName:'.k-floating-label-container .k-input-inner',
    reportsToggle:'settings-roles-form:nth-child(2) kendo-switch',
    //reportsToggle:'.main-detail-container>div:nth-child(2)>form .accordion-container:nth-child(4) settings-roles-form:nth-child(2) kendo-switch',
    allCheckbox:'settings-roles-form:nth-child(2) settings-permission-form input',
    tripCheckbox:'settings-roles-form:nth-child(2) settings-permission-form:nth-child(5) input',
    saveBtn:'button.k-button-solid-primary'
}