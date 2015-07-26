import Ember from 'ember';
import ajax from 'ic-ajax';
import config from '../../config/environment';

export default Ember.Route.extend({
  model(params) {
    var url = `${config.api}/preposition/${params.word}`;
    return ajax(url);
  }
});
