document.addEventListener("DOMContentLoaded", () => {
    const myjQuery = function (value) {
        const elementList = document.querySelectorAll(value);

        return {
            addClass(newClass) {
                for (let i = 0; i < elementList.length; ++i) {
                    elementList[i].classList.add(newClass);
                }

                return this;
            },
            removeClass(remoteClass) {
                for (let i = 0; i < elementList.length; ++i) {
                    elementList[i].classList.remove(remoteClass);
                }

                return this;
            },
            append(data) {
                for (let i = 0; i < elementList.length; ++i) {
                    const lastValue = elementList[i].innerHTML;
                    elementList[i].innerHTML = `${lastValue} ${data}`;
                }

                return this;
            },
            remove(elementName) {
                if (elementName == null) {
                    for (let i = 0; i < elementList.length; ++i) {
                        elementList[i].remove();
                    }
                } else {
                    const elem = document.createElement(elementName);

                    for (let i = 0; i < elementList.length; ++i) {
                        const children = elementList[i].childNodes;

                        for (const child of children) {
                            elem.innerHTML = child.innerHTML;

                            if (child.nodeType != 3 && child.isEqualNode(elem)) {
                                child.remove();
                            }
                        }
                    }
                }

                return this;
            },
            text(content) {
                if (content == null) {
                    let commonValue = "";

                    for (let i = 0; i < elementList.length; ++i) {
                        commonValue = `${commonValue + elementList[i].innerHTML} `;
                    }

                    return commonValue;
                }

                for (let i = 0; i < elementList.length; ++i) {
                    elementList[i].innerHTML = content;
                }

                return this;
            },
            attr(attribute, valueAttribute) {
                if (value == null) {
                    return elementList[0].getAttribute(attribute);
                }
                elementList[0].setAttribute(attribute, valueAttribute);

                return this;
            },
            children() {
                const childNode = [];

                for (const elem of elementList) {
                    const children = elem.childNodes;

                    for (let i = 0; i < children.length; ++i) {
                        if (children[i].nodeType != 3) {
                            childNode.push(children[i]);
                        }
                    }
                }
            },
            empty() {
                for (let i = 0; i < elementList.length; ++i) {
                    elementList[i].innerHTML = "";
                }

                return this;
            },
            css(prop, valueProperty) {
                if (valueProperty != null) {
                    for (let i = 0; i < elementList.length; ++i) {
                        const style = window.getComputedStyle(elementList[i]);
                        const lastValue = style.getPropertyValue(prop);
                        elementList[i].style.setProperty(lastValue, valueProperty);
                    }
                } else {
                    const style = window.getComputedStyle(elementList[0]);

                    return style.getPropertyValue(prop);
                }

                return this;
            },
            click(handler) {
                for (let i = 0; i < elementList.length; ++i) {
                    elementList[i].addEventListener("click", handler, false);
                }

                return this;
            },
            each(callback) {
                for (let i = 0; i < elementList.length; ++i) {
                    callback.call(elementList[i]);
                }

                return this;
            },
            toggle() {
                for (let i = 0; i < elementList.length; ++i) {
                    if (elementList[i].hidden) {
                        elementList[i].hidden = false;
                    } else {
                        elementList[i].hidden = true;
                    }
                }

                return this;
            },
            wrap(elem) {
                const parent = elementList[0].parentNode;
                elementList[0].insertAdjacentHTML("afterEnd", elem);

                for (let i = 0; i < parent.childNodes.length; ++i) {
                    if (parent.childNodes[i].isEqualNode(elementList[0])) {
                        console.log(parent.childNodes[i + 1]);
                        parent.childNodes[i + 1].appendChild(elementList[0]);
                    }
                }

                return this;
            },
        };
    };
}, false);
