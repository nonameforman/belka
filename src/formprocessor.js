function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    // If first entry with this name
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      // If second entry with this name
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      // If third or later entry with this name
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
}

var query = window.location.search.substring(1);
var qs = parse_query_string(query);
var localStorage = window.localStorage;
if (qs.utm_source) localStorage.utm_source = qs.utm_source;
if (qs.utm_source) localStorage.utm_source = qs.utm_source;
if (qs.utm_medium) localStorage.utm_medium = qs.utm_medium;
if (qs.utm_campaign) localStorage.utm_campaign = qs.utm_campaign;
if (qs.utm_campaign_name) localStorage.utm_campaign_name = qs.utm_campaign_name;
if (qs.utm_source) localStorage.utm_term = qs.utm_term;
if (qs.utm_placement) localStorage.utm_placement = qs.utm_placement;
if (qs.device_type) localStorage.device_type = qs.device_type;
if (qs.utm_description) localStorage.utm_description = qs.utm_description;
if (qs.utm_region_name) localStorage.utm_region_name = qs.utm_region_name;
if (qs.yclid) localStorage.yclid = qs.yclid;

function getStoredItem(item) {
  if (
    !localStorage.getItem("lpg3746_" + item) &&
    localStorage.getItem("lpg3746_" + item) != "false"
  )
    return false;
  else return localStorage.getItem("lpg3746_" + item);
}
function setStoredItem(item, value) {
  if (value == null || value == "" || value == undefined) return false;
  else return localStorage.setItem("lpg3746_" + item, value);
}

function getField(name, array) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i].name == name) {
      return array[i].value;
    }
  }
  return false;
}

