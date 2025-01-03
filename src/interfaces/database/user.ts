import type { ObjectId } from "mongooat";
import type { SOCIAL_MEDIA_PROVIDER, USER_ROLE, USER_STATUS } from "../../constants.js";

export interface IUser {
    _id: ObjectId;
    name: string;
    email: string;
    password: string;
    phoneNumber?: string;
    role: USER_ROLE;
    status: USER_STATUS;
    avatarUrl: string;
    socialMediaAccounts: ISocialMediaAccount[];
}

export interface ISocialMediaAccount {
    provider: SOCIAL_MEDIA_PROVIDER;
    accountId: string;
}

export interface IUserProfile {
    _id: ObjectId;
    name: string;
    email: string;
    phoneNumber?: string;
}
