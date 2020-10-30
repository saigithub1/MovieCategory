/** UIRouter Config Function  */
import {UIRouter} from '@uirouter/core';
import { visualizer } from '@uirouter/visualizer';
import {Injector} from '@angular/core';


// tslint:disable-next-line:typedef
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  // Configure the initial state
  // If the browser URL doesn't matches any state when the router starts,
  // go to the `allMoviesState` state by default
  router.urlService.rules.initial({ state: 'allmovies' });

  // Use @uirouter/visualizer to show the states and transitions
  visualizer(router);
}
