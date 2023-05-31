import apiClient from "js-tenancy-core/api/client";

const formsEndpoint = '/forms';
const getAvailableForms = () => apiClient.get(formsEndpoint);

export default {
    getAvailableForms
}