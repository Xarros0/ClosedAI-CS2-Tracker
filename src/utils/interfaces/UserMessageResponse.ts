import { UserOutput } from "./UserOutput";

export default interface UserMessageResponse {
    user?: UserOutput;
    message: string;
}