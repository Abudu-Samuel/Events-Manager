import user from './user';
import event from './event';
import center from './center';

const Router = (app) => {
    app.use('/api/v1/users', user);
    app.use('/api/v1/events', event);
    app.use('/api/v1/centers', center);
};

export default Router;