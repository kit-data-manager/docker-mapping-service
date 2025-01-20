
export let ajaxBaseUrl = "http://localhost:8095";
export const keycloak = undefined;
/*export const keycloak = Keycloak({
    url: 'https://gateway.datamanager.kit.edu:8443/',
    realm: 'dem_testing',
    clientId: 'kitdm-services'
});*/
export const tags = [{ "name": "tag", "color": "red" }, { "name": "tag2", "color": "blue" }, { "name": "tag3", "color": "green" }];
/*export const showServiceUrl = true;*/

export const appDescription = {
    "app-logo": "./images/mapping_service.jpg",
    "app-title": "Mapping Service UI",
    "app-subtitle": "Extract metadata and map it to json."
};