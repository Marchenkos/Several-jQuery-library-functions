let myjQuery = function(value) {
    let elementList = document.querySelectorAll(value);

    return {
        addClass: function(newClass) {
            for (let i = 0; i < elementList.length; ++i) {
                elementList[i].classList.add(newClass);
            }

            return this;
        },
        removeClass: function(remoteClass) {
            for (let i = 0; i < elementList.length; ++i) {
                elementList[i].classList.remove(remoteClass);
            }

            return this;
        },
        append: function(data) {
            let lastValue = elementList[0].innerHTML;
            elementList[0].innerHTML = lastValue + " " +data;

            return this;
        },
        remove: function(elementName) {
            let element = document.querySelector(elementName);
            element.remove();

            return this;
        },
        text: function(value) {
            if (value == null) {
                let commonValue = "";

                for (let i = 0; i < elementList.length; ++i) {
                    commonValue = commonValue + elementList[i].innerHTML + " ";
                }

                return commonValue;
             } else {
                let item = elementList[0];
                item.innerHTML = data;
            }

            return this;
        },
        attr: function(attribute, value) {
            if (value == null) {
                let value = elementList[0].getAttribute(attribute);
            } else {
                elementList[0].setAttribute(attribute, value);
            }
       
            return this;
        },
        children: function() {
            let childNode = [];

            for(elem of elementList) {
                childNode.push(elem.childNodes);
            }

            return;
        },
        empty: function() {
            for (let i = 0; i < elementList.length; ++i) {
                elementList[i].innerHTML = "";
            }

            return this;
        },
        css: function(prop, value) {
            if (value != null) {
                for (let i = 0; i < elementList.length; ++i) {
                    let style = window.getComputedStyle(elementList[i]);
                    let lastValue = style.getPropertyValue(prop); 
                    elementList[i].style.setProperty(lastValue, value);
                }
            } else {
                let style = window.getComputedStyle(elementList[0]);
                
                return style.getPropertyValue(prop);
            }

            return this;
        },
        click: function(handler) {
            for (let i = 0; i < elementList.length; ++i) {   
                elementList[i].addEventListener('click', handler, false);
            }
            
            return this;
        },
        each: function(callback) {
            for (let i = 0; i < elementList.length; ++i) {   
                callback.call(elementList[i]);
            }
            
            return this;
        },
        toggle: function() {
            return this;
        },
        wrap: function() {
            return this;
        }
    }
}

// myjQuery(".lala").addClass("kis").removeClass("lala");
// myjQuery("body").remove("#para1");
// myjQuery(".lala").append("hello");
// myjQuery("span").empty();
// myjQuery("#dd").children();
// myjQuery("#dd").attr("width", "400px");
// myjQuery("span").each(function () {
//     console.log(this);
// });
// myjQuery(".lala").click(function() {
//     alert('hello');
// });
// myjQuery(".lala").css('font-size');
// myjQuery(".lala").css('color', "red");