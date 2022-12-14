interface IPost {
  uid: number,
  id: number,
  title: string,
  body: string
}

interface IUser {
  id: number,
  name: string, 
  username: string,
  email: string,
  address: IUserAddress,
}

interface IUserAddress {
  streer: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo,
  phone: string,
  website: string,
  company: ICompany
}

interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

interface IGeo {
  lat: string,
  lng: string  
}

export { IPost, IUser }