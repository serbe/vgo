// import React, { ChangeEvent } from 'react';
// import { useHistory } from 'react-router-dom';

// import { DatePicker, DatePickerValues } from '../components/datepicker';
// import { FormField } from '../components/formfield';
// import { Input, StringInputProperties } from '../components/input';
// import { Select, SelectValues } from '../components/select';

// export interface ContactShortValues {
//   contacts: ContactShort[];
// }

// export interface ContactEducationsValues {
//   educations: string[];
// }

export interface Contact {
  id: number;
  name?: string;
  company_id?: number;
  department_id?: number;
  post_id?: number;
  post_go_id?: number;
  rank_id?: number;
  birthday?: string;
  note?: string;
  emails?: string[];
  phones?: number[];
  faxes?: number[];
  educations?: string[];
}

export const ContactEmpty: Contact = {
  id: 0,
};

export interface ContactList {
  id: number;
  name?: string;
  company_id?: number;
  company_name?: string;
  post_name?: string;
  phones?: number[];
  faxes?: number[];
}

export interface ContactShort {
  id: number;
  name?: string;
  department_name?: string;
  post_name?: string;
  post_go_name?: string;
}

// export const ContactNameInput = (properties: StringInputProperties): JSX.Element => (
//   <FormField
//     icon="user"
//     label="Фамилия Имя Отчество"
//     name="name"
//     onChange={(event: ChangeEvent<HTMLInputElement>): void =>
//       properties.setter(event.target.value === '' ? undefined : event.target.value)
//     }
//     value={properties.value}
//   />
// );

// export const ContactBirthdayInput = (properties: DatePickerValues): JSX.Element => (
//   <DatePicker
//     label="Дата рождения"
//     name="birthday"
//     setter={properties.setter}
//     value={properties.value}
//   />
// );

// export const ContactShortForm = (properties: ContactShortValues): JSX.Element => {
//   const history = useHistory();
//   return (
//     <div class="field" key="contacts">
//       <label class="label" htmlFor="contact-1">
//         Сотрудники
//       </label>
//       {properties.contacts.map((contact, index) => (
//         <Input
//           class="link"
//           classDiv="pb-1"
//           icon="user"
//           key={`contact-${index}`}
//           name={`contact-${index}`}
//           onClick={(): void => history.push(`/contacts/${contact.id}`)}
//           readonly
//           value={`${contact.name || ''} - ${contact.post_name || ''}`}
//         />
//       ))}
//     </div>
//   );
// };

// export const ContactIDSelect = (properties: SelectValues): JSX.Element => (
//   <Select
//     icon="user"
//     id={properties.id}
//     label="Фамилия Имя Отчество"
//     listName="ContactSelect"
//     name="contact"
//     setter={properties.setter}
//   />
// );

// export const ContactEducations = (properties: ContactEducationsValues): JSX.Element =>
//   properties.educations.length > 0 ? (
//     <div class="field">
//       <label class="label" htmlFor="education-1-input">
//         Даты обучения в УМЦ
//       </label>
//       {properties.educations.map((education, index) => (
//         <Input
//           name={`education-${index}-input`}
//           key={`education-${index}`}
//           value={education}
//           classDiv="pb-1"
//         />
//       ))}
//     </div>
//   ) : (
//     <></>
//   );
