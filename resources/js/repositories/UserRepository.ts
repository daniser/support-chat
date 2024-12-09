import { AxiosRepository } from "@pinia-orm/axios";
import User from "@/models/User";

export default class UserRepository extends AxiosRepository<User> {
    use = User;

    static cursor = null;

    fetch = async (search?: string, fresh = false) => {
        if (fresh) UserRepository.cursor = null;
        const response = await this.api().get("/users", { params: { search, cursor: UserRepository.cursor } });
        UserRepository.cursor = response.response.data.meta.next_cursor;
        return response;
    };
}
