import AwnishKumarImage from '../assets/img/team/awnish_kumar.jpeg'
import NaliniJaiswalImage from '../assets/img/team/nalini_jaiswal.jpeg'
import PratikSabooImage from '../assets/img/team/pratik_saboo.jpeg'

class Person {
    constructor(full_name, image, role, description, social_links = {}) {
        this.full_name = full_name;
        this.image = image;
        this.role = role;
        this.description = description;
        this.social_links = social_links;
    }
}

export const TeamMembers = [
    new Person(
        "Awnish Kumar", 
        AwnishKumarImage, 
        "Founder & CEO",
        "",
        {
            facebook: "kumarawnish", 
            linkedin: "kumarawnish"
        }
    ),
    new Person(
        "Nalini Jaiswal", 
        NaliniJaiswalImage, 
        "Founder & Chief Legal Officer",
        "", {
            linkedin: "nalini-jaiswal"
        }
    ),
    new Person(
        "Pratik Saboo", 
        PratikSabooImage, 
        "Tech Evangelist",
        "",
        {
            linkedin: "pratik-saboo"
        }
    ),
]