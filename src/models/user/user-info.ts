import { Friend } from "../friend/friend";

export type UserInfo = {
    Id: number;
    Email: string;
    PhoneNumber: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    DateOfBirth: Date; 
    HashtagName: string;
    Gender: string;
    Language: string;
    Country: string;
    ProfileDescription: string;
    AvatarImage: string;
    CoverImage: string;
    AccountStatus: string;
    VerificationStatus: string;
    CreateAt: Date; 
    LastUpdate: Date; 
    LastActive: Date; 
    JobName: string;
    TimeZone: string;
    Friend: Friend; 
}