import axios from 'axios';
import Header from '../user/userHeader';
function Hospital() {
    return (
        <div className="hospital">
            <Header />
        </div>
    )
}

export default Hospital;
// "resourceType": "Patient",
//             "id": formData.account,
//             "text": {
//                 "status": "generated",
//                 "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody/></table></div>"
//             },
//             "identifier": [
//                 {
//                     "use": "usual",
//                     "assigner": {
//                         "display": formData.assigner,
//                     }
//                 }
//             ],
//             "name": [
//                 {
//                     "text": formData.name
//                 }
//             ],
//             "age": formData.age,
//             "address" : [
//                 {
//                     "use": "home",
//                     "text": formData.address
//                 }
//             ],
//             "telecom": [
//                 {
//                     "system": "phone",
//                     "value": formData.telecome.myPhone,
//                     "use": "mobile"
//                 }
//             ],
//             "gender": formData.gender,
//             "contact": [
//                 {
//                     "relationship":[
//                         {
//                             "text":formData.contact.relationship
//                         }
//                     ],
//                     "name": {
//                         "text": formData.contact.name
//                     },
//                     "gender": formData.contact.gender,
//                     "telecom": [
//                         {
//                             "system": "phone",
//                             "value": formData.contact.phone,
//                             "use": "mobile"
//                         }
//                     ],
//                     "address": [
//                         {
//                             "use":"home",
//                             "text": formData.contact.address
//                         }
//                     ]
//                 }
//             ],
//             "extension" : [
//                 {
//                     "url": "symptom",
//                     "valueString": formData.symptom
//                 },
//                 {
//                     "url": "comment",
//                     "valueString": formData.comment
//                 },
//                 {
//                     "url": "doctor",
//                     "valueString": formData.doctorName
//                 },
//                 {
//                     "url": "doctorAddr",
//                     "valueString": userAddr
//                 },
//                 {
//                     "url": "age",
//                     "valueString": formData.age
//                 }
//             ],
//             "generalPractitioner": {
//                 "reference": `Practitioner/${userAddr}`
//             }