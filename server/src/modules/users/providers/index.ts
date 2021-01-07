import { container } from 'tsyringe';

import IHashProvider from './hashProvider/models/IHashProvide';
import BCryptHashProvider from './hashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
