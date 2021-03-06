const { ClassHelper, ClassBuilder, EventSystem, _setup, _log } = require('jcmp-stubs');

const typeHints = require('./typeHints');

/**
 * Provides a testing environment with generated stubs
 */
class TestEnvironment {
  /**
   * Creates a new test environment
   * 
   * @param {string} type stubs type (currently only server is supported)
   * @param {object} [options]
   * @param {number} [options.logLevel=0] - custom-logger log level
   */
  constructor(type = 'server', options = { logLevel: 0 }) {
    if (type !== 'server') {
      throw new Error(`stubs type ${type} is not supported.`);
    }

    /** @type {object} */ this.options = options;
    /** @type {ClassBuilder} */ this.classBuilder = null;
    /** @type {EventSystem} */ this.eventSystem = null;

    // set log level
    _log.config({ level: this.options.logLevel });

    this.generateStubs();
  }

  /**
   * Generates new stubs for the environment
   * 
   * @private
   */
  generateStubs() {
    this.classBuilder = ClassBuilder.fromDataObject(require(`./stubs-data/data_server.json`), typeHints);

    const events = require('./stubs-data/events_server.json');
    events.push(...require('./stubs-data/events_modules.json'));

    this.eventSystem = new EventSystem(this.classBuilder, events);
  }

  /**
   * Wrapper for Stubs setup function
   * 
   * @param {function} fn - callback for 'global' namespace function.
   */
  initializeEnvironment(fn) {
    _setup(this.classBuilder, this.eventSystem, fn);
  }
}

module.exports = { TestEnvironment };