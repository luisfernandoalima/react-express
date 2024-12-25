export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  handleChange: (value:string) => void
}


export interface FormsProps {
  title:string
}

export interface SubmitProps {
  text: string,
}