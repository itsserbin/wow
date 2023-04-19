import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderSlotInner, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
function isEmpty(opt) {
  if (opt === 0)
    return false;
  if (Array.isArray(opt) && opt.length === 0)
    return true;
  return !opt;
}
function not(fun) {
  return (...params) => !fun(...params);
}
function includes(str, query) {
  if (str === void 0)
    str = "undefined";
  if (str === null)
    str = "null";
  if (str === false)
    str = "false";
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1;
}
function filterOptions(options, search, label, customLabel) {
  return search ? options.filter((option) => includes(customLabel(option, label), search)).sort((a, b) => customLabel(a, label).length - customLabel(b, label).length) : options;
}
function stripGroups(options) {
  return options.filter((option) => !option.$isLabel);
}
function flattenOptions(values, label) {
  return (options) => options.reduce((prev, curr) => {
    if (curr[values] && curr[values].length) {
      prev.push({
        $groupLabel: curr[label],
        $isLabel: true
      });
      return prev.concat(curr[values]);
    }
    return prev;
  }, []);
}
function filterGroups(search, label, values, groupLabel, customLabel) {
  return (groups) => groups.map((group) => {
    if (!group[values]) {
      console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`);
      return [];
    }
    const groupOptions = filterOptions(group[values], search, label, customLabel);
    return groupOptions.length ? {
      [groupLabel]: group[groupLabel],
      [values]: groupOptions
    } : [];
  });
}
const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);
const multiselectMixin = {
  data() {
    return {
      search: "",
      isOpen: false,
      preferredOpenDirection: "below",
      optimizedHeight: this.maxHeight
    };
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: "Select option"
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default(option, label) {
        if (isEmpty(option))
          return "";
        return label ? option[label] : option;
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
     */
    tagPlaceholder: {
      type: String,
      default: "Press enter to create a tag"
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
     */
    tagPosition: {
      type: String,
      default: "top"
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
     */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
     */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
     */
    optionsLimit: {
      type: Number,
      default: 1e3
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
     */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
     */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
     */
    blockKeys: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
     */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
     */
    preselectFirst: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (!this.multiple && this.max) {
      console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.");
    }
    if (this.preselectFirst && !this.internalValue.length && this.options.length) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue() {
      return this.modelValue || this.modelValue === 0 ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue] : [];
    },
    filteredOptions() {
      const search = this.search || "";
      const normalizedSearch = search.toLowerCase().trim();
      let options = this.options.concat();
      if (this.internalSearch) {
        options = this.groupValues ? this.filterAndFlat(options, normalizedSearch, this.label) : filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }
      options = this.hideSelected ? options.filter(not(this.isSelected)) : options;
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === "bottom") {
          options.push({ isTag: true, label: search });
        } else {
          options.unshift({ isTag: true, label: search });
        }
      }
      return options.slice(0, this.optionsLimit);
    },
    valueKeys() {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy]);
      } else {
        return this.internalValue;
      }
    },
    optionKeys() {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase());
    },
    currentOptionLabel() {
      return this.multiple ? this.searchable ? "" : this.placeholder : this.internalValue.length ? this.getOptionLabel(this.internalValue[0]) : this.searchable ? "" : this.placeholder;
    }
  },
  watch: {
    internalValue() {
      if (this.resetAfter && this.internalValue.length) {
        this.search = "";
        this.$emit("update:modelValue", this.multiple ? [] : null);
      }
    },
    search() {
      this.$emit("search-change", this.search);
    }
  },
  emits: ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue() {
      return this.multiple ? this.internalValue : this.internalValue.length === 0 ? null : this.internalValue[0];
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat(options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options);
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip(options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options);
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch(query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption(query) {
      return !this.options ? false : this.optionKeys.indexOf(query) > -1;
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected(option) {
      const opt = this.trackBy ? option[this.trackBy] : option;
      return this.valueKeys.indexOf(opt) > -1;
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled(option) {
      return !!option.$isDisabled;
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel(option) {
      if (isEmpty(option))
        return "";
      if (option.isTag)
        return option.label;
      if (option.$isLabel)
        return option.$groupLabel;
      const label = this.customLabel(option, this.label);
      if (isEmpty(label))
        return "";
      return label;
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select(option, key) {
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return;
      }
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled || option.$isDisabled || option.$isLabel)
        return;
      if (this.max && this.multiple && this.internalValue.length === this.max)
        return;
      if (key === "Tab" && !this.pointerDirty)
        return;
      if (option.isTag) {
        this.$emit("tag", option.label, this.id);
        this.search = "";
        if (this.closeOnSelect && !this.multiple)
          this.deactivate();
      } else {
        const isSelected = this.isSelected(option);
        if (isSelected) {
          if (key !== "Tab")
            this.removeElement(option);
          return;
        }
        this.$emit("select", option, this.id);
        if (this.multiple) {
          this.$emit("update:modelValue", this.internalValue.concat([option]));
        } else {
          this.$emit("update:modelValue", option);
        }
        if (this.clearOnSelect)
          this.search = "";
      }
      if (this.closeOnSelect)
        this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup(selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      if (!group)
        return;
      if (this.wholeGroupSelected(group)) {
        this.$emit("remove", group[this.groupValues], this.id);
        const newValue = this.internalValue.filter(
          (option) => group[this.groupValues].indexOf(option) === -1
        );
        this.$emit("update:modelValue", newValue);
      } else {
        const optionsToAdd = group[this.groupValues].filter(
          (option) => !(this.isOptionDisabled(option) || this.isSelected(option))
        );
        this.$emit("select", optionsToAdd, this.id);
        this.$emit(
          "update:modelValue",
          this.internalValue.concat(optionsToAdd)
        );
      }
      if (this.closeOnSelect)
        this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected(group) {
      return group[this.groupValues].every(
        (option) => this.isSelected(option) || this.isOptionDisabled(option)
      );
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled(group) {
      return group[this.groupValues].every(this.isOptionDisabled);
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement(option, shouldClose = true) {
      if (this.disabled)
        return;
      if (option.$isDisabled)
        return;
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return;
      }
      const index = typeof option === "object" ? this.valueKeys.indexOf(option[this.trackBy]) : this.valueKeys.indexOf(option);
      this.$emit("remove", option, this.id);
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit("update:modelValue", newValue);
      } else {
        this.$emit("update:modelValue", null);
      }
      if (this.closeOnSelect && shouldClose)
        this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement() {
      if (this.blockKeys.indexOf("Delete") !== -1)
        return;
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate() {
      if (this.isOpen || this.disabled)
        return;
      this.adjustPosition();
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }
      this.isOpen = true;
      if (this.searchable) {
        if (!this.preserveSearch)
          this.search = "";
        this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else {
        this.$el.focus();
      }
      this.$emit("open", this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate() {
      if (!this.isOpen)
        return;
      this.isOpen = false;
      if (this.searchable) {
        this.$refs.search && this.$refs.search.blur();
      } else {
        this.$el.blur();
      }
      if (!this.preserveSearch)
        this.search = "";
      this.$emit("close", this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle() {
      this.isOpen ? this.deactivate() : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition() {
      if (typeof window === "undefined")
        return;
      const spaceAbove = this.$el.getBoundingClientRect().top;
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom;
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight;
      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === "below" || this.openDirection === "bottom") {
        this.preferredOpenDirection = "below";
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight);
      } else {
        this.preferredOpenDirection = "above";
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight);
      }
    }
  }
};
const pointerMixin = {
  data() {
    return {
      pointer: 0,
      pointerDirty: false
    };
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition() {
      return this.pointer * this.optionHeight;
    },
    visibleElements() {
      return this.optimizedHeight / this.optionHeight;
    }
  },
  watch: {
    filteredOptions() {
      this.pointerAdjust();
    },
    isOpen() {
      this.pointerDirty = false;
    },
    pointer() {
      this.$refs.search && this.$refs.search.setAttribute("aria-activedescendant", this.id + "-" + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight(index, option) {
      return {
        "multiselect__option--highlight": index === this.pointer && this.showPointer,
        "multiselect__option--selected": this.isSelected(option)
      };
    },
    groupHighlight(index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          "multiselect__option--disabled",
          { "multiselect__option--group": selectedGroup.$isLabel }
        ];
      }
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel;
      });
      return group && !this.wholeGroupDisabled(group) ? [
        "multiselect__option--group",
        { "multiselect__option--highlight": index === this.pointer && this.showPointer },
        { "multiselect__option--group-selected": this.wholeGroupSelected(group) }
      ] : "multiselect__option--disabled";
    },
    addPointerElement({ key } = "Enter") {
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward() {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        if (this.filteredOptions[this.pointer] && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect)
          this.pointerBackward();
      } else {
        if (this.filteredOptions[this.pointer] && this.filteredOptions[0].$isLabel && !this.groupSelect)
          this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset() {
      if (!this.closeOnSelect)
        return;
      this.pointer = 0;
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust() {
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
      if (this.filteredOptions.length > 0 && this.filteredOptions[this.pointer].$isLabel && !this.groupSelect) {
        this.pointerForward();
      }
    },
    pointerSet(index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};
const Multiselect_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  name: "vue-multiselect",
  mixins: [multiselectMixin, pointerMixin],
  props: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
      type: String,
      default: ""
    },
    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    modelValue: {
      type: null,
      default() {
        return [];
      }
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
      type: String,
      default: "Press enter to select"
    },
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
      type: String,
      default: "Press enter to select group"
    },
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
      type: String,
      default: "Selected"
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
      type: String,
      default: "Press enter to remove"
    },
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectGroupLabel: {
      type: String,
      default: "Press enter to deselect group"
    },
    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
      type: Number,
      default: 99999
    },
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    loading: {
      type: Boolean,
      default: false
    },
    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
     */
    openDirection: {
      type: String,
      default: ""
    },
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    isSingleLabelVisible() {
      return (this.singleValue || this.singleValue === 0) && (!this.isOpen || !this.searchable) && !this.visibleValues.length;
    },
    isPlaceholderVisible() {
      return !this.internalValue.length && (!this.searchable || !this.isOpen);
    },
    visibleValues() {
      return this.multiple ? this.internalValue.slice(0, this.limit) : [];
    },
    singleValue() {
      return this.internalValue[0];
    },
    deselectLabelText() {
      return this.showLabels ? this.deselectLabel : "";
    },
    deselectGroupLabelText() {
      return this.showLabels ? this.deselectGroupLabel : "";
    },
    selectLabelText() {
      return this.showLabels ? this.selectLabel : "";
    },
    selectGroupLabelText() {
      return this.showLabels ? this.selectGroupLabel : "";
    },
    selectedLabelText() {
      return this.showLabels ? this.selectedLabel : "";
    },
    inputStyle() {
      if (this.searchable || this.multiple && this.modelValue && this.modelValue.length) {
        return this.isOpen ? { width: "100%" } : { width: "0", position: "absolute", padding: "0" };
      }
      return "";
    },
    contentStyle() {
      return this.options.length ? { display: "inline-block" } : { display: "block" };
    },
    isAbove() {
      if (this.openDirection === "above" || this.openDirection === "top") {
        return true;
      } else if (this.openDirection === "below" || this.openDirection === "bottom") {
        return false;
      } else {
        return this.preferredOpenDirection === "above";
      }
    },
    showSearchInput() {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: [{ "multiselect--active": _ctx.isOpen, "multiselect--disabled": $props.disabled, "multiselect--above": $options.isAbove }, "multiselect"],
    role: "combobox",
    "aria-owns": "listbox-" + _ctx.id
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => {
    _push(`<div class="multiselect__select"></div>`);
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "clear", { search: _ctx.search }, null, _push, _parent);
  _push(`<div class="multiselect__tags bg-white dark:bg-gray-800 rounded-lg p-5">`);
  ssrRenderSlot(_ctx.$slots, "selection", {
    search: _ctx.search,
    remove: _ctx.removeElement,
    values: $options.visibleValues,
    isOpen: _ctx.isOpen
  }, () => {
    _push(`<div class="multiselect__tags-wrap" style="${ssrRenderStyle($options.visibleValues.length > 0 ? null : { display: "none" })}"><!--[-->`);
    ssrRenderList($options.visibleValues, (option, index) => {
      ssrRenderSlot(_ctx.$slots, "tag", {
        option,
        search: _ctx.search,
        remove: _ctx.removeElement
      }, () => {
        _push(`<span class="multiselect__tag"><span>${ssrInterpolate(_ctx.getOptionLabel(option))}</span><i tabindex="1" class="multiselect__tag-icon"></i></span>`);
      }, _push, _parent);
    });
    _push(`<!--]--></div>`);
    if (_ctx.internalValue && _ctx.internalValue.length > $props.limit) {
      ssrRenderSlot(_ctx.$slots, "limit", {}, () => {
        _push(`<strong class="multiselect__strong">${ssrInterpolate($props.limitText(_ctx.internalValue.length - $props.limit))}</strong>`);
      }, _push, _parent);
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlotInner(_ctx.$slots, "loading", {}, () => {
    _push(`<div style="${ssrRenderStyle($props.loading ? null : { display: "none" })}" class="multiselect__spinner"></div>`);
  }, _push, _parent, null, true);
  if (_ctx.searchable) {
    _push(`<input${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("id", _ctx.id)} type="text" autocomplete="off" spellcheck="false"${ssrRenderAttr("placeholder", _ctx.placeholder)} style="${ssrRenderStyle($options.inputStyle)}"${ssrRenderAttr("value", _ctx.search)}${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}${ssrRenderAttr("tabindex", $props.tabindex)} class="multiselect__input text-gray-900 text-sm rounded-l block w-full h-5 ring-0 border-0 dark:bg-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:text-white focus:ring-0 focus:border-gray-700 focus:pl-0"${ssrRenderAttr("aria-controls", "listbox-" + _ctx.id)}>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isSingleLabelVisible) {
    _push(`<span class="multiselect__single text-gray-900 dark:text-white">`);
    ssrRenderSlot(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => {
      _push(`${ssrInterpolate(_ctx.currentOptionLabel)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.isPlaceholderVisible) {
    _push(`<span class="multiselect__placeholder text-gray-900 dark:text-white">`);
    ssrRenderSlot(_ctx.$slots, "placeholder", {}, () => {
      _push(`${ssrInterpolate(_ctx.placeholder)}`);
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="multiselect__content-wrapper" style="${ssrRenderStyle([
    _ctx.isOpen ? null : { display: "none" },
    { maxHeight: _ctx.optimizedHeight + "px" }
  ])}" tabindex="-1"><ul class="multiselect__content bg-white dark:bg-gray-800 text-gray-900 dark:text-white dark:border-gray-700" style="${ssrRenderStyle($options.contentStyle)}" role="listbox"${ssrRenderAttr("id", "listbox-" + _ctx.id)}>`);
  ssrRenderSlot(_ctx.$slots, "beforeList", {}, null, _push, _parent);
  if (_ctx.multiple && _ctx.max === _ctx.internalValue.length) {
    _push(`<li><span class="multiselect__option">`);
    ssrRenderSlot(_ctx.$slots, "maxElements", {}, () => {
      _push(`Maximum of ${ssrInterpolate(_ctx.max)} options selected. First remove a selected option to select another.`);
    }, _push, _parent);
    _push(`</span></li>`);
  } else {
    _push(`<!---->`);
  }
  if (!_ctx.max || _ctx.internalValue.length < _ctx.max) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.filteredOptions, (option, index) => {
      _push(`<li class="multiselect__element"${ssrRenderAttr("id", _ctx.id + "-" + index)}${ssrRenderAttr("role", !(option && (option.$isLabel || option.$isDisabled)) ? "option" : null)}>`);
      if (!(option && (option.$isLabel || option.$isDisabled))) {
        _push(`<span class="${ssrRenderClass([_ctx.optionHighlight(index, option), "multiselect__option"])}"${ssrRenderAttr("data-select", option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText)}${ssrRenderAttr("data-selected", $options.selectedLabelText)}${ssrRenderAttr("data-deselect", $options.deselectLabelText)}>`);
        ssrRenderSlot(_ctx.$slots, "option", {
          option,
          search: _ctx.search,
          index
        }, () => {
          _push(`<span>${ssrInterpolate(_ctx.getOptionLabel(option))}</span>`);
        }, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      if (option && (option.$isLabel || option.$isDisabled)) {
        _push(`<span${ssrRenderAttr("data-select", _ctx.groupSelect && $options.selectGroupLabelText)}${ssrRenderAttr("data-deselect", _ctx.groupSelect && $options.deselectGroupLabelText)} class="${ssrRenderClass([_ctx.groupHighlight(index, option), "multiselect__option"])}">`);
        ssrRenderSlot(_ctx.$slots, "option", {
          option,
          search: _ctx.search,
          index
        }, () => {
          _push(`<span>${ssrInterpolate(_ctx.getOptionLabel(option))}</span>`);
        }, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`<li style="${ssrRenderStyle($props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading) ? null : { display: "none" })}"><span class="multiselect__option">`);
  ssrRenderSlot(_ctx.$slots, "noResult", { search: _ctx.search }, () => {
    _push(`No elements found. Consider changing the search query.`);
  }, _push, _parent);
  _push(`</span></li><li style="${ssrRenderStyle($props.showNoOptions && (_ctx.options.length === 0 && !_ctx.search && !$props.loading) ? null : { display: "none" })}"><span class="multiselect__option">`);
  ssrRenderSlot(_ctx.$slots, "noOptions", {}, () => {
    _push(`List is empty.`);
  }, _push, _parent);
  _push(`</span></li>`);
  ssrRenderSlot(_ctx.$slots, "afterList", {}, null, _push, _parent);
  _push(`</ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Multiselect/Multiselect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Multiselect = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Multiselect as M
};
