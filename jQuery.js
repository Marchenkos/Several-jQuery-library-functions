const myjQuery = function (value) {
    let listOfElements = [];

    function enumerationAsArray(collection, callback) {
        [].forEach.call(collection, callback);
    }

    if (value instanceof HTMLElement) {
        listOfElements.push(value);
    } else if (value.match(/<[^<>]+/)) {
        const newNode = value.match(/[^<>]+/);
        listOfElements.push(document.createElement(newNode));
        document.body.appendChild(listOfElements[0]);
    } else {
        listOfElements = document.querySelectorAll(value);
    }

    return {
        addClass(className) {
            enumerationAsArray(listOfElements, element => {
                element.classList.add(className);
            });

            return this;
        },
        removeClass(className) {
            enumerationAsArray(listOfElements, element => {
                element.classList.remove(className)
            });

            return this;
        },
        append(data) {
            let insert = data;

            if (data.match(/<[^<>]+/)) {
                const newNode = data.match(/[^<>]+/);
                const content = data.match(/<([\w]+)[^>]*>(.*?)<\/\1>/);
                const newElement = document.createElement(newNode);
                newElement.innerHTML = content[0];
                insert = newElement;
            }

            enumerationAsArray(listOfElements, element => {
                element.append(insert);
            });

            return this;
        },
        remove(elementName) {
            if (elementName == null) {
                enumerationAsArray(listOfElements, element => {
                    element.remove()});
            } else {
                enumerationAsArray(listOfElements, element => {
                    const elementsToRemove = element.querySelectorAll(elementName);
                    enumerationAsArray(elementsToRemove, element => {
                        element.remove();
                    });
                });
            }

            return this;
        },
        text(content) {
            if (content == null) {
                let commonValue = "";
                enumerationAsArray(listOfElements, element => {
                    commonValue = `${commonValue + element.innerHTML} `;
                });

                return commonValue;
            }

            enumerationAsArray(listOfElements, element => {
                element.innerHTML = content;
            });

            return this;
        },
        attr(attribute, valueAttribute) {
            if (valueAttribute == null) {
                return listOfElements[0].getAttribute(attribute);
            }

            listOfElements[0].setAttribute(attribute, valueAttribute);

            return this;
        },
        children() {
            const childNode = [];

            enumerationAsArray(listOfElements, element => {
                const children = element.childNodes;
                enumerationAsArray(children, child => {
                    if (child.nodeName != "#text") {
                        childNode.push(child);
                    }
                });
            });

            listOfElements = childNode;

            return this;
        },
        empty() {
            enumerationAsArray(listOfElements, element => {
                element.innerHTML = "";
            });

            return this;
        },
        css(property, valueProperty) {
            if (valueProperty != null) {
                enumerationAsArray(listOfElements, element => {
                    const style = window.getComputedStyle(element);
                    element.style.setProperty(property, valueProperty);
                });
            } else {
                const arrayOfProperties = [].map.call(listOfElements, () => {
                    const style = window.getComputedStyle(listOfElements[0]);
                    return style.getPropertyValue(property);
                });

                return arrayOfProperties;
            }

            return this;
        },
        click(handler) {
            enumerationAsArray(listOfElements, element => {
                element.addEventListener("click", handler, false);
            });

            return this;
        },
        each(callback) {
            enumerationAsArray(listOfElements, element => {
                callback.call(element);
            });

            return this;
        },
        toggle() {
            enumerationAsArray(listOfElements, element => {
                if (element.hidden) {
                    element.hidden = false;
                } else {
                    element.hidden = true;
                }
            });

            return this;
        },
        wrap(wrappingElement) {
            const parent = listOfElements[0].parentNode;
            const newNode = wrappingElement.match(/[^<>]+/);

            enumerationAsArray(listOfElements, element => {
                const newElement = document.createElement(newNode);
                parent.insertBefore(newElement, element);
                newElement.appendChild(element);
            });

            return this;
        },
    };
};
