namespace com.invenio;
using { com.reuse } from './reuse';
using { cuid,temporal,managed } from '@sap/cds/common';



 context master {
    entity student:reuse.address{
        key id:reuse.Guid;
        name:String(32);
        class:Association to semester;
        backlog:Boolean;
        age:Int16;
    }

    entity semester{
        key id:reuse.Guid;
        semester:String(32);
        specilization:String(32);
        hod:String(80);
    }

    entity book{
        key id:reuse.Guid;
        name: String(80);
        author:String(90);
    }
 }

 context trans {
    entity subs: cuid,temporal,managed{
        student:Association to one master.student;
        book:Association to one master.book;
    }
 }