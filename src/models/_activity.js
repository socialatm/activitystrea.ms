'use strict';

const vocabs   = require('linkeddata-vocabs');
const utils    = require('../utils');
const AsObject = require('./_object');
const as = vocabs.as;
const xsd = vocabs.xsd;

class Activity extends AsObject {
  constructor(expanded, builder) {
    super(expanded, builder || Activity.Builder);
  }

  get actor() {
    return this.get(as.actor);
  }

  get object() {
    return this.get(as.object);
  }

  get target() {
    return this.get(as.target);
  }

  get result() {
    return this.get(as.result);
  }

  get origin() {
    return this.get(as.origin);
  }

  get instrument() {
    return this.get(as.instrument);
  }

}

class ActivityBuilder extends AsObject.Builder {
  constructor(types, base) {
    types = (types || []).concat([as.Activity]);
    super(types, base || new Activity({}));
  }

  actor(val) {
    this.set(as.actor, val);
    return this;
  }

  object(val) {
    this.set(as.object, val);
    return this;
  }

  target(val) {
    this.set(as.target, val);
    return this;
  }

  result(val) {
    this.set(as.result, val);
    return this;
  }

  origin(val) {
    this.set(as.origin, val);
    return this;
  }

  instrument(val) {
    this.set(as.instrument, val);
    return this;
  }

}
Activity.Builder = ActivityBuilder;

module.exports = Activity;
