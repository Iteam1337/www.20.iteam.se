export class GuestRouter{
  heading = 'Guest Router';

  configureRouter(config, router){
    config.map([
      {
        route: '',
        moduleId: './list',
        nav: true,
        title: 'Guests'
      },
      {
        route: '/:id',
        name: 'details',
        moduleId: './details',
        title: 'Guest'
      }
    ]);

    this.router = router;
  }
}