$(document).ready(function () {
  var nameReplacementEl = document.getElementsByClassName("thanks-name");
  var cityReplacementEl = document.getElementsByClassName("thanks-city");
  if (nameReplacementEl !== null) {
    if (getStoredItem("name")) {
      nameReplacementEl.innerText = getStoredItem("name") + ", ";
    } else {
      nameReplacementEl.innerText = "Уважаемый клиент, ";
    }
  }
  if (cityReplacementEl !== null) {
    if (getStoredItem("city")) {
      cityReplacementEl.innerText = getStoredItem("city") + ", ";
    } else {
      cityReplacementEl.innerText = "Не указано, ";
    }
  }

  if (typeof ymaps !== "undefined") {
    //'country: Израиль', 'province: Тель-Авивский округ', 'area: подокруг Тель-Авив', 'locality: Тель-Авив'
    var addTranslate = {
      country: "Страна",
      province: "Округ",
      area: "Подокруг",
      locality: "Город",
    };
    var reducerMapHandler = function (addrEl) {
      return addTranslate[addrEl.kind] + ": " + addrEl.name;
    };

    ymaps.ready(function () {
      ymaps.geolocation
        .get({provider: "yandex", autoReverseGeocode: true})
        .then(function (result) {
          uInf = result.geoObjects
            .get(0)
            .properties.get("metaDataProperty")
            .GeocoderMetaData.Address.Components.map(reducerMapHandler);
          document.usercity =
            result.geoObjects.get(0).properties.get("metaDataProperty")
              .GeocoderMetaData.Address.formatted || "";
          setStoredItem("city", document.usercity);
          setStoredItem("user_location_ip", uInf.join(", "));
        });
    });
  }

  //ValidationForm
  function validation(form) {
    let valOK = true;
    let formComponents = form.elements;
    const arrPull = [];

    for (let i = 0; i < formComponents.length; i++) {
      const activeInput = formComponents[i];

      if (activeInput.classList.contains("input")) {
        if (activeInput.classList.contains("input--phone")) {
          if (!/\+\d{1} \(\d{3}\) \d{3}-\d{2}-\d{2}/g.test(activeInput.value)) {
            setTimeout(() => {
              activeInput.classList.add("input_error");
            }, 10);
            valOK = false;
          }
        }

        if (activeInput.classList.contains("input--email")) {
          let reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          if (!reg.test(activeInput.value)) {
            valOK = false;
            setTimeout(() => {
              activeInput.classList.add("input_error");
            }, 10);
          } else {
            activeInput.classList.remove("input_error");
          }
        }

        if (activeInput.classList.contains("input--user")) {
          if (activeInput.value == "") {
            valOK = false;
            setTimeout(() => {
              activeInput.classList.add("input_error");
            }, 10);
          } else {
            activeInput.classList.remove("input_error");
          }
        }

        if (activeInput.classList.contains("input--city")) {
          if (activeInput.value == "") {
            valOK = false;
            setTimeout(() => {
              activeInput.classList.add("input_error");
            }, 10);
          } else {
            activeInput.classList.remove("input_error");
          }
        }
      }

      if (activeInput.classList.contains("input--questions")) {
        if (activeInput.value === "") {
          valOK = false;
          setTimeout(() => {
            activeInput.classList.add("input_error");
          }, 10);
        } else {
          activeInput.classList.remove("input_error");
        }
      }
      if (activeInput.classList.contains("fgp__pull-radio")) {
        arrPull.push(activeInput);
      }
    }

    if (arrPull.length != 0) {
      const isChecked = !!arrPull.filter((item) => item.checked).length;
      if (!isChecked) {
        valOK = false;
        $(".fgp__pull-radio").addClass("input-pull_error");
      }
    }

    return valOK;
  }

  const inputs = document.querySelectorAll("input");
  for (const input of inputs) {
    input.onfocus = (e) => {
      e.target.classList.remove("input_error");
    };
  }

  const textArea = document.querySelector(".input--questions");

  textArea.onfocus = (e) => {
    e.target.classList.remove("input_error");
  };

  // Form Process
  $(document).on("submit", "form:not(#formLocation)", function (event) {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      input.classList.remove("input_error");
    }

    event.preventDefault();
    var submitedFrom = $(this);

    let valOK = validation(submitedFrom[0]);

    if (valOK == true) {
      var data = submitedFrom.serializeArray();
      console.log(
        "🚀 ~ file: formprocessor.js:214 ~ submitedFrom:",
        submitedFrom,
      );

      var formData = new FormData();
      var preloader = submitedFrom.find("div.preload__box");
      if (preloader == undefined) {
        preloader = false;
      }

      setStoredItem("name", getField("name", data));
      if (getField("city", data)) setStoredItem("city", getField("city", data));

      if (
        !getField("name", data) &&
        getStoredItem("name") != "false" &&
        getStoredItem("name")
      ) {
        data.push({name: "name", value: getStoredItem("name")});
      }
      var cityInserted = false;
      if (
        !getField("city", data) &&
        getStoredItem("city") != "false" &&
        getStoredItem("city") &&
        submitedFrom.has("input[name='city']").length > 0
      ) {
        cityInserted = true;
        data.push({name: "city", value: "не заполнено"});
      } else if (
        !getField("city", data) &&
        getStoredItem("city") != "false" &&
        getStoredItem("city") &&
        submitedFrom.has("input[name='city']").length === 0
      ) {
        cityInserted = true;
        data.push({name: "city", value: "Поля нет в форме"});
      }
      if (
        localStorage.utm_source !== undefined &&
        localStorage.utm_source !== ""
      )
        data.push({name: "utm_source", value: localStorage.utm_source});

      if (
        localStorage.utm_medium !== undefined &&
        localStorage.utm_medium !== ""
      )
        data.push({name: "utm_medium", value: localStorage.utm_medium});

      if (
        localStorage.utm_campaign !== undefined &&
        localStorage.utm_campaign !== ""
      )
        data.push({name: "utm_campaign", value: localStorage.utm_campaign});

      if (
        localStorage.utm_campaign_name !== undefined &&
        localStorage.utm_campaign_name !== ""
      )
        data.push({
          name: "utm_campaign_name",
          value: localStorage.utm_campaign_name,
        });

      if (localStorage.utm_term !== undefined && localStorage.utm_term !== "")
        data.push({name: "utm_term", value: localStorage.utm_term});

      if (
        localStorage.utm_content !== undefined &&
        localStorage.utm_content !== ""
      )
        data.push({name: "utm_content", value: localStorage.utm_content});

      if (
        localStorage.utm_placement !== undefined &&
        localStorage.utm_placement !== ""
      )
        data.push({name: "utm_placement", value: localStorage.utm_placement});

      if (
        localStorage.device_type !== undefined &&
        localStorage.device_type !== ""
      )
        data.push({name: "device_type", value: localStorage.device_type});

      if (
        localStorage.utm_description !== undefined &&
        localStorage.utm_description !== ""
      )
        data.push({
          name: "utm_description",
          value: localStorage.utm_description,
        });

      if (
        localStorage.utm_region_name !== undefined &&
        localStorage.utm_region_name !== ""
      )
        data.push({
          name: "utm_region_name",
          value: localStorage.utm_region_name,
        });

      if (localStorage.yclid !== undefined && localStorage.yclid !== "")
        data.push({name: "yclid", value: localStorage.yclid});

      if (
        !cityInserted &&
        ymaps.geolocation.city !== undefined &&
        ymaps.geolocation.city !== ""
      )
        data.push({name: "city", value: "не заполнено"});

      data.push({name: "page_url", value: window.location.href});

      data.push({
        name: "user_location_ip",
        value: getStoredItem("user_location_ip"),
      });

      // custom data
      var submitter = event.originalEvent.submitter;
      if (submitter !== undefined) {
        data.push({name: "btn_text", value: submitter.innerText});
      }
      data.push({name: "page_title_text", value: document.title});

      var x = new Date();
      data.push({name: "timezone", value: (-1 * x.getTimezoneOffset()) / 60});

      // clicked button
      if ($.fancybox) {
        var fancy = $.fancybox.getInstance();
        if (fancy) {
          var title = fancy.current.opts.$orig[0].getAttribute("data-bttitle");
          data.push({name: "bttitle", value: title});
        }
      }

      for (var i = data.length - 1; i >= 0; i--) {
        formData.append(data[i].name, data[i].value);
      }

      // console.log(data);

      $.ajax({
        type: "POST",
        url: "php/formProcessor.php",
        data: formData,
        processData: false,
        contentType: false,
        dataType: "json",
        beforeSend: function () {
          if (preloader) {
            preloader.show();
          }
        },
        success: function (resp) {
          console.log(resp);
          if (resp == 1) {
            window.location.href = "./thanks.html";
          } else if (resp == 2) {
            $("button[data-fancybox-close]").trigger("click");
            if (preloader) {
              preloader.hide();
            }
          } else {
            alert("Something was wrong. Please, contact administrator.");
            if (preloader) {
              preloader.hide();
            }
          }
        },
      });

      return false;
    }
  });

  if (document.getElementById("thanksNameModal") != undefined) {
    $("#formCaller").trigger("click");
    if (getStoredItem("city") && getStoredItem("city") != "false")
      document.getElementById("city").value = getStoredItem("city").trim();

    if (getStoredItem("name") && getStoredItem("name") != "false") {
      var thankNameText = $("#thanksNameModal").text();
      $("#thanksNameModal").text(
        getStoredItem("name").trim() + ", " + thankNameText.toLowerCase(),
      );
      $("#thanksName").text(getStoredItem("name").trim() + ",");
      document.title =
        "" + getStoredItem("name").trim() + ", спасибо! Ваша заявка принята";
    } else {
      $("#thanksNameModal").text("Спасибо!");
      $("#thanksName").text("Наши");
    }
  }
});
