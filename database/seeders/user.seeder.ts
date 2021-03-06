import { User } from "modules/user/user.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateUser implements Seeder {
    async run(factory: Factory, connection: Connection): Promise<void> {
        await factory(User)().createMany(1);
    }
}