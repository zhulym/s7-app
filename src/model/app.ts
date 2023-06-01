
export interface IContactData {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export interface IProfileForm {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  city: string;
  country: string;
}

export interface IPieData {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface IGeographyData {
  id: string;
  value: number;
}

export interface IPoint {
  x: string;
  y: number;
}

export interface ITag {
  [key: string]: boolean;
}

export interface IRenderData {
  id: string;
  color: string;
  data: IPoint[];
}

export interface ILinesState {
  linesData?: Array<string[]>;
  isParsing: boolean;
  pointsAmount: number;
  tags: ITag;
}
