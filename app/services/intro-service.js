import Api from '../utils/api';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

export const Subject = new BehaviorSubject(false);

const IntroScreenService = {
  fetchIntroScreens() {
    return Api.get('/intro-screen/all').pipe(
      map(response => {
        return response.data.data;
      }),
    );
  },
};

export default IntroScreenService;
