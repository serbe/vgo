// import React, { ChangeEvent } from 'react';

// import { FormField } from '../components/formfield';
// import { NumberInputProperties, StringInputProperties } from '../components/input';
// import { Select, SelectValues } from '../components/select';

export interface SirenType {
  id: number;
  name?: string;
  radius?: number;
  note?: string;
}

export const SirenTypeEmpty: SirenType = {
  id: 0,
};

export interface SirenTypeList {
  id: number;
  name?: string;
  radius?: number;
  note?: string;
}

// export const SirenTypeIDSelect = (properties: SelectValues): JSX.Element => (
//   <Select
//     name="siren_type_id"
//     label="Тип сирены"
//     listName="SirenTypeSelect"
//     id={properties.id}
//     icon="tag"
//     setter={properties.setter}
//   />
// );

// export const SirenTypeNameInput = (properties: StringInputProperties): JSX.Element => (
//   <FormField
//     name="siren_type_name"
//     value={properties.value}
//     onChange={(event: ChangeEvent<HTMLInputElement>): void =>
//       properties.setter(event.target.value === '' ? undefined : event.target.value)
//     }
//     label="Тип сирены"
//     icon="tag"
//   />
// );

// export const SirenTypeRadiusInput = (properties: NumberInputProperties): JSX.Element => (
//   <FormField
//     name="siren_type_radius"
//     value={properties.value}
//     onChange={(event: ChangeEvent<HTMLInputElement>): void =>
//       properties.setter(Number(event.target.value))
//     }
//     label="Радиус действия"
//     icon="tag"
//   />
// );
