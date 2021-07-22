export enum ECardVariant {
    bordered = 'bordered',
    primary = 'primary'
}

export interface ICard {
    width?: string;
    height?: string;
    variant?: ECardVariant,
    clickButton: () => void
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IUserAdress,
    phone: string;
    website: string;
    company: IUserCompany
}

export interface IUserAdress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IUserGeo
}

export  interface IUserGeo {
    lat: string;
    lng: string;
}

export interface IUserCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUserList {
    users?: IUser[];
}

export interface IUserProps {
    user: IUser;
}

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodoProps {
    todo: ITodo;
}

export interface IUserInfoPage {
    id: string;
}