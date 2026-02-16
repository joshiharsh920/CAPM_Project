using { anubhav.db.master, anubhav.db.transaction } from '../db/datamodel';

service CatalogService @(path:'CatalogService'){
    entity EmployeeSet as projection on master.employees;
}
