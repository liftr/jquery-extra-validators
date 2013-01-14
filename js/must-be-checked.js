jQuery.validator.unobtrusive.adapters.add("mustbechecked", function (options) {
    if (options.element.tagName.toUpperCase() == "INPUT" && options.element.type.toUpperCase() == "CHECKBOX") {
        //setValidationValues(options, "required", true);
        options.rules["required"] = true;
        if (options.message) {
            options.messages["required"] = options.message;
        }
    }
});