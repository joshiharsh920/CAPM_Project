using { anubhav.db.master } from '../db/datamodel';


service MyService @(path:'MyService'){
    function hello(name:String) returns String;

// @readonly
@Capabilities : { Readable:true, }
entity ProjectEmployee as projection on master.employees;
}

