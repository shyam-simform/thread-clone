import * as z from 'zod'

export const UserValidattion = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3, {message: "Minimum 3 Characters is required"}).max(25),
    username: z.string().min(3, {message: "Minimum 3 Characters is required"}).max(25),
    bio: z.string().min(3, {message: "Minimum 3 Characters is required"}).max(25),
})