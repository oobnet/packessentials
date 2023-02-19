import { z } from 'zod';

const userShemma = z.object({
    name: z.string().min(3,{message: 'O nome precisa de 3 caracteres'}),
    age: z.number().min(18, {message: 'Idade minima de 18 anos'})
})

type User = z.infer<typeof userShemma>

function userToAddDataBase(user: User){
   try {
    const {name,age} = userShemma.parse(user)

    console.log(name,age)
   } catch (error) {
    console.log('error')
   }
    
};

userToAddDataBase({
    name:'odair',age: 3
});
