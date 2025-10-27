import axios from 'axios';
import { UserDTO, UserResponseDTO } from './dtos';

const BASE_URL = 'https://reqres.in/api/users';

async function getUser(id:number):Promise<UserDTO> {
    try {
        const response = await axios.get<UserResponseDTO>(`${BASE_URL}/${id}`);
        const user = response.data.data;
        return user;
    }   catch (error) {
        if (axios.isAxiosError(error)) {
        } else {
        }
    }
}
