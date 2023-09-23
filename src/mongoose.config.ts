import { MongooseModule } from '@nestjs/mongoose';

export const databaseProviders = [
  MongooseModule.forRoot(
    'mongodb+srv://abdulprogrammer5:Ayshahid@cluster0.3yxzzx0.mongodb.net/nest',
  ),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
];
