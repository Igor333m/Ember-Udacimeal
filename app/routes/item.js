import Ember from 'ember';

export default Ember.Route.extend({
	model(param) {
		return Ember.$.get(`/menu/${param.item_name}.json`);
	}
});
