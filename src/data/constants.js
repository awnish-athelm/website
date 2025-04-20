// export const PhoneWidget = <a href="tel:+917838786377">(+91)7838-786377</a>;
export const PhoneWidget = ({text}) => <a href="tel:+917838786377">{text ?? "(+91)7838-786377"}</a>;