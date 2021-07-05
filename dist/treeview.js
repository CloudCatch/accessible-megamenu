var Treeview = (function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * Check to see if the provided elements have a specific contructor.
   *
   * The values must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * This is essentially just a wrapper function around checking instanceof with
   * more descriptive error message to help debugging.
   *
   * Will return true is the check is successful.
   *
   * @param   {object} contructor - The constructor to check for.
   * @param   {object} elements   - The element(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */
  function isValidInstance(contructor, elements) {
    try {
      if (_typeof(elements) !== "object") {
        var elementsType = _typeof(elements);

        throw new TypeError("AccessibleMenu: Elements given to isValidInstance() must be inside of an object. ".concat(elementsType, " given."));
      }

      for (var key in elements) {
        if (!(elements[key] instanceof contructor)) {
          var elementType = _typeof(elements[key]);

          throw new TypeError("AccessibleMenu: ".concat(key, " must be an instance of ").concat(contructor.name, ". ").concat(elementType, " given."));
        }
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * Check to see if the provided values are of a specific type.
   *
   * The values must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * This is essentially just a wrapper function around checking typeof with
   * more descriptive error message to help debugging.
   *
   * Will return true is the check is successful.
   *
   * @param   {string} type   - The type to check for.
   * @param   {object} values - The value(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */

  function isValidType(type, values) {
    try {
      if (_typeof(values) !== "object") {
        var valuesType = _typeof(values);

        throw new TypeError("AccessibleMenu: Values given to isValidType() must be inside of an object. ".concat(valuesType, " given."));
      }

      for (var key in values) {
        var valueType = _typeof(values[key]);

        if (valueType !== type) {
          throw new TypeError("AccessibleMenu: ".concat(key, " must be a ").concat(type, ". ").concat(valueType, " given."));
        }
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * Checks to see if the provided values are valid CSS selectors.
   *
   * The values must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * Will return true is the check is successful.
   *
   * @param   {object.<string>} values - The value(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */

  function isCSSSelector(values) {
    try {
      if (_typeof(values) !== "object") {
        var type = _typeof(values);

        throw new TypeError("AccessibleMenu: Values given to isCSSSelector() must be inside of an object. ".concat(type, " given."));
      }

      for (var key in values) {
        try {
          if (values[key] === null) {
            throw new Error();
          }

          document.querySelector(values[key]);
        } catch (error) {
          throw new TypeError("AccessibleMenu: ".concat(key, " must be a valid CSS selector. \"").concat(values[key], "\" given."));
        }
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * Checks to see if the provided value is either a string or an array of strings.
   *
   * The values must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * Will return true is the check is successful.
   *
   * @param   {object.<string,string[]>} values - The value(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */

  function isValidClassList(values) {
    try {
      if (_typeof(values) !== "object" || Array.isArray(values)) {
        var type = _typeof(values);

        throw new TypeError("AccessibleMenu: Values given to isValidClassList() must be inside of an object. ".concat(type, " given."));
      }

      var _loop = function _loop(key) {
        var type = _typeof(values[key]);

        if (type !== "string") {
          if (Array.isArray(values[key])) {
            values[key].forEach(function (value) {
              if (typeof value !== "string") {
                throw new TypeError("AccessibleMenu: ".concat(key, " must be a string or an array of strings. An array containing non-strings given."));
              }
            });
          } else {
            throw new TypeError("AccessibleMenu: ".concat(key, " must be a string or an array of strings. ").concat(type, " given."));
          }
        } else {
          var obj = {};
          obj[key] = values[key];
          isCSSSelector(obj);
        }
      };

      for (var key in values) {
        _loop(key);
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * Check to see if the provided values are valid focus states for a menu.
   *
   * The values must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * Will return true is the check is successful.
   *
   * @param   {object.<string>} values - The value(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */

  function isValidState(values) {
    try {
      if (_typeof(values) !== "object") {
        var type = _typeof(values);

        throw new TypeError("AccessibleMenu: Values given to isValidState() must be inside of an object. ".concat(type, " given."));
      }

      var validStates = ["none", "self", "child"];

      for (var key in values) {
        if (!validStates.includes(values[key])) {
          throw new TypeError("AccessibleMenu: ".concat(key, " must be one of the following values: ").concat(validStates.join(", "), ". \"").concat(values[key], "\" given."));
        }
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * Check to see if the provided values are valid event types for a menu.
   *
   * The values must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * Will return true is the check is successful.
   *
   * @param   {object.<string>} values - The value(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */

  function isValidEvent(values) {
    try {
      if (_typeof(values) !== "object") {
        var type = _typeof(values);

        throw new TypeError("AccessibleMenu: Values given to isValidEvent() must be inside of an object. ".concat(type, " given."));
      }

      var validEvents = ["none", "mouse", "keyboard", "character"];

      for (var key in values) {
        if (!validEvents.includes(values[key])) {
          throw new TypeError("AccessibleMenu: ".concat(key, " must be one of the following values: ").concat(validEvents.join(", "), ". \"").concat(values[key], "\" given."));
        }
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * Check to see if the provided values are valid hover types for a menu.
   *
   * The values must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * Will return true is the check is successful.
   *
   * @param   {object.<string>} values - The value(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */

  function isValidHoverType(values) {
    try {
      if (_typeof(values) !== "object") {
        var type = _typeof(values);

        throw new TypeError("AccessibleMenu: Values given to isValidHoverType() must be inside of an object. ".concat(type, " given."));
      }

      var validTypes = ["off", "on", "dynamic"];

      for (var key in values) {
        if (!validTypes.includes(values[key])) {
          throw new TypeError("AccessibleMenu: ".concat(key, " must be one of the following values: ").concat(validTypes.join(", "), ". \"").concat(values[key], "\" given."));
        }
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  /**
   * Checks to see if the provided elements are using a specific tag.
   *
   * The elements must be provided inside of an object
   * so the variable name can be retrieved in case of errors.
   *
   * @param   {string}               tagName  - The name of the tag.
   * @param   {object.<HTMLElement>} elements - The element(s) to check.
   *
   * @returns {boolean} - The result of the check.
   */

  function isTag(tagName, elements) {
    if (isValidType("string", {
      tagName: tagName
    }) && isValidInstance(HTMLElement, elements)) {
      var tag = tagName.toLowerCase();
      var check = true;

      for (var key in elements) {
        if (elements[key].tagName.toLowerCase() !== tag) check = false;
      }

      return check;
    } else {
      return false;
    }
  }
  /**
   * Checks to see if an event is supported by a node.
   *
   * @param   {string}      event   - The event type.
   * @param   {HTMLElement} element - The element to check.
   *
   * @returns {boolean} - The result.
   */

  function isEventSupported(event, element) {
    if (isValidType("string", {
      event: event
    }) && isValidInstance(HTMLElement, {
      element: element
    })) {
      var eventProp = "on".concat(event);
      return typeof element[eventProp] !== "undefined";
    } else {
      return false;
    }
  }

  /**
   * A link or button that controls the visibility of a {@link BaseMenu}.
   */

  var BaseMenuToggle = /*#__PURE__*/function () {
    /**
     * @inheritdoc
     *
     * @param {object}        options                     - The options for generating the menu toggle.
     * @param {HTMLElement}   options.menuToggleElement   - The toggle element in the DOM.
     * @param {HTMLElement}   options.parentElement       - The element containing the controlled menu.
     * @param {BaseMenu}      options.controlledMenu      - The menu controlled by this toggle.
     * @param {BaseMenu|null} [options.parentMenu = null] - The menu containing this toggle.
     */
    function BaseMenuToggle(_ref) {
      var menuToggleElement = _ref.menuToggleElement,
          parentElement = _ref.parentElement,
          controlledMenu = _ref.controlledMenu,
          _ref$parentMenu = _ref.parentMenu,
          parentMenu = _ref$parentMenu === void 0 ? null : _ref$parentMenu;

      _classCallCheck(this, BaseMenuToggle);

      this.domElements = {
        toggle: menuToggleElement,
        parent: parentElement
      };
      this.menuElements = {
        controlledMenu: controlledMenu,
        parentMenu: parentMenu
      };
      this.isOpen = false;
      /**
       * Expand event.
       *
       * @event accessibleMenuExpand
       * @type {CustomEvent}
       * @property {object<BaseMenuToggle>} details - The details object containing the BaseMenuToggle itself.
       */

      this.expandEvent = new CustomEvent("accessibleMenuExpand", {
        bubbles: true,
        detail: {
          toggle: this
        }
      });
      /**
       * Collapse event.
       *
       * @event accessibleMenuCollapse
       * @type {CustomEvent}
       * @property {object<BaseMenuToggle>} details - The details object containing the BaseMenuToggle itself.
       */

      this.collapseEvent = new CustomEvent("accessibleMenuCollapse", {
        bubbles: true,
        detail: {
          toggle: this
        }
      });
    }
    /**
     * Initializes the menu toggle.
     *
     * Initialize does a lot of setup on the menu toggle.
     *
     * The most basic setup steps are to ensure that the toggle has `aria-haspopup`
     * set to "true", `aria-expanded` initially set to "false" and, if the toggle
     * element is not a `<button>`, set the `role` to "button".
     *
     * The next step to the initialization is to ensure both the toggle and the
     * menu it controlls have IDs.
     *
     * If they do not, the following steps take place:
     * - Generate a random 10 character string,
     * - Get the innerText of the toggle,
     * - Set the toggle's ID to: `${toggle-inner-text}-${the-random-string}-menu-button`
     * - Set the menu's ID to: `${toggle-inner-text}-${the-random-string}-menu`
     *
     * Once the ID's have been generated, the menu's `aria-labelledby` is set to
     * the toggle's ID, and the toggle's `aria-controls` is set to the menu's ID.
     *
     * Finally, the collapse method is called to make sure the submenu is closed.
     */


    _createClass(BaseMenuToggle, [{
      key: "initialize",
      value: function initialize() {
        // Add WAI-ARIA properties.
        this.dom.toggle.setAttribute("aria-haspopup", "true");
        this.dom.toggle.setAttribute("aria-expanded", "false"); // If the toggle element is a button, there's no need to add a role.

        if (!isTag("button", {
          toggle: this.dom.toggle
        })) {
          this.dom.toggle.setAttribute("role", "button");
        } // Ensure both toggle and menu have IDs.


        if (this.dom.toggle.id === "" || this.elements.controlledMenu.dom.menu.id === "") {
          var randomString = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 10);
          var id = this.dom.toggle.innerText.replace(/[^a-zA-Z0-9\s]/g, "");
          var finalID = randomString;

          if (!id.replace(/\s/g, "").length && this.dom.toggle.getAttribute("aria-label")) {
            id = this.dom.toggle.getAttribute("aria-label").replace(/[^a-zA-Z0-9\s]/g, "");
          }

          if (id.replace(/\s/g, "").length > 0) {
            id = id.toLowerCase().replace(/\s+/g, "-");

            if (id.startsWith("-")) {
              id = id.substring(1);
            }

            if (id.endsWith("-")) {
              id = id.slice(0, -1);
            }

            finalID = "".concat(id, "-").concat(finalID);
          }

          this.dom.toggle.id = this.dom.toggle.id || "".concat(finalID, "-menu-button");
          this.elements.controlledMenu.dom.menu.id = this.elements.controlledMenu.dom.menu.id || "".concat(finalID, "-menu");
        } // Set up proper aria label and control.


        this.elements.controlledMenu.dom.menu.setAttribute("aria-labelledby", this.dom.toggle.id);
        this.dom.toggle.setAttribute("aria-controls", this.elements.controlledMenu.dom.menu.id); // Make sure the menu is collapsed on initialization, but do not emit the collapse event.

        this.collapse(false);
      }
      /**
       * The DOM elements within the toggle.
       *
       * @type {object.<HTMLElement>}
       * @property {HTMLElement} toggle - The menu toggle.
       * @property {HTMLElement} parent - The menu containing this toggle.
       */

    }, {
      key: "dom",
      get: function get() {
        return this.domElements;
      }
      /**
       * The declared accessible-menu elements within the menu toggle.
       *
       * @type {object.<BaseMenu>}
       * @property {BaseMenu} controlledMenu - The menu controlled by this toggle.
       * @property {BaseMenu} parentMenu     - The menu containing this toggle.
       */

    }, {
      key: "elements",
      get: function get() {
        return this.menuElements;
      }
      /**
       * The open state on the menu.
       *
       * @type {boolean}
       */

    }, {
      key: "isOpen",
      get: function get() {
        return this.show;
      },
      set: function set(value) {
        isValidType("boolean", {
          value: value
        });
        this.show = value;
      }
      /**
       * Expands the controlled menu.
       *
       * Sets the toggle's `aria-expanded` to "true", adds the
       * {@link BaseMenu#openClass|open class} to the toggle's parent menu item
       * and controlled menu, and removed the {@link BaseMenu#closeClass|closed class}
       * from the toggle's parent menu item and controlled menu.
       *
       * If `emit` is set to `true`, this will also emit a custom event
       * called {@link accessibleMenuExpand}
       *
       * @param {boolean} [emit = true] - A toggle to emit the expand event once expanded.
       * @fires accessibleMenuExpand
       */

    }, {
      key: "expand",
      value: function expand() {
        var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var _this$elements$contro = this.elements.controlledMenu,
            closeClass = _this$elements$contro.closeClass,
            openClass = _this$elements$contro.openClass;
        this.dom.toggle.setAttribute("aria-expanded", "true"); // Add the open class

        if (openClass !== "") {
          if (typeof openClass === "string") {
            this.elements.controlledMenu.dom.menu.classList.add(openClass);
          } else {
            var _this$elements$contro2;

            (_this$elements$contro2 = this.elements.controlledMenu.dom.menu.classList).add.apply(_this$elements$contro2, _toConsumableArray(openClass));
          }
        } // Remove the close class.


        if (closeClass !== "") {
          if (typeof closeClass === "string") {
            this.elements.controlledMenu.dom.menu.classList.remove(closeClass);
          } else {
            var _this$elements$contro3;

            (_this$elements$contro3 = this.elements.controlledMenu.dom.menu.classList).remove.apply(_this$elements$contro3, _toConsumableArray(closeClass));
          }
        }

        if (emit) {
          this.dom.toggle.dispatchEvent(this.expandEvent);
        }
      }
      /**
       * Collapses the controlled menu.
       *
       * Sets the toggle's `aria-expanded` to "false", adds the
       * {@link BaseMenu#closeClass|closed class} to the toggle's parent menu item
       * and controlled menu, and removes the {@link BaseMenu#openClass|open class}
       * from the toggle's parent menu item and controlled menu.
       *
       * If `emit` is set to `true`, this will also emit a custom event
       * called {@link accessibleMenuCollapse}
       *
       * @param {boolean} [emit = true] - A toggle to emit the collapse event once collapsed.
       * @fires accessibleMenuCollapse
       */

    }, {
      key: "collapse",
      value: function collapse() {
        var emit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var _this$elements$contro4 = this.elements.controlledMenu,
            closeClass = _this$elements$contro4.closeClass,
            openClass = _this$elements$contro4.openClass;
        this.dom.toggle.setAttribute("aria-expanded", "false"); // Add the close class

        if (closeClass !== "") {
          if (typeof closeClass === "string") {
            this.elements.controlledMenu.dom.menu.classList.add(closeClass);
          } else {
            var _this$elements$contro5;

            (_this$elements$contro5 = this.elements.controlledMenu.dom.menu.classList).add.apply(_this$elements$contro5, _toConsumableArray(closeClass));
          }
        } // Remove the open class.


        if (openClass !== "") {
          if (typeof openClass === "string") {
            this.elements.controlledMenu.dom.menu.classList.remove(openClass);
          } else {
            var _this$elements$contro6;

            (_this$elements$contro6 = this.elements.controlledMenu.dom.menu.classList).remove.apply(_this$elements$contro6, _toConsumableArray(openClass));
          }
        }

        if (emit) {
          this.dom.toggle.dispatchEvent(this.collapseEvent);
        }
      }
      /**
       * Opens the controlled menu.
       *
       * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "self"
       * and the parent menu's focus state to "child", calls {@link BaseMenuToggle#expand|expand},
       * and sets the {@link BaseMenuToggle#isOpen|isOpen} value to `true`.
       */

    }, {
      key: "open",
      value: function open() {
        // Set proper focus states to parent & child.
        if (this.elements.parentMenu) {
          this.elements.parentMenu.focusState = "child";
        }

        this.elements.controlledMenu.focusState = "self"; // Expand the controlled menu.

        this.expand(); // Set the open flag.

        this.isOpen = true;
      }
      /**
       * Opens the controlled menu without the current focus entering it.
       *
       * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "self"
       * and the parent menu's focus state to "child",
       * and calls {@link BaseMenuToggle#expand|expand}.
       */

    }, {
      key: "preview",
      value: function preview() {
        // Set proper focus states to parent & child.
        if (this.elements.parentMenu) {
          this.elements.parentMenu.focusState = "self";
        }

        this.elements.controlledMenu.focusState = "none"; // Expand the controlled menu.

        this.expand(); // Set the open flag.

        this.isOpen = true;
      }
      /**
       * Closes the controlled menu.
       *
       * Sets the controlled menu's {@link BaseMenu#focusState|focus state} to "none"
       * and the parent menu's focus state to "self", blurs the controlled menu
       * and sets it's {@link BaseMenu#currentChild|current child index} to 0,
       * calls {@link BaseMenuToggle#collapse|collapse}, and sets
       * the {@link BaseMenuToggle#isOpen|isOpen} value to `false`.
       */

    }, {
      key: "close",
      value: function close() {
        if (this.isOpen) {
          // Reset controlled menu.
          this.elements.controlledMenu.currentChild = 0;
          this.elements.controlledMenu.blur(); // Set proper focus states to parent & child.

          if (this.elements.parentMenu) {
            this.elements.parentMenu.focusState = "self";
          }

          this.elements.controlledMenu.focusState = "none"; // Collapse the controlled menu.

          this.collapse(); // Set the open flag.

          this.isOpen = false;
        }
      }
      /**
       * Toggles the open state of the controlled menu between `true` and `false`.
       */

    }, {
      key: "toggle",
      value: function toggle() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
      /**
       * Closes all sibling menus.
       */

    }, {
      key: "closeSiblings",
      value: function closeSiblings() {
        var _this = this;

        if (this.elements.parentMenu) {
          this.elements.parentMenu.elements.submenuToggles.forEach(function (toggle) {
            if (toggle !== _this) toggle.close();
          });
        }
      }
      /**
       * Closes all child menus.
       */

    }, {
      key: "closeChildren",
      value: function closeChildren() {
        this.elements.controlledMenu.elements.submenuToggles.forEach(function (toggle) {
          return toggle.close();
        });
      }
    }]);

    return BaseMenuToggle;
  }();

  /* eslint-disable jsdoc/no-undefined-types */

  /**
   * A basic navigation link contained inside of a {@link BaseMenu}.
   */
  var BaseMenuItem = /*#__PURE__*/function () {
    /**
     * @inheritdoc
     *
     * @param {object}          options                         - The options for generating the menu item.
     * @param {HTMLElement}     options.menuItemElement         - The menu item in the DOM.
     * @param {HTMLElement}     options.menuLinkElement         - The menu item's link in the DOM.
     * @param {BaseMenu}        options.parentMenu              - The parent menu.
     * @param {boolean}         [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
     * @param {?BaseMenu}       [options.childMenu = null]      - The child menu.
     * @param {?BaseMenuToggle} [options.toggle = null]         - The controller for the child menu.
     */
    function BaseMenuItem(_ref) {
      var menuItemElement = _ref.menuItemElement,
          menuLinkElement = _ref.menuLinkElement,
          parentMenu = _ref.parentMenu,
          _ref$isSubmenuItem = _ref.isSubmenuItem,
          isSubmenuItem = _ref$isSubmenuItem === void 0 ? false : _ref$isSubmenuItem,
          _ref$childMenu = _ref.childMenu,
          childMenu = _ref$childMenu === void 0 ? null : _ref$childMenu,
          _ref$toggle = _ref.toggle,
          toggle = _ref$toggle === void 0 ? null : _ref$toggle;

      _classCallCheck(this, BaseMenuItem);

      this.domElements = {
        item: menuItemElement,
        link: menuLinkElement
      };
      this.menuElements = {
        parentMenu: parentMenu,
        childMenu: childMenu,
        toggle: toggle
      };
      this.isController = isSubmenuItem;
    }
    /**
     * Initialize the menu item.
     */


    _createClass(BaseMenuItem, [{
      key: "initialize",
      value: function initialize() {}
      /**
       * The DOM elements within the menu item.
       *
       * @type {object.<HTMLElement>}
       * @property {HTMLElement} item - The menu item.
       * @property {HTMLElement} link - The menu item's link.
       */

    }, {
      key: "dom",
      get: function get() {
        return this.domElements;
      }
      /**
       * The declared accessible-menu elements within the menu item.
       *
       * @type {object.<BaseMenu,BaseMenuToggle>}
       * @property {BaseMenu}        parentMenu - The menu containing this menu item.
       * @property {?BaseMenu}       childMenu  - The menu contained within this menu item.
       * @property {?BaseMenuToggle} toggle     - The menu toggle within this menu item that controls the `childMenu`.
       */

    }, {
      key: "elements",
      get: function get() {
        return this.menuElements;
      }
      /**
       * A flag marking a submenu item.
       *
       * @type {boolean}
       */

    }, {
      key: "isSubmenuItem",
      get: function get() {
        return this.isController;
      }
      /**
       * Focuses the menu item's link if the parent menu's
       * {@link BaseMenu#shouldFocus|shouldFocus} value is `true`.
       */

    }, {
      key: "focus",
      value: function focus() {
        if (this.elements.parentMenu.shouldFocus) {
          this.dom.link.focus();
        }
      }
      /**
       * Blurs the menu item's link if the parent menu's
       * {@link BaseMenu#shouldFocus|shouldFocus} value is `true`.
       */

    }, {
      key: "blur",
      value: function blur() {
        if (this.elements.parentMenu.shouldFocus) {
          this.dom.link.blur();
        }
      }
    }]);

    return BaseMenuItem;
  }();

  /**
   * Retrieves the pressed key from an event.
   *
   * @param   {KeyboardEvent} event - The keyboard event.
   *
   * @returns {string} - The name of the key or an empty string.
   */
  function keyPress(event) {
    try {
      // Use event.key or event.keyCode to support older browsers.
      var key = event.key || event.keyCode;
      var keys = {
        Enter: key === "Enter" || key === 13,
        Space: key === " " || key === "Spacebar" || key === 32,
        Escape: key === "Escape" || key === "Esc" || key === 27,
        ArrowUp: key === "ArrowUp" || key === "Up" || key === 38,
        ArrowRight: key === "ArrowRight" || key === "Right" || key === 39,
        ArrowDown: key === "ArrowDown" || key === "Down" || key === 40,
        ArrowLeft: key === "ArrowLeft" || key === "Left" || key === 37,
        Home: key === "Home" || key === 36,
        End: key === "End" || key === 35,
        Character: isNaN(key) && !!key.match(/^[a-zA-Z]{1}$/),
        Tab: key === "Tab" || key === 9,
        Asterisk: key === "*" || key === 56
      };
      return Object.keys(keys).find(function (key) {
        return keys[key] === true;
      }) || "";
    } catch (error) {
      // Return an empty string if something goes wrong.
      return "";
    }
  }
  /**
   * Stops an event from taking action.
   *
   * @param {Event} event - The event.
   */

  function preventEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * An accessible navigation element in the DOM.
   *
   * This is intended to be used as a "base" to other menus and not to be used on
   * it's own in the DOM.
   *
   * Use a {@link DisclosureMenu}, {@link Menubar}, or {@link Treeview} instead.
   */

  var BaseMenu = /*#__PURE__*/function () {
    /**
     * @inheritdoc
     *
     * @param {object}                 options                             - The options for generating the menu.
     * @param {HTMLElement}            options.menuElement                 - The menu element in the DOM.
     * @param {string}                 [options.menuItemSelector = li]     - The CSS selector string for menu items.
     * @param {string}                 [options.menuLinkSelector = a]      - The CSS selector string for menu links.
     * @param {string}                 [options.submenuItemSelector]       - The CSS selector string for menu items containing submenus.
     * @param {string}                 [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
     * @param {string}                 [options.submenuSelector = ul]      - The CSS selector string for submenus.
     * @param {?HTMLElement}           [options.controllerElement = null]  - The element controlling the menu in the DOM.
     * @param {?HTMLElement}           [options.containerElement = null]   - The element containing the menu in the DOM.
     * @param {?(string|string[])}     [options.openClass = show]          - The class to apply when a menu is "open".
     * @param {?(string|string[])}     [options.closeClass = hide]         - The class to apply when a menu is "closed".
     * @param {boolean}                [options.isTopLevel = false]        - A flag to mark the root menu.
     * @param {?BaseMenu}              [options.parentMenu = null]         - The parent menu to this menu.
     * @param {string}                 [options.hoverType = off]           - The type of hoverability a menu has.
     * @param {number}                 [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
     */
    function BaseMenu(_ref) {
      var menuElement = _ref.menuElement,
          _ref$menuItemSelector = _ref.menuItemSelector,
          menuItemSelector = _ref$menuItemSelector === void 0 ? "li" : _ref$menuItemSelector,
          _ref$menuLinkSelector = _ref.menuLinkSelector,
          menuLinkSelector = _ref$menuLinkSelector === void 0 ? "a" : _ref$menuLinkSelector,
          _ref$submenuItemSelec = _ref.submenuItemSelector,
          submenuItemSelector = _ref$submenuItemSelec === void 0 ? "" : _ref$submenuItemSelec,
          _ref$submenuToggleSel = _ref.submenuToggleSelector,
          submenuToggleSelector = _ref$submenuToggleSel === void 0 ? "a" : _ref$submenuToggleSel,
          _ref$submenuSelector = _ref.submenuSelector,
          submenuSelector = _ref$submenuSelector === void 0 ? "ul" : _ref$submenuSelector,
          _ref$controllerElemen = _ref.controllerElement,
          controllerElement = _ref$controllerElemen === void 0 ? null : _ref$controllerElemen,
          _ref$containerElement = _ref.containerElement,
          containerElement = _ref$containerElement === void 0 ? null : _ref$containerElement,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? "show" : _ref$openClass,
          _ref$closeClass = _ref.closeClass,
          closeClass = _ref$closeClass === void 0 ? "hide" : _ref$closeClass,
          _ref$isTopLevel = _ref.isTopLevel,
          isTopLevel = _ref$isTopLevel === void 0 ? true : _ref$isTopLevel,
          _ref$parentMenu = _ref.parentMenu,
          parentMenu = _ref$parentMenu === void 0 ? null : _ref$parentMenu,
          _ref$hoverType = _ref.hoverType,
          hoverType = _ref$hoverType === void 0 ? "off" : _ref$hoverType,
          _ref$hoverDelay = _ref.hoverDelay,
          hoverDelay = _ref$hoverDelay === void 0 ? 250 : _ref$hoverDelay;

      _classCallCheck(this, BaseMenu);

      this.domElements = {
        menu: menuElement,
        menuItems: [],
        submenuItems: [],
        submenuToggles: [],
        submenus: [],
        controller: controllerElement,
        container: containerElement
      };
      this.domSelectors = {
        menuItems: menuItemSelector,
        menuLinks: menuLinkSelector,
        submenuItems: submenuItemSelector,
        submenuToggles: submenuToggleSelector,
        submenus: submenuSelector
      };
      this.menuElements = {
        menuItems: [],
        submenuToggles: [],
        controller: null,
        parentMenu: parentMenu,
        rootMenu: isTopLevel ? this : null
      };
      this.submenuOpenClass = openClass || "";
      this.submenuCloseClass = closeClass || "";
      this.root = isTopLevel;
      this.focussedChild = 0;
      this.state = "none";
      this.event = "none";
      this.hover = hoverType;
      this.delay = hoverDelay; // Set default class types.

      this.MenuType = BaseMenu;
      this.MenuItemType = BaseMenuItem;
      this.MenuToggleType = BaseMenuToggle;
    }
    /**
     * Initializes the menu.
     *
     * The following steps will be taken to initialize the menu:
     * - {@link BaseMenu#validate|Validate} that the menu can initialize,
     * - find the root menu of the menu tree if it isn't already set,
     * - populate all DOM elements within the {@link BaseMenu#dom|dom},
     * - if the current menu is the root menu _and_ has a controller, initialize
     *   the controller, and
     * - populate the menu elements within the {@link BaseMenu#elements|elements}
     *
     * @throws {Error} Will throw an Error if validate returns `false`.
     */


    _createClass(BaseMenu, [{
      key: "initialize",
      value: function initialize() {
        if (!this.validate()) {
          throw new Error("AccesibleMenu: cannot initialize menu. See other error messaged for more information.");
        }

        var MenuToggleType = this.MenuToggleType; // Get the root menu if it doesn't exist.

        if (this.elements.rootMenu === null) this.findRootMenu(this); // Set all of the DOM elements.

        this.setDOMElements();

        if (this.isTopLevel) {
          if (this.dom.controller && this.dom.container) {
            // Create a new BaseMenuToggle to control the menu.
            var toggle = new MenuToggleType({
              menuToggleElement: this.dom.controller,
              parentElement: this.dom.container,
              controlledMenu: this
            });
            this.menuElements.controller = toggle;
          }
        }

        this.createChildElements();
      }
      /**
       * The DOM elements within the menu.
       *
       * @type {object.<HTMLElement,HTMLElement[]>}
       * @property {HTMLElement}   menu           - The menu element.
       * @property {HTMLElement[]} menuItems      - An array of menu items.
       * @property {HTMLElement[]} submenuItems   - An array of menu items that also contain submenu elements.
       * @property {HTMLElement[]} submenuToggles - An array of menu links that function as submenu toggles.
       * @property {HTMLElement[]} submenus       - An array of submenu elements.
       * @property {HTMLElement}   controller     - The toggle for this menu.
       * @property {HTMLElement}   container      - The container for this menu.
       */

    }, {
      key: "dom",
      get: function get() {
        return this.domElements;
      }
      /**
       * The CSS selectors used by the menu to populate the {@link BaseMenu#dom|dom}.
       *
       * @type {object.<string>}
       * @property {string} menuItems      - The CSS selector for menu items.
       * @property {string} menuLinks      - The CSS selector for menu links.
       * @property {string} submenuItems   - The CSS selector for menu items containing submenus.
       * @property {string} submenuToggles - The CSS selector for menu links that function as submenu toggles.
       * @property {string} submenus       - The CSS selector for for submenus.
       */

    }, {
      key: "selectors",
      get: function get() {
        return this.domSelectors;
      }
      /**
       * The declared accessible-menu elements within the menu.
       *
       * @type {object.<BaseMenu,BaseMenuToggle,BaseMenuItem[],BaseMenuToggle[]>}
       * @property {BaseMenuItem[]}   menuItems      - An array of menu items.
       * @property {BaseMenuToggle[]} submenuToggles - An array of menu toggles.
       * @property {?BaseMenuToggle}  controller     - A menu toggle that controls this menu.
       * @property {?BaseMenu}        parentMenu     - The parent menu.
       * @property {?BaseMenu}        rootMenu       - The root menu of the menu tree.
       */

    }, {
      key: "elements",
      get: function get() {
        return this.menuElements;
      }
      /**
       * The class(es) to apply when the menu is open.
       *
       * This functions differently for root vs. submenus.
       * Submenus will always inherit their root menu's open class(es).
       *
       * @type {string|string[]}
       */

    }, {
      key: "openClass",
      get: function get() {
        return this.isTopLevel ? this.submenuOpenClass : this.elements.rootMenu.openClass;
      }
      /**
       * The class(es) to apply when the menu is closed.
       *
       * This functions differently for root vs. submenus.
       * Submenus will always inherit their root menu's close class(es).
       *
       * @type {string|string[]}
       */
      ,
      set: function set(value) {
        isValidClassList({
          openClass: value
        });

        if (this.submenuOpenClass !== value) {
          this.submenuOpenClass = value;
        }
      }
    }, {
      key: "closeClass",
      get: function get() {
        return this.isTopLevel ? this.submenuCloseClass : this.elements.rootMenu.closeClass;
      }
      /**
       * A flag marking the root menu.
       *
       * @type {boolean}
       */
      ,
      set: function set(value) {
        isValidClassList({
          closeClass: value
        });

        if (this.submenuCloseClass !== value) {
          this.submenuCloseClass = value;
        }
      }
    }, {
      key: "isTopLevel",
      get: function get() {
        return this.root;
      }
      /**
       * The index of the currently selected {@link BaseMenuItem|menu item} in the menu.
       *
       * - Attempting to set a value less than -1 will set the current child to -1.
       * - Attempting to set a value greater than or equal to the number of menu items
       *   will set the current child to the index of the last menu item in the menu.
       *
       * If the current menu has a parent menu _and_ the menu's
       * {@link BaseMenu#currentEvent|current event} is "mouse", The parent menu
       * will have it's current child updated as well to help with transitioning
       * between mouse and keyboard naviation.
       *
       * @type {number}
       */

    }, {
      key: "currentChild",
      get: function get() {
        return this.focussedChild;
      }
      /**
       * The current state of the menu's focus.
       *
       * @type {string}
       */
      ,
      set: function set(value) {
        isValidType("number", {
          value: value
        });
        /**
         * Update the parent menu's current child to make sure clicks
         * and other jumps don't interfere with keyboard navigation.
         *
         * @param {BaseMenu} menu - The initial menu.
         */

        function setParentChild(menu) {
          var updateEvents = ["mouse", "character"];

          if (updateEvents.includes(menu.currentEvent) && menu.elements.parentMenu) {
            var index = 0;
            var found = false;

            while (!found && index < menu.elements.parentMenu.elements.menuItems.length) {
              var menuItem = menu.elements.parentMenu.elements.menuItems[index];

              if (menuItem.isSubmenuItem && menuItem.elements.toggle.elements.controlledMenu === menu) {
                found = true;
                menu.elements.parentMenu.currentEvent = menu.currentEvent;
                menu.elements.parentMenu.currentChild = index;
              }

              index++;
            }
          }
        }

        if (value < -1) {
          this.focussedChild = -1;
          setParentChild(this);
        } else if (value >= this.elements.menuItems.length) {
          this.focussedChild = this.elements.menuItems.length - 1;
          setParentChild(this);
        } else if (this.focusChild !== value) {
          this.focussedChild = value;
          setParentChild(this);
        }
      }
    }, {
      key: "focusState",
      get: function get() {
        return this.state;
      }
      /**
       * This last event triggered on the menu.
       *
       * @type {string}
       */
      ,
      set: function set(value) {
        isValidState({
          value: value
        });

        if (this.state !== value) {
          this.state = value;
        }
      }
    }, {
      key: "currentEvent",
      get: function get() {
        return this.event;
      }
      /**
       * The currently selected menu item.
       *
       * @type {BaseMenuItem}
       */
      ,
      set: function set(value) {
        isValidEvent({
          value: value
        });

        if (this.event !== value) {
          this.event = value;

          if (this.elements.submenuToggles.length > 0) {
            this.elements.submenuToggles.forEach(function (submenuToggle) {
              submenuToggle.elements.controlledMenu.currentEvent = value;
            });
          }
        }
      }
    }, {
      key: "currentMenuItem",
      get: function get() {
        return this.elements.menuItems[this.currentChild];
      }
      /**
       * The type of hoverability for the menu.
       *
       * This functions differently for root vs. submenus.
       * Submenus will always inherit their root menu's hoverability.
       *
       * @type {string}
       */

    }, {
      key: "hoverType",
      get: function get() {
        return this.root ? this.hover : this.elements.rootMenu.hoverType;
      }
      /**
       * The delay time (in miliseconds) used for mouseout events to take place.
       *
       * This functions differently for root vs. submenus.
       * Submenus will always inherit their root menu's hover delay.
       *
       * @type {number}
       */
      ,
      set: function set(value) {
        isValidHoverType({
          value: value
        });

        if (this.hover !== value) {
          this.hover = value;
        }
      }
    }, {
      key: "hoverDelay",
      get: function get() {
        return this.root ? this.delay : this.elements.rootMenu.hoverDelay;
      }
      /**
       * A flag to check if the menu's focus methods should _actually_ move the focus in the DOM.
       *
       * This will be `false` unless any of the following criteria are met:
       * - The menu's {@link BaseMenu#currentEvent|current event} is "keyboard".
       * - The menu's current event is "character".
       * - The menu's current event is "mouse" _and_ the menu's
       *   {@link BaseMenu#hoverType|hover type} is "dynamic".
       *
       * @type {boolean}
       */
      ,
      set: function set(value) {
        isValidType("number", {
          value: value
        });

        if (this.delay !== value) {
          this.delay = value;
        }
      }
      /**
       * Validates all aspects of the menu to ensure proper functionality.
       *
       * @returns {boolean} - The result of the validation.
       */

    }, {
      key: "shouldFocus",
      get: function get() {
        var check = false;

        if (this.currentEvent === "keyboard" || this.currentEvent === "character") {
          check = true;
        }

        if (this.currentEvent === "mouse" && this.hoverType === "dynamic") {
          check = true;
        }

        return check;
      }
    }, {
      key: "validate",
      value: function validate() {
        var domElements = this.domElements,
            domSelectors = this.domSelectors,
            menuElements = this.menuElements,
            submenuOpenClass = this.submenuOpenClass,
            submenuCloseClass = this.submenuCloseClass,
            root = this.root,
            hover = this.hover,
            delay = this.delay;
        var check = true;

        if (domElements.container !== null || domElements.controller !== null) {
          if (!isValidInstance(HTMLElement, {
            menuElement: domElements.menu,
            controllerElement: domElements.controller,
            containerElement: domElements.container
          })) {
            check = false;
          }
        } else if (!isValidInstance(HTMLElement, {
          menuElement: domElements.menu
        })) {
          check = false;
        }

        if (domSelectors.submenuItems !== "") {
          if (!isCSSSelector({
            menuItemSelector: domSelectors.menuItems,
            menuLinkSelector: domSelectors.menuLinks,
            submenuItemSelector: domSelectors.submenuItems,
            submenuToggleSelector: domSelectors.submenuToggles,
            submenuSelector: domSelectors.submenus
          })) {
            check = false;
          }
        } else if (!isCSSSelector({
          menuItemSelector: domSelectors.menuItems,
          menuLinkSelector: domSelectors.menuLinks
        })) {
          check = false;
        }

        if (submenuOpenClass !== "" && !isValidClassList({
          openClass: submenuOpenClass
        })) {
          check = false;
        }

        if (submenuCloseClass !== "" && !isValidClassList({
          closeClass: submenuCloseClass
        })) {
          check = false;
        }

        if (!isValidType("boolean", {
          isTopLevel: root
        })) {
          check = false;
        }

        if (menuElements.parentMenu !== null && !isValidInstance(BaseMenu, {
          parentMenu: menuElements.parentMenu
        })) {
          check = false;
        }

        if (!isValidHoverType({
          hoverType: hover
        })) {
          check = false;
        }

        if (!isValidType("number", {
          hoverDelay: delay
        })) {
          check = false;
        }

        return check;
      }
      /**
       * Sets DOM elements within the menu.
       *
       * This will set the actual `domElement` property, so all existing items in a
       * given `domElement` property will be removed when this is run.
       *
       * @param {string}      elementType - The type of element to populate.
       * @param {HTMLElement} base        - The element used as the base for the querySelect.
       * @param {Function}    filter      - A filter to use to narrow down the DOM elements selected.
       */

    }, {
      key: "setDOMElementType",
      value: function setDOMElementType(elementType, base, filter) {
        if (typeof this.selectors[elementType] === "string") {
          if (base) isValidInstance(HTMLElement, {
            base: base
          });
          var baseElement = base || this.dom.menu;

          var baseFilter = function baseFilter(item) {
            return item.parentElement === baseElement;
          };

          var selector = this.selectors[elementType];
          var domElements = Array.from(baseElement.querySelectorAll(selector));

          if (typeof filter !== "undefined") {
            if (typeof filter === "function") {
              this.domElements[elementType] = domElements.filter(function (item) {
                return filter(item);
              });
            } else {
              this.domElements[elementType] = domElements;
            }
          } else {
            this.domElements[elementType] = domElements.filter(function (item) {
              return baseFilter(item);
            });
          }
        } else {
          throw new Error("".concat(elementType, " is not a valid element type within the menu."));
        }
      }
      /**
       * Adds an element to DOM elements within the menu.
       *
       * This is an additive function, so existing items in a given `domElement`
       * property will not be touched.
       *
       * @param {string}      elementType - The type of element to populate.
       * @param {HTMLElement} base        - The element used as the base for the querySelect.
       * @param {Function}    filter      - A filter to use to narrow down the DOM elements selected.
       */

    }, {
      key: "addDOMElementType",
      value: function addDOMElementType(elementType, base, filter) {
        if (typeof this.selectors[elementType] === "string") {
          if (base) isValidInstance(HTMLElement, {
            base: base
          });
          var baseElement = base || this.dom.menu;

          var baseFilter = function baseFilter(item) {
            return item.parentElement === baseElement;
          };

          var selector = this.selectors[elementType];
          var domElements = Array.from(baseElement.querySelectorAll(selector));

          if (typeof filter !== "undefined") {
            if (typeof filter === "function") {
              this.domElements[elementType] = [].concat(_toConsumableArray(this.domElements[elementType]), _toConsumableArray(domElements.filter(function (item) {
                return filter(item);
              })));
            } else {
              this.domElements[elementType] = [].concat(_toConsumableArray(this.domElements[elementType]), _toConsumableArray(domElements));
            }
          } else {
            this.domElements[elementType] = [].concat(_toConsumableArray(this.domElements[elementType]), _toConsumableArray(domElements.filter(function (item) {
              return baseFilter(item);
            })));
          }
        } else {
          throw new Error("".concat(elementType, " is not a valid element type within the menu."));
        }
      }
      /**
       * Clears DOM elements within the menu.
       *
       * @param {string} elementType - The type of element to clear.
       */

    }, {
      key: "clearDOMElementType",
      value: function clearDOMElementType(elementType) {
        if (elementType === "menu") return;

        if (Array.isArray(this.domElements[elementType])) {
          this.domElements[elementType] = [];
        } else if (typeof this.domElements[elementType] !== "undefined") {
          this.domElements[elementType] = null;
        } else {
          throw new Error("".concat(elementType, " is not a valid element type within the menu."));
        }
      }
      /**
       * Sets all DOM elements within the menu.
       *
       * Utiliizes {@link BaseMenu#setDOMElementType|setDOMElementType},
       * {@link BaseMenu#clearDOMElementType|clearDOMElementType},
       * and {@link BaseMenu#addDOMElementType|addDOMElementType}.
       */

    }, {
      key: "setDOMElements",
      value: function setDOMElements() {
        var _this = this;

        this.setDOMElementType("menuItems");

        if (this.selectors.submenuItems !== "") {
          this.setDOMElementType("submenuItems");
          this.clearDOMElementType("submenuToggles");
          this.clearDOMElementType("submenus");
          this.dom.submenuItems.forEach(function (item) {
            _this.addDOMElementType("submenuToggles", item);

            _this.addDOMElementType("submenus", item);
          });
        }
      }
      /**
       * Finds the root menu element.
       *
       * @param {BaseMenu} menu - The menu to check.
       */

    }, {
      key: "findRootMenu",
      value: function findRootMenu(menu) {
        if (menu.isTopLevel) {
          this.menuElements.rootMenu = menu;
        } else if (menu.elements.parentMenu !== null) {
          this.findRootMenu(menu.elements.parentMenu);
        } else {
          throw new Error("Cannot find root menu.");
        }
      }
      /**
       * Creates and initializes all menu items and submenus.
       */

    }, {
      key: "createChildElements",
      value: function createChildElements() {
        var _this2 = this;

        var MenuType = this.MenuType,
            MenuItemType = this.MenuItemType,
            MenuToggleType = this.MenuToggleType;
        this.dom.menuItems.forEach(function (element) {
          var menuItem;

          if (_this2.dom.submenuItems.includes(element)) {
            // The menu's toggle controller DOM element.
            var toggler = element.querySelector(_this2.selectors.submenuToggles); // The actual menu DOM element.

            var submenu = element.querySelector(_this2.selectors.submenus); // Create the new menu and initialize it.

            var menu = new MenuType({
              menuElement: submenu,
              menuItemSelector: _this2.selectors.menuItems,
              menuLinkSelector: _this2.selectors.menuLinks,
              submenuItemSelector: _this2.selectors.submenuItems,
              submenuToggleSelector: _this2.selectors.submenuToggles,
              submenuSelector: _this2.selectors.submenus,
              openClass: _this2.openClass,
              closeClass: _this2.closeClass,
              isTopLevel: false,
              parentMenu: _this2,
              hoverType: _this2.hoverType,
              hoverDelay: _this2.hoverDelay
            }); // Create the new menu toggle.

            var toggle = new MenuToggleType({
              menuToggleElement: toggler,
              parentElement: element,
              controlledMenu: menu,
              parentMenu: _this2
            }); // Add the toggle to the list of toggles.

            _this2.menuElements.submenuToggles.push(toggle); // Create a new menu item.


            menuItem = new MenuItemType({
              menuItemElement: element,
              menuLinkElement: toggler,
              parentMenu: _this2,
              isSubmenuItem: true,
              childMenu: menu,
              toggle: toggle
            });
          } else {
            var link = element.querySelector(_this2.selectors.menuLinks); // Create a new menu item.

            menuItem = new MenuItemType({
              menuItemElement: element,
              menuLinkElement: link,
              parentMenu: _this2
            });
          }

          _this2.menuElements.menuItems.push(menuItem);
        });
      }
      /**
       * Handles focus events throughout the menu for proper menu use.
       *
       * - Adds a `focus` listener to every menu item so when it gains focus,
       *   it will set the item's containing menu's {@link BaseMenu#focusState|focus state}
       *   to "self", any parent menu's focus state to "child", and any
       *   child menu's focus state to "none".
       */

    }, {
      key: "handleFocus",
      value: function handleFocus() {
        var _this3 = this;

        this.elements.menuItems.forEach(function (menuItem, index) {
          menuItem.dom.link.addEventListener("focus", function () {
            if (_this3.elements.parentMenu) _this3.elements.parentMenu.focusState = "child";
            if (menuItem.elements.childMenu) menuItem.elements.childMenu.focusState = "none";
            _this3.focusState = "self";
            _this3.currentChild = index;
          });
        });
      }
      /**
       * Handles click events throughout the menu for proper use.
       *
       * Depending on what is supported either `touchstart` and `touchend` or
       * `mousedown` and `mouseup` will be used for all "click" event handling.
       *
       * - Adds a `touchend`/`mouseup` listener to the document so if the user clicks
       *   outside of the menu when it is open, the menu will close.
       * - Adds a `touchstart`/`mousedown` listener to every menu item that will blur
       *   all menu items in the entire menu structure (starting at the root menu) and
       *   then properly focus the clicked item.
       * - Adds a `touchend`/`mouseup` listener to every submenu item that will properly
       *   toggle the submenu open/closed.
       * - Adds a `touchend`/`mouseup` listener to the menu's controller
       *   (if the menu is the root menu) so when it is clicked it will properly
       *   toggle open/closed.
       */

    }, {
      key: "handleClick",
      value: function handleClick() {
        var _this4 = this;

        // Use touch over mouse events when supported.
        var startEventType = isEventSupported("touchstart", this.dom.menu) ? "touchstart" : "mousedown";
        var endEventType = isEventSupported("touchend", this.dom.menu) ? "touchend" : "mouseup";
        /**
         * Toggles a toggle element.
         *
         * @param {BaseMenu}       menu   - This menu.
         * @param {BaseMenuToggle} toggle - The menu toggle
         * @param {Event}          event  - A Javascript event.
         */

        function toggleToggle(menu, toggle, event) {
          preventEvent(event);
          toggle.toggle();

          if (toggle.isOpen) {
            menu.focusState = "self";
            toggle.elements.controlledMenu.focusState = "none";
          }
        }

        this.elements.menuItems.forEach(function (item, index) {
          // Properly focus the current menu item.
          item.dom.link.addEventListener(startEventType, function () {
            _this4.currentEvent = "mouse";

            _this4.elements.rootMenu.blurChildren();

            _this4.focusChild(index);
          }); // Properly toggle submenus open and closed.

          if (item.isSubmenuItem) {
            item.elements.toggle.dom.toggle["on".concat(endEventType)] = function (event) {
              _this4.currentEvent = "mouse";
              toggleToggle(_this4, item.elements.toggle, event);
            };
          }
        }); // Open the this menu if it's controller is clicked.

        if (this.isTopLevel && this.elements.controller) {
          this.elements.controller.dom.toggle["on".concat(endEventType)] = function (event) {
            _this4.currentEvent = "mouse";
            toggleToggle(_this4, _this4.elements.controller, event);
          };
        }
      }
      /**
       * Handles hover events throughout the menu for proper use.
       *
       * Adds `mouseenter` listeners to all menu items and `mouseleave` listeners
       * to all submenu items which function differently depending on
       * the menu's {@link BaseMenu#hoverType|hover type}.
       *
       * **Hover Type "on"**
       * - When a `mouseenter` event triggers on any menu item the menu's
       *   {@link BaseMenu#currentChild| current child} value will change to that
       *   menu item.
       * - When a `mouseenter` event triggers on a submenu item the
       *   {@link BaseMenuToggle#preview|preview method} for the submenu item's
       *   toggle will be called.
       * - When a `mouseleave` event triggers on an open submenu item the
       *   {@link BaseMenuToggle#close|close method} for the submenu item's toggle
       *   will be called after a delay set by the menu's {@link BaseMenu#hoverDelay|hover delay}.
       *
       * **Hover Type "dynamic"**
       * - When a `mouseenter` event triggers on any menu item the menu's
       *   current child value will change to that menu item.
       * - When a `mouseenter` event triggers on any menu item, and the menu's
       *   {@link BaseMenu#focusState|focus state} is not "none", the menu item
       *   will be focused.
       * - When a `mouseenter` event triggers on a submenu item, and a submenu is
       *   already open, the preview method for the submenu item's toggle will be called.
       * - When a `mouseenter` event triggers on a submenu item, and no submenu is
       *   open, no submenu-specific methods will be called.
       * - When a `mouseleave` event triggers on an open submenu item that is not a
       *   root-level submenu item the close method for the submenu item's toggle
       *   will be called and the submenu item will be focused after a delay set by
       *   the menu's hover delay.
       * - When a `mouseleave` event triggers on an open submenu item that is a
       *   root-level submenu item no submenu-specific methods will be called.
       *
       * **Hover Type "off"**
       * All `mouseenter` and `mouseleave` events are ignored.
       */

    }, {
      key: "handleHover",
      value: function handleHover() {
        var _this5 = this;

        this.elements.menuItems.forEach(function (menuItem, index) {
          menuItem.dom.link.addEventListener("mouseenter", function () {
            if (_this5.hoverType === "on") {
              _this5.currentEvent = "mouse";
              _this5.currentChild = index;

              if (menuItem.isSubmenuItem) {
                menuItem.elements.toggle.preview();
              }
            } else if (_this5.hoverType === "dynamic") {
              var isOpen = _this5.elements.submenuToggles.some(function (toggle) {
                return toggle.isOpen;
              });

              _this5.currentChild = index;

              if (!_this5.isTopLevel || _this5.focusState !== "none") {
                _this5.currentEvent = "mouse";

                _this5.focusCurrentChild();
              }

              if (menuItem.isSubmenuItem && (!_this5.isTopLevel || isOpen)) {
                _this5.currentEvent = "mouse";
                menuItem.elements.toggle.preview();
              }
            }
          });

          if (menuItem.isSubmenuItem) {
            menuItem.dom.item.addEventListener("mouseleave", function () {
              if (_this5.hoverType === "on") {
                setTimeout(function () {
                  _this5.currentEvent = "mouse";
                  menuItem.elements.toggle.close();
                }, _this5.hoverDelay);
              } else if (_this5.hoverType === "dynamic") {
                if (!_this5.isTopLevel) {
                  setTimeout(function () {
                    _this5.currentEvent = "mouse";
                    menuItem.elements.toggle.close();

                    _this5.focusCurrentChild();
                  }, _this5.hoverDelay);
                }
              }
            });
          }
        });
      }
      /**
       * Handles keydown events throughout the menu for proper menu use.
       *
       * This method exists to assit the {@link BaseMenu#handleKeyup|handleKeyup method}.
       *
       * - Adds a `keydown` listener to the menu's controller (if the menu is the root menu).
       *   - Blocks propagation on "Space", "Enter", and "Escape" keys.
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown() {
        var _this6 = this;

        if (this.isTopLevel && this.elements.controller) {
          this.elements.controller.dom.toggle.addEventListener("keydown", function (event) {
            _this6.currentEvent = "keyboard";
            var key = keyPress(event);

            if (key === "Space" || key === "Enter") {
              preventEvent(event);
            }
          });
        }
      }
      /**
       * Handles keyup events throughout the menu for proper menu use.
       *
       * - Adds a `keyup` listener to the menu's controller (if the menu is the root menu).
       *   - Opens the menu when the user hits "Space" or "Enter".
       */

    }, {
      key: "handleKeyup",
      value: function handleKeyup() {
        var _this7 = this;

        if (this.isTopLevel && this.elements.controller) {
          this.elements.controller.dom.toggle.addEventListener("keyup", function (event) {
            _this7.currentEvent = "keyboard";
            var key = keyPress(event);

            if (key === "Space" || key === "Enter") {
              preventEvent(event);

              _this7.elements.controller.open();

              _this7.focusFirstChild();
            }
          });
        }
      }
      /**
       * Focus the menu.
       *
       * Sets the menu's {@link BaseMenu#focusState|focus state} to "self" and
       * focusses the menu if the menu's {@link BaseMenu#shouldFocus|shouldFocus}
       * value is `true`.
       */

    }, {
      key: "focus",
      value: function focus() {
        this.focusState = "self";

        if (this.shouldFocus) {
          this.dom.menu.focus();
        }
      }
      /**
       * Unfocus the menu.
       *
       * Sets the menu's {@link BaseMenu#focusState|focus state} to "none"
       * and blurs the menu if the menu's {@link BaseMenu#shouldFocus|shouldFocus}
       * vallue is `true`.
       */

    }, {
      key: "blur",
      value: function blur() {
        this.focusState = "none";

        if (this.shouldFocus) {
          this.dom.menu.blur();
        }
      }
      /**
       * Focus the menu's current child.
       */

    }, {
      key: "focusCurrentChild",
      value: function focusCurrentChild() {
        if (this.currentChild !== -1) {
          this.currentMenuItem.focus();
        }
      }
      /**
       * Focuses the menu's child at a given index.
       *
       * @param {number} index - The index of the child to focus.
       */

    }, {
      key: "focusChild",
      value: function focusChild(index) {
        this.blurCurrentChild();
        this.currentChild = index;
        this.focusCurrentChild();
      }
      /**
       * Focues the menu's first child.
       */

    }, {
      key: "focusFirstChild",
      value: function focusFirstChild() {
        this.focusChild(0);
      }
      /**
       * Focus the menu's last child.
       */

    }, {
      key: "focusLastChild",
      value: function focusLastChild() {
        this.focusChild(this.elements.menuItems.length - 1);
      }
      /**
       * Focus the menu's next child.
       */

    }, {
      key: "focusNextChild",
      value: function focusNextChild() {
        if (this.currentChild < this.elements.menuItems.length - 1) {
          this.focusChild(this.currentChild + 1);
        } else {
          this.focusCurrentChild();
        }
      }
      /**
       * Focus the menu's previous child.
       */

    }, {
      key: "focusPreviousChild",
      value: function focusPreviousChild() {
        if (this.currentChild > 0) {
          this.focusChild(this.currentChild - 1);
        } else {
          this.focusCurrentChild();
        }
      }
      /**
       * Blurs the menu's current child.
       */

    }, {
      key: "blurCurrentChild",
      value: function blurCurrentChild() {
        if (this.currentChild !== -1) {
          this.currentMenuItem.blur();
        }
      }
      /**
       * Focus the menu's controller.
       */

    }, {
      key: "focusController",
      value: function focusController() {
        if (this.dom.controller) {
          if (this.shouldFocus) {
            this.dom.controller.focus();
          }

          this.focusState = "none";
        }
      }
      /**
       * Focus the menu's container.
       */

    }, {
      key: "focusContainer",
      value: function focusContainer() {
        if (this.dom.container) {
          if (this.shouldFocus) {
            this.dom.container.focus();
          }

          this.focusState = "none";
        }
      }
      /**
       * Close all submenu children.
       */

    }, {
      key: "closeChildren",
      value: function closeChildren() {
        this.elements.submenuToggles.forEach(function (toggle) {
          return toggle.close();
        });
      }
      /**
       * Blurs all children and submenu's children.
       */

    }, {
      key: "blurChildren",
      value: function blurChildren() {
        this.elements.menuItems.forEach(function (menuItem) {
          menuItem.blur();

          if (menuItem.isSubmenuItem) {
            menuItem.elements.childMenu.blurChildren();
          }
        });
      }
    }]);

    return BaseMenu;
  }();

  /**
   * A basic navigation link contained inside of a {@link Treeview}.
   *
   * @extends BaseMenuItem
   */

  var TreeviewItem = /*#__PURE__*/function (_BaseMenuItem) {
    _inherits(TreeviewItem, _BaseMenuItem);

    var _super = _createSuper(TreeviewItem);

    /**
     * @inheritdoc
     *
     * @param {object}              options                         - The options for generating the menu item.
     * @param {HTMLElement}         options.menuItemElement         - The menu item in the DOM.
     * @param {HTMLElement}         options.menuLinkElement         - The menu item's link in the DOM.
     * @param {Treeview}            options.parentMenu              - The parent menu.
     * @param {boolean}             [options.isSubmenuItem = false] - A flag to mark if the menu item is controlling a submenu.
     * @param {Treeview|null}       [options.childMenu = null]      - The child menu.
     * @param {TreeviewToggle|null} [options.toggle = null]         - The controller for the child menu.
     * @param {boolean}             [options.initialize = true]     - A flag to initialize the menu item immediately upon creation.
     */
    function TreeviewItem(_ref) {
      var _this;

      var menuItemElement = _ref.menuItemElement,
          menuLinkElement = _ref.menuLinkElement,
          parentMenu = _ref.parentMenu,
          _ref$isSubmenuItem = _ref.isSubmenuItem,
          isSubmenuItem = _ref$isSubmenuItem === void 0 ? false : _ref$isSubmenuItem,
          _ref$childMenu = _ref.childMenu,
          childMenu = _ref$childMenu === void 0 ? null : _ref$childMenu,
          _ref$toggle = _ref.toggle,
          toggle = _ref$toggle === void 0 ? null : _ref$toggle,
          _ref$initialize = _ref.initialize,
          initialize = _ref$initialize === void 0 ? true : _ref$initialize;

      _classCallCheck(this, TreeviewItem);

      _this = _super.call(this, {
        menuItemElement: menuItemElement,
        menuLinkElement: menuLinkElement,
        parentMenu: parentMenu,
        isSubmenuItem: isSubmenuItem,
        childMenu: childMenu,
        toggle: toggle
      });

      if (initialize) {
        _this.initialize();
      }

      return _this;
    }
    /**
     * Initialize the menu item.
     *
     * Initialize will call the {@link BaseMenuItem#initialize|BaseMenuItem's initialize method}
     * as well as set the menu item's `role` to "none",
     * the menu link's `role` to "treeitem", and
     * the menu link's `tabIndex` to -1 in the DOM.
     */


    _createClass(TreeviewItem, [{
      key: "initialize",
      value: function initialize() {
        _get(_getPrototypeOf(TreeviewItem.prototype), "initialize", this).call(this);

        this.dom.item.setAttribute("role", "none");
        this.dom.link.setAttribute("role", "treeitem");
        this.dom.link.tabIndex = -1;
      }
      /**
       * Focuses the menu item's link if the parent menu's
       * {@link Menubar#shouldFocus|shouldFocus} value is `true`.
       *
       * This will call the {@link BaseMenuItem#focus|BaseMenuItem's focus method}
       * as well as set the menu link's `tabIndex` to 0.
       */

    }, {
      key: "focus",
      value: function focus() {
        _get(_getPrototypeOf(TreeviewItem.prototype), "focus", this).call(this);

        this.dom.link.tabIndex = 0;
      }
      /**
       * Blurs the menu item's link if the parent menu's
       * {@link Menubar#shouldFocus|shouldFocus} value is `true`.
       *
       * This will call the {@link BaseMenuItem#blur|BaseMenuItem's blur method}
       * as well as set the menu link's `tabIndex` to -1.
       */

    }, {
      key: "blur",
      value: function blur() {
        _get(_getPrototypeOf(TreeviewItem.prototype), "blur", this).call(this);

        this.dom.link.tabIndex = -1;
      }
    }]);

    return TreeviewItem;
  }(BaseMenuItem);

  /**
   * A link or button that controls the visibility of a {@link Treeview}.
   *
   * @extends BaseMenuToggle
   */

  var TreeviewToggle = /*#__PURE__*/function (_BaseMenuToggle) {
    _inherits(TreeviewToggle, _BaseMenuToggle);

    var _super = _createSuper(TreeviewToggle);

    /**
     * @inheritdoc
     *
     * @param {object}                  options                     - The options for generating the menu toggle.
     * @param {HTMLElement}             options.menuToggleElement   - The toggle element in the DOM.
     * @param {HTMLElement}             options.parentElement       - The element containing the controlled menu.
     * @param {TreeviewNavigation}      options.controlledMenu      - The menu controlled by this toggle.
     * @param {TreeviewNavigation|null} [options.parentMenu = null] - The menu containing this toggle.
     * @param {boolean}                 [options.initialize = true] - A flag to initialize the menu toggle immediately upon creation.
     */
    function TreeviewToggle(_ref) {
      var _this;

      var menuToggleElement = _ref.menuToggleElement,
          parentElement = _ref.parentElement,
          controlledMenu = _ref.controlledMenu,
          _ref$parentMenu = _ref.parentMenu,
          parentMenu = _ref$parentMenu === void 0 ? null : _ref$parentMenu,
          _ref$initialize = _ref.initialize,
          initialize = _ref$initialize === void 0 ? true : _ref$initialize;

      _classCallCheck(this, TreeviewToggle);

      _this = _super.call(this, {
        menuToggleElement: menuToggleElement,
        parentElement: parentElement,
        controlledMenu: controlledMenu,
        parentMenu: parentMenu
      });

      if (initialize) {
        _this.initialize();
      }

      return _this;
    }

    return TreeviewToggle;
  }(BaseMenuToggle);

  /**
   * An accessible treeview navigation in the DOM.
   *
   * See {@link https://www.w3.org/TR/wai-aria-practices-1.2/examples/treeview/treeview-2/treeview-2a.html|Navigation Treeview Example Using Computed Properties}
   *
   * @extends BaseMenu
   */

  var Treeview = /*#__PURE__*/function (_BaseMenu) {
    _inherits(Treeview, _BaseMenu);

    var _super = _createSuper(Treeview);

    /**
     * @inheritdoc
     *
     * @param {object}                 options                             - The options for generating the menu.
     * @param {HTMLElement}            options.menuElement                 - The menu element in the DOM.
     * @param {string}                 [options.menuItemSelector = li]     - The CSS selector string for menu items.
     * @param {string}                 [options.menuLinkSelector = a]      - The CSS selector string for menu links.
     * @param {string}                 [options.submenuItemSelector]       - The CSS selector string for menu items containing submenus.
     * @param {string}                 [options.submenuToggleSelector = a] - The CSS selector string for submenu toggle buttons/links.
     * @param {string}                 [options.submenuSelector = ul]      - The CSS selector string for submenus.
     * @param {(HTMLElement|null)}     [options.controllerElement = null]  - The element controlling the menu in the DOM.
     * @param {(HTMLElement|null)}     [options.containerElement = null]   - The element containing the menu in the DOM.
     * @param {(string|string[]|null)} [options.openClass = show]          - The class to apply when a menu is "open".
     * @param {(string|string[]|null)} [options.closeClass = hide]         - The class to apply when a menu is "closed".
     * @param {boolean}                [options.isTopLevel = false]        - A flag to mark the root menu.
     * @param {(Treeview|null)}        [options.parentMenu = null]         - The parent menu to this menu.
     * @param {string}                 [options.hoverType = off]           - The type of hoverability a menu has.
     * @param {number}                 [options.hoverDelay = 250]          - The delay for closing menus if the menu is hoverable (in miliseconds).
     * @param {boolean}                [options.initialize = true]         - A flag to initialize the menu immediately upon creation.
     */
    function Treeview(_ref) {
      var _this;

      var menuElement = _ref.menuElement,
          _ref$menuItemSelector = _ref.menuItemSelector,
          menuItemSelector = _ref$menuItemSelector === void 0 ? "li" : _ref$menuItemSelector,
          _ref$menuLinkSelector = _ref.menuLinkSelector,
          menuLinkSelector = _ref$menuLinkSelector === void 0 ? "a" : _ref$menuLinkSelector,
          _ref$submenuItemSelec = _ref.submenuItemSelector,
          submenuItemSelector = _ref$submenuItemSelec === void 0 ? "" : _ref$submenuItemSelec,
          _ref$submenuToggleSel = _ref.submenuToggleSelector,
          submenuToggleSelector = _ref$submenuToggleSel === void 0 ? "a" : _ref$submenuToggleSel,
          _ref$submenuSelector = _ref.submenuSelector,
          submenuSelector = _ref$submenuSelector === void 0 ? "ul" : _ref$submenuSelector,
          _ref$controllerElemen = _ref.controllerElement,
          controllerElement = _ref$controllerElemen === void 0 ? null : _ref$controllerElemen,
          _ref$containerElement = _ref.containerElement,
          containerElement = _ref$containerElement === void 0 ? null : _ref$containerElement,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? "show" : _ref$openClass,
          _ref$closeClass = _ref.closeClass,
          closeClass = _ref$closeClass === void 0 ? "hide" : _ref$closeClass,
          _ref$isTopLevel = _ref.isTopLevel,
          isTopLevel = _ref$isTopLevel === void 0 ? true : _ref$isTopLevel,
          _ref$parentMenu = _ref.parentMenu,
          parentMenu = _ref$parentMenu === void 0 ? null : _ref$parentMenu,
          _ref$hoverType = _ref.hoverType,
          hoverType = _ref$hoverType === void 0 ? "off" : _ref$hoverType,
          _ref$hoverDelay = _ref.hoverDelay,
          hoverDelay = _ref$hoverDelay === void 0 ? 250 : _ref$hoverDelay,
          _ref$initialize = _ref.initialize,
          initialize = _ref$initialize === void 0 ? true : _ref$initialize;

      _classCallCheck(this, Treeview);

      _this = _super.call(this, {
        menuElement: menuElement,
        menuItemSelector: menuItemSelector,
        menuLinkSelector: menuLinkSelector,
        submenuItemSelector: submenuItemSelector,
        submenuToggleSelector: submenuToggleSelector,
        submenuSelector: submenuSelector,
        controllerElement: controllerElement,
        containerElement: containerElement,
        openClass: openClass,
        closeClass: closeClass,
        isTopLevel: isTopLevel,
        parentMenu: parentMenu,
        hoverType: hoverType,
        hoverDelay: hoverDelay
      }); // Set default class types.

      _this.MenuType = Treeview;
      _this.MenuItemType = TreeviewItem;
      _this.MenuToggleType = TreeviewToggle;

      if (initialize) {
        _this.initialize();
      }

      return _this;
    }
    /**
     * Initializes the menu.
     *
     * Initialize will call the {@link BaseMenu#initialize|BaseMenu's initialize method}
     * as well as set up {@link Treeview#handleFocus|focus},
     * {@link Treeview#handleClick|click},
     * {@link Treeview#handleHover|hover},
     * {@link Treeview#handleKeydown|keydown}, and
     * {@link Treeview#handleKeyup|keyup} events for the menu.
     *
     * If the menu is a root menu it's `role` will be set to "tree" and the first
     * menu item's `tabIndex` will be set to 0 in the DOM.
     *
     * If the menu is _not_ a root menu it's `role` will be set to "group".
     *
     * If the BaseMenu's initialize method throws an error,
     * this will catch it and log it to the console.
     */


    _createClass(Treeview, [{
      key: "initialize",
      value: function initialize() {
        try {
          _get(_getPrototypeOf(Treeview.prototype), "initialize", this).call(this);

          if (this.isTopLevel) {
            this.dom.menu.setAttribute("role", "tree");
            this.elements.menuItems[0].dom.link.tabIndex = 0;
          } else {
            this.dom.menu.setAttribute("role", "group");
          }

          this.handleFocus();
          this.handleClick();
          this.handleHover();
          this.handleKeydown();
          this.handleKeyup();
        } catch (error) {
          console.error(error);
        }
      }
      /**
       * Handles keydown events throughout the menu for proper menu use.
       *
       * This method exists to assist the {@link Treeview#handleKeyup|handleKeyup method}.
       * - Adds all `keydown` listeners from {@link BaseMenu#handleKeydown|BaseMenu's handleKeydown method}
       * - Adds a `keydown` listener to the menu/all submenus.
       *   - Blocks propagation on the following keys: "ArrowUp", "ArrowRight",
       *     "ArrowDown", "ArrowLeft", "Home", "End", "Space", "Enter", "Escape",
       *     "*" (asterisk), and "A" through "Z".
       *   - Moves focus out if the "Tab" key is pressed.
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown() {
        var _this2 = this;

        _get(_getPrototypeOf(Treeview.prototype), "handleKeydown", this).call(this);

        this.dom.menu.addEventListener("keydown", function (event) {
          _this2.currentEvent = "keyboard";
          var key = keyPress(event);

          if (key === "Tab") {
            // Hitting Tab:
            // - Moves focus out of the menu.
            if (_this2.elements.rootMenu.focusState !== "none") {
              _this2.elements.rootMenu.blur();
            } else {
              _this2.elements.rootMenu.focus();
            }
          }

          if (_this2.focusState === "self") {
            var keys = ["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "Asterisk", "Home", "End"];
            var submenuKeys = ["Enter", "ArrowRight"];
            var controllerKeys = ["Escape"];

            if (keys.includes(key)) {
              preventEvent(event);
            } else if (_this2.currentMenuItem.isSubmenuItem && submenuKeys.includes(key)) {
              preventEvent(event);
            } else if (_this2.elements.controller && controllerKeys.includes(key)) {
              preventEvent(event);
            }
          }
        });
      }
      /**
       * Handles keyup events throughout the menu for proper menu use.
       *
       * Adds all `keyup` listeners from {@link BaseMenu#handleKeyup|BaseMenu's handleKeyup method}.
       *
       * Adds the following keybindings (explanations are taken from the
       * {@link https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/treeview/treeview-2/treeview-2a.html#kbd_label|Navigation Treeview Example Using Computed Properties}):
       *
       * | Key | Function |
       * | --- | --- |
       * | _Enter_ or _Space_ | Performs the default action (e.g. onclick event) for the focused node. |
       * | _Down arrow_ | <ul><li>Moves focus to the next node that is focusable without opening or closing a node.</li><li>If focus is on the last node, does nothing.</li></ul> |
       * | _Up arrow_ | <ul><li>Moves focus to the previous node that is focusable without opening or closing a node.</li><li>If focus is on the first node, does nothing.</li></ul> |
       * | _Right arrow_ | <ul><li>When focus is on a closed node, opens the node; focus does not move.</li><li>When focus is on a open node, moves focus to the first child node.</li><li>When focus is on an end node, does nothing.</li></ul> |
       * | _Left arrow_ | <ul><li>When focus is on an open node, closes the node.</li><li>When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.</li><li>When focus is on a root node that is also either an end node or a closed node, does nothing.</li></ul> |
       * | _Home_ | Moves focus to first node without opening or closing a node. |
       * | _End_ | Moves focus to the last node that can be focused without expanding any nodes that are closed. |
       * | _a-z_, _A-Z_ | <ul><li>Focus moves to the next node with a name that starts with the typed character.</li><li>Search wraps to first node if a matching name is not found among the nodes that follow the focused node.</li><li>Search ignores nodes that are descendants of closed nodes.</li></ul> |
       * | _* (asterisk)_ | <ul><li>Expands all closed sibling nodes that are at the same level as the focused node.</li><li>Focus does not move.</li></ul> |
       */

    }, {
      key: "handleKeyup",
      value: function handleKeyup() {
        var _this3 = this;

        _get(_getPrototypeOf(Treeview.prototype), "handleKeyup", this).call(this);

        this.dom.menu.addEventListener("keyup", function (event) {
          _this3.currentEvent = "keyboard";
          var key = keyPress(event);

          if (key === "Character") {
            // Hitting Character:
            // - Focus moves to the next node with a name that starts with the typed character.
            // - Search wraps to first node if a matching name is not found among the nodes that follow the focused node.
            // - Search ignores nodes that are descendants of closed nodes.
            preventEvent(event);
            _this3.elements.rootMenu.currentEvent = "character";

            _this3.focusNextNodeWithCharacter(event.key);
          } else if (_this3.focusState === "self") {
            if (key === "Enter" || key === "Space") {
              // Hitting Space or Enter:
              // - Performs the default action (e.g. onclick event) for the focused node.
              // - If focus is on a closed node, opens the node; focus does not move.
              preventEvent(event);

              if (_this3.currentMenuItem.isSubmenuItem) {
                if (_this3.currentMenuItem.elements.toggle.isOpen) {
                  _this3.currentMenuItem.elements.toggle.close();
                } else {
                  _this3.currentMenuItem.elements.toggle.preview();
                }
              } else {
                _this3.currentMenuItem.dom.link.click();
              }
            } else if (key === "ArrowDown") {
              // Hitting the Down Arrow:
              // - Moves focus to the next node that is focusable without opening or closing a node.
              // - If focus is on the last node, does nothing.
              preventEvent(event);

              if (_this3.currentMenuItem.isSubmenuItem && _this3.currentMenuItem.elements.toggle.isOpen) {
                _this3.blurCurrentChild();

                _this3.currentMenuItem.elements.childMenu.currentEvent = _this3.currentEvent;

                _this3.currentMenuItem.elements.childMenu.focusFirstChild();
              } else if (!_this3.isTopLevel && _this3.currentChild === _this3.elements.menuItems.length - 1) {
                _this3.blurCurrentChild();

                _this3.elements.parentMenu.currentEvent = _this3.currentEvent;

                _this3.elements.parentMenu.focusNextChild();
              } else {
                _this3.focusNextChild();
              }
            } else if (key === "ArrowUp") {
              // Hitting the Up Arrow:
              // - Moves focus to the previous node that is focusable without opening or closing a node.
              // - If focus is on the first node, does nothing.
              preventEvent(event);
              var previousMenuItem = _this3.elements.menuItems[_this3.currentChild - 1];

              if (previousMenuItem && previousMenuItem.isSubmenuItem && previousMenuItem.elements.toggle.isOpen) {
                _this3.blurCurrentChild();

                _this3.currentChild = _this3.currentChild - 1;
                _this3.currentMenuItem.elements.childMenu.currentEvent = _this3.currentEvent;

                _this3.currentMenuItem.elements.childMenu.focusLastChild();
              } else if (!_this3.isTopLevel && _this3.currentChild === 0) {
                _this3.blurCurrentChild();

                _this3.elements.parentMenu.currentEvent = _this3.currentEvent;

                _this3.elements.parentMenu.focusCurrentChild();
              } else {
                _this3.focusPreviousChild();
              }
            } else if (key === "ArrowRight") {
              // Hitting the Right Arrow:
              // - When focus is on a closed node, opens the node; focus does not move.
              // - When focus is on a open node, moves focus to the first child node.
              // - When focus is on an end node, does nothing.
              if (_this3.currentMenuItem.isSubmenuItem) {
                preventEvent(event);

                if (_this3.currentMenuItem.elements.toggle.isOpen) {
                  _this3.blurCurrentChild();

                  _this3.currentMenuItem.elements.childMenu.currentEvent = _this3.currentEvent;

                  _this3.currentMenuItem.elements.childMenu.focusFirstChild();
                } else {
                  _this3.currentMenuItem.elements.toggle.preview();
                }
              }
            } else if (key === "ArrowLeft") {
              // Hitting the Left Arrow:
              // - When focus is on an open node, closes the node.
              // - When focus is on a child node that is also either an end node or a closed node, moves focus to its parent node.
              // - When focus is on a root node that is also either an end node or a closed node, does nothing.
              preventEvent(event);

              if (_this3.currentMenuItem.isSubmenuItem && _this3.currentMenuItem.elements.toggle.isOpen) {
                _this3.currentMenuItem.elements.childMenu.blurCurrentChild();

                _this3.currentMenuItem.elements.toggle.close();
              } else if (!_this3.isTopLevel) {
                _this3.blurCurrentChild();

                _this3.elements.parentMenu.currentEvent = _this3.currentEvent;

                _this3.elements.parentMenu.focusCurrentChild();
              }
            } else if (key === "Home") {
              // Hitting Home:
              // - Moves focus to first node without opening or closing a node.
              preventEvent(event);

              _this3.blurCurrentChild();

              _this3.elements.rootMenu.focusFirstChild();
            } else if (key === "End") {
              // Hitting End:
              // - Moves focus to the last node that can be focused without expanding any nodes that are closed.
              preventEvent(event);

              _this3.blurCurrentChild();

              _this3.elements.rootMenu.focusLastNode();
            } else if (key === "Asterisk") {
              // Hitting Asterisk:
              // - Expands all closed sibling nodes that are at the same level as the focused node.
              // - Focus does not move.
              preventEvent(event);

              _this3.openChildren();
            }
          }
        });
      }
      /**
       * Focus the menu's last node of the entire expanded menu.
       *
       * This includes all _open_ child menu items.
       */

    }, {
      key: "focusLastNode",
      value: function focusLastNode() {
        var numberOfItems = this.elements.menuItems.length - 1;
        var lastChild = this.elements.menuItems[numberOfItems];

        if (lastChild.isSubmenuItem && lastChild.elements.toggle.isOpen) {
          this.currentChild = numberOfItems;
          lastChild.elements.childMenu.currentEvent = this.currentEvent;
          lastChild.elements.childMenu.focusLastNode();
        } else {
          this.focusLastChild();
        }
      }
      /**
       * Open all submenu children.
       */

    }, {
      key: "openChildren",
      value: function openChildren() {
        this.elements.submenuToggles.forEach(function (toggle) {
          return toggle.preview();
        });
      }
      /**
       * Focus the menu's next node starting with a specific letter.
       *
       * This includes all _open_ child menu items.
       *
       * Wraps to the first node if no match is found after the current node.
       *
       * @param {string} char - The character to look for.
       */

    }, {
      key: "focusNextNodeWithCharacter",
      value: function focusNextNodeWithCharacter(char) {
        /**
         * Gets all the menu's items and submenu's items.
         *
         * @param {Treeview} menu - The menu.
         *
         * @returns {TreeviewItem[]} - The menu items.
         */
        function getOpenMenuItems(menu) {
          var menuItems = [];
          menu.elements.menuItems.forEach(function (menuItem) {
            menuItems.push(menuItem);

            if (menuItem.isSubmenuItem && menuItem.elements.toggle.isOpen) {
              menuItems = [].concat(_toConsumableArray(menuItems), _toConsumableArray(getOpenMenuItems(menuItem.elements.toggle.elements.controlledMenu)));
            }
          });
          return menuItems;
        } // Ensure the character is lowercase just to be safe.


        var match = char.toLowerCase(); // Sort the menu items so the child _after_ the current child is first to be searched.

        var menuItems = getOpenMenuItems(this.elements.rootMenu);
        var currentItem = menuItems.indexOf(this.currentMenuItem) + 1;
        var sortedMenuItems = [].concat(_toConsumableArray(menuItems.slice(currentItem)), _toConsumableArray(menuItems.slice(0, currentItem)));
        var ctr = 0;
        var found = false;

        while (!found && ctr < sortedMenuItems.length) {
          // Ensure the text in the item is lowercase just to be safe.
          var text = sortedMenuItems[ctr].dom.item.innerText.toLowerCase(); // Focus the child if the text matches, otherwise move on.

          if (text.startsWith(match)) {
            found = true;
            var menu = sortedMenuItems[ctr].elements.parentMenu;
            var index = menu.elements.menuItems.indexOf(sortedMenuItems[ctr]);
            this.elements.rootMenu.blurChildren();
            menu.focusChild(index);
          }

          ctr++;
        }
      }
    }]);

    return Treeview;
  }(BaseMenu);

  return Treeview;

}());
//# sourceMappingURL=treeview.js.map