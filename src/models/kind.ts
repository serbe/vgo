// import React, { ChangeEvent } from 'react';

// import { FormField } from '../components/formfield';
// import { StringInputProperties } from '../components/input';
// import { Select, SelectValues } from '../components/select';

export interface Kind {
  id: number;
  name?: string;
  short_name?: string;
  note?: string;
}

export const KindEmpty: Kind = {
  id: 0,
};

export interface KindList {
  id: number;
  name?: string;
  short_name?: string;
  note?: string;
}

// export const KindNameInput = (properties: StringInputProperties): JSX.Element => (
//   <FormField
//     name="kind-name"
//     value={properties.value}
//     onChange={(event: ChangeEvent<HTMLInputElement>): void =>
//       properties.setter(event.target.value === '' ? undefined : event.target.value)
//     }
//     label="Наименование типа тренировки"
//     icon="tag"
//   />
// );

// export const KindShortNameInput = (properties: StringInputProperties): JSX.Element => (
//   <FormField
//     name="kind-short-name"
//     value={properties.value}
//     onChange={(event: ChangeEvent<HTMLInputElement>): void =>
//       properties.setter(event.target.value === '' ? undefined : event.target.value)
//     }
//     label="Сокращенное наименование"
//     icon="tag"
//   />
// );

// export const KindIDSelect = (properties: SelectValues): JSX.Element => (
//   <Select
//     name="kink-select"
//     label="Тип тренировки"
//     listName="KindSelect"
//     id={properties.id}
//     icon="tag"
//     setter={properties.setter}
//   />
// );
