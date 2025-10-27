type UserResponseDTO = {
    data: UserDTO;
    support: {
        url: string;
        text: string;
    };
};

type UserDTO = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export { UserDTO, UserResponseDTO };
